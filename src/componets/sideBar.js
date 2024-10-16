import React, { useState } from "react";
import { FaBars } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io";
import '../style/sideBar.css'


let Genres = [{
    id: 1,
    title: "Fantasy"
},

{
    id: 2,
    title: "Horror"
},
{
    id: 3,
    title: "sadsa"
},
{
    id: 4,
    title: "sadasd"
}
]
function SideBar() {

    const [sidebar, setSideBar] = useState(false)

    const showSideBar = () => {
        setSideBar(!sidebar)
    }

    
    return(
        <>
           <div className="navbar">
                <a href="#" className="menu-bars">
                    <FaBars onClick={showSideBar} style={{color:'whitesmoke'}}/>
                </a>
           </div>
           <nav className= {sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSideBar}>
                    <li className="navbar-toggle">
                        <a href="#" className="menu-bars" style={{color: 'black'}}>
                            <IoMdClose style={{color:'whitesmoke'}}/>
                        </a>
                    </li>
                    {Genres.map((item, index) => {
                        return (
                            <li key={index} className="nav-text">
                                <a href="">
                                    <span className="item-span">{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
           </nav>
        </>
    )
}
export default SideBar;