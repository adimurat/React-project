import logo from './image/mylogo.png'
import React from 'react'
import { Link } from 'react-router-dom'
import './style/nav.css'
import './style/common.css'
import icon1 from './image/facebook-16.png'
import icon2 from './image/insta.png'
import icon3 from './image/twit.png'



function Nav() {

    const onMouseEnter = (e) => {
        e.target.style.color = '#C0AF84'
    }

    const onMouseLeave = (e) => {
        e.target.style.color = 'whitesmoke'
    }
    return(
        <>
            <header className = "header"> 
                <div className = "container">
                    <div className = "header_row">
                        <div className = "logo">
                            <img src={logo}/>
                        </div>
                        <nav className = "header_nav">
                            <ul>
                                <li><Link to = "/AboutUs" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>About us</Link></li>
                                <li><Link to= "/Books of month" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Books of the month</Link></li>
                                <li><a href = "#!" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Our bookshop</a></li>
                                <li><a href = "#!" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Feedback</a></li>
                                <li><a href = "#!" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Contact us</a></li>
                            </ul>
                        </nav>
                        <div className = "icons">
                            <ul>
                                <li><a href = "#!"><img src = {icon1}></img></a></li>
                                <li><a href = "#!"><img src = {icon2}></img></a></li>
                                <li><a href = "#!"><img src = {icon3}></img></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Nav;