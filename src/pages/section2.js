import React from "react";
import '../pages/section2.css'
import book1 from '../image/book_1.jpg'
import SideBar from "../componets/sideBar";
import Product from "../componets/product";


function Section2() {
    return <>
            <div>
                <h1 style={{textTransform: 'uppercase', margin: '0', padding: '0'}}>Popular books</h1>
            </div>
            <SideBar/>
            <div className="product">
               <Product title="Book" image={book1} price="1500" info1="asdasdsadaasdasasddasasdadsadsadddddddd"/>
            </div>
        </>
}
export default Section2;