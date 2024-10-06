import React from "react";
import '../style/common.css'
import '../pages/section1.css'
import { Button } from "antd";
import bookImage from '../image/book.png'
function Section1() {

    const Enter = (e) => {
        e.target.style.backgroundColor = 'black'
        e.target.style.color = 'white'
        
    }
    const Leave = (e) => {
        e.target.style.backgroundColor = '#C0AF84'
        e.target.style.border = 'none'
    }

    
    

    return (
        <>
            <div className="container" style={{height: '100vh'}}>
                <div className="section_info">
                    <div>
                        <img src={bookImage} className="section-img"></img>
                    </div>
                    <div className="content__info">
                        <h1>About Bookshelf</h1>
                        <p className="color">We make books great again. Just kidding, books were always great!</p>
                        <p className="sub_info">Every month, we send our subscribers a box with the five best books of the month. These are bestsellers and classic books that deserve to be read and placed on your bookshelf. We select books according to the preferences of our customers. In addition, you can always attend our events, join the book club or just visit our offline store in Almaty.</p>
                        <span className="buttons">
                            <Button type="primary" className="btnLog" onMouseEnter={Enter} onMouseLeave={Leave}>Login</Button>
                            <Button className="btnSign" onMouseEnter={Enter} onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'white'
                                e.target.style.color = 'black'
                            }}>Sign up</Button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1;