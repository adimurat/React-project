import React from "react";
import book1 from '../image/book_1.jpg'
function Card() {
    return (
        <>
            <div className="box">
                <img src={book1}></img>
                <div className="description">
                    <p className="price">1500</p>
                    <p className="description-title">Aasdsadss</p>
                    <p className="description-info">sadasdsa</p>
                </div>
            </div>
        </>
    )
}

export default Card;