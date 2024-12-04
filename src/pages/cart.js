import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/cart.css"; // Стиль для корзины

function Cart() {
    const [cartItems, setCartItems] = useState([]); // Хранит товары в корзине
    const [totalPrice, setTotalPrice] = useState(0); // Общая стоимость корзины (начальное значение 0)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch("http://localhost:3000/cart"); // Запрос на сервер для получения корзины
                const data = await response.json();
                setCartItems(data); // Устанавливаем все товары
                calculateTotalPrice(data);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    // Рассчитываем общую цену
    const calculateTotalPrice = (items) => {
        const total = items.reduce(
            (sum, item) => sum + parseFloat(item.price) * item.quantity, 
            0
        );
        setTotalPrice(total);
    };

    // Добавление товара в корзину или увеличение количества
    const addToCart = async (product) => {
        try {
            const response = await fetch("http://localhost:3000/cart");
            const cartItems = await response.json();

            // Проверяем, есть ли товар с таким названием в корзине
            const existingProduct = cartItems.find(item => item.title === product.title);

            if (existingProduct) {
                // Если товар уже в корзине, увеличиваем его количество
                const updatedQuantity = existingProduct.quantity + 1;
                await fetch(`http://localhost:3000/cart/${existingProduct.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ quantity: updatedQuantity }),
                });

                setCartItems(prevCart => prevCart.map(item =>
                    item.id === existingProduct.id ? { ...item, quantity: updatedQuantity } : item
                ));
            } else {
                // Если товара нет в корзине, добавляем его с количеством 1
                await fetch("http://localhost:3000/cart", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...product, quantity: 1 }),
                });

                setCartItems(prevCart => [...prevCart, { ...product, quantity: 1 }]);
            }
            calculateTotalPrice(cartItems);
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };

    // Уменьшаем количество товара на 1 или удаляем его
    const handleRemoveItem = async (id) => {
        const itemToRemove = cartItems.find((item) => item.id === id);

        if (!itemToRemove) return;

        try {
            if (itemToRemove.quantity > 1) {
                // Уменьшаем количество товара на 1
                const updatedQuantity = itemToRemove.quantity - 1;
                const response = await fetch(`http://localhost:3000/cart/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ quantity: updatedQuantity }),
                });

                if (response.ok) {
                    setCartItems((prevCart) =>
                        prevCart.map((item) =>
                            item.id === id
                                ? { ...item, quantity: updatedQuantity }
                                : item
                        )
                    );
                    calculateTotalPrice(cartItems);
                }
            } else {
                // Удаляем товар, если количество 1
                const response = await fetch(`http://localhost:3000/cart/${id}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    setCartItems((prevCart) =>
                        prevCart.filter((item) => item.id !== id)
                    );
                    calculateTotalPrice(cartItems);
                }
            }
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    // Обрабатываем оформление заказа
    const handleCheckout = async () => {
        try {
            const response = await fetch("http://localhost:3000/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ items: cartItems, totalPrice }),
            });
            if (response.ok) {
                alert("Thank you for your purchase!");
                setCartItems([]); // Очищаем корзину после оформления заказа
                navigate("/"); // Перенаправляем на главную страницу
            }
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    // Функция для безопасного форматирования цены
    const formatPrice = (price) => {
        return !isNaN(price) ? parseFloat(price).toFixed(2) : "0.00";
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                <div>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.title}</h3>
                                    <p>Price: ${formatPrice(item.price)}</p>
                                    <p>Quantity: {item.quantity}</p> {/* Отображение количества */}
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="remove-item-btn"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h2>Total: ${formatPrice(totalPrice)}</h2>
                        <button onClick={handleCheckout} className="checkout-btn">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart;
