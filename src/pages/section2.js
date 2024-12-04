import React, { useEffect, useState, useCallback } from "react";
import '../pages/section2.css';
import SideBar from "../componets/sideBar";
import Product from "../componets/product";
import Nav from "../menu";
import Modal from "../componets/modal";

function Section2() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchBooks = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3000/books');
            if (!response.ok) {
                throw new Error('Error fetching books');
            }
            const data = await response.json();
            setBooks(data);
        } catch (err) {
            setError(err.message);
        }
    }, []);

    const fetchBooksByGenre = useCallback(async (genre) => {
        try {
            const response = await fetch(`http://localhost:3000/books?genre=${genre}`);
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }, []);

    const handleSelectGenre = useCallback((genre) => {
        setSelectedGenre(genre);
        fetchBooksByGenre(genre);
    }, [fetchBooksByGenre]);

    const handleImageClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    // Обновление отзывов для конкретной книги
    const handleReviewAdd = (bookId, updatedReviews) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === bookId ? { ...book, reviews: updatedReviews } : book
            )
        );
    };

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <>
            <Nav />
            <SideBar onSelectGenre={handleSelectGenre} />
            {error && <p className="error-message">{error}</p>}
            <div className="product">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div className="product-item" key={book.id}>
                            <Product
                                title={book.title}
                                image={book.coverImage}
                                price={book.price}
                                info1={book.description}
                                onImageClick={() => handleImageClick(book)}
                            />
                        </div>
                    ))
                ) : (
                    <p>Загрузка книг...</p>
                )}
            </div>
            <Modal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                product={selectedProduct}
                onReviewAdd={handleReviewAdd} // Передаем функцию обновления отзывов
            />
        </>
    );
}

export default Section2;
