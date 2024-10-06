import React from "react";
import '../pages/section2.css'
import book1 from '../image/book_1.jpg'
import Card from "../componets/card";


function Section2() {
    return <>
            <div>
                <h1 style={{textTransform: 'uppercase', margin: '0', padding: '0'}}>Popular books</h1>
            </div>
            <div className="product">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
}
export default Section2;