import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "../style/product.css";

function Product(props) {
    const addToCart = async (product) => {
        try {
            // Получаем текущие товары в корзине
            const response = await fetch("http://localhost:3000/cart");
            const cartItems = await response.json();

            // Проверяем, есть ли уже товар в корзине
            const existingProduct = cartItems.find((item) => item.title === product.title);

            if (existingProduct) {
                // Если товар уже есть в корзине, обновляем его количество
                const updatedQuantity = existingProduct.quantity + 1;

                const updateResponse = await fetch(`http://localhost:3000/cart/${existingProduct.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ quantity: updatedQuantity }),
                });

                if (updateResponse.ok) {
                    alert(`${product.title} quantity increased by 1!`);
                } else {
                    console.error("Failed to update quantity");
                }
            } else {
                // Если товара нет в корзине, добавляем его с количеством 1
                const addResponse = await fetch("http://localhost:3000/cart", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...product, quantity: 1 }),
                });

                if (addResponse.ok) {
                    alert(`${product.title} added to cart!`);
                } else {
                    console.error("Failed to add item to cart");
                }
            }
        } catch (error) {
            console.error("Error handling cart:", error);
        }
    };

    return (
        <div className="product-container">
            <div className="box">
                <div className="product-desc">
                    <img src={props.image} alt={props.title} onClick={props.onImageClick} />
                    <p className="product-title">{props.title}</p>
                    <p className="product-info1">{props.info1}</p>
                    <div className="product-line"></div>
                    <div className="price-info">
                        <p className="product-price">{props.price}</p>
                        <div className="product-btn">
                            <button onClick={() => addToCart(props)}>
                                <FaShoppingBag />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
