import React from "react";
import '../style/product.css'
import { FaShoppingBag } from "react-icons/fa";
function Product(props) {
    return (
        <>
            <div className="product-container">
                <div className="box">
                    <div className="product-desc">
                            <img src={props.image}></img>
                            <p className="product-title">{props.title}</p>
                            <p className="product-info1">{props.info1}</p>
                            <div className="product-line"></div>
                            <div className="price-info">
                                <p className="product-price">{props.price}</p>
                                <div className="product-btn">
                                    <button><FaShoppingBag/></button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;