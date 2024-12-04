import React, { useState } from "react";
import "../style/modal.css";

function Modal({ isOpen, onClose, product, onReviewAdd }) {
    const [reviewText, setReviewText] = useState("");
    const [showReviews, setShowReviews] = useState(false);

    const handleAddReview = async () => {
        if (!reviewText.trim()) {
            alert("Введите текст отзыва!");
            return;
        }

        // Добавляем новый отзыв в локальный список
        const updatedReviews = [...product.reviews, reviewText];

        // Обновляем отзывы в родительском компоненте только для текущей книги
        onReviewAdd(product.id, updatedReviews);

        // Очищаем поле ввода
        setReviewText("");
        alert("Отзыв добавлен!");

        // Отправляем на сервер для обновления данных
        try {
            const updatedProduct = {
                ...product,
                reviews: updatedReviews,
            };

            const response = await fetch(`http://localhost:3000/books/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });

            if (!response.ok) {
                throw new Error("Ошибка при обновлении отзыва на сервере");
            }
        } catch (error) {
            console.error("Ошибка при добавлении отзыва:", error);
            alert("Ошибка при добавлении отзыва. Попробуйте снова.");
        }
    };

    const toggleShowReviews = () => {
        setShowReviews(!showReviews);
    };

    if (!isOpen || !product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{product.title}</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={product.coverImage} alt={product.title} />
                    <p className="modal-p">{product.description2}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p className="modal-p"><strong>Price: </strong> ${product.price}</p>
                    {product.rating && <p style={{ color: 'black' }}><strong>Оценка:</strong> {product.rating} / 5</p>}
                </div>
                <div>
                    <h3 onClick={toggleShowReviews} style={{ cursor: "pointer", color: "black" }}>
                        {showReviews ? "Скрыть отзывы" : "Показать отзывы"}
                    </h3>
                    {showReviews && (
                        <div>
                            {product.reviews.length > 0 ? (
                                <ul>
                                    {product.reviews.map((review, index) => (
                                        <li key={index} style={{ color: 'black' }}>{review}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Отзывов пока нет.</p>
                            )}
                        </div>
                    )}
                </div>

                <div className="add-review">
                    <textarea
                        placeholder="Напишите ваш отзыв..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    ></textarea>
                    <button onClick={handleAddReview}>Добавить отзыв</button>
                </div>
                <button className="close-button" onClick={onClose}>
                    Закрыть
                </button>
            </div>
        </div>
    );
}

export default Modal;
