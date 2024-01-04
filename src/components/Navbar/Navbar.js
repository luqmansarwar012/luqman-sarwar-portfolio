import React from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
    const openHandler=()=>{
        document.getElementById("sidebar").style.right="0";
    }
    const closeHandler=()=>{
        document.getElementById("sidebar").style.right="-200px";
    }
 
    return (
        <div id="navbar">
            <div className="container">
            <nav>
                    <div className="navbar__logo">
                        <a className="logo__text" href="#header" >Luqman's Portfolio</a>
                    </div>

                    <ul id="sidebar">
                        <li>
                            <a href="#header">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#tech">Tech.</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <i className="fa-solid fa-circle-xmark menu__fixer" onClick={closeHandler}></i>
                    </ul>
                    <i className="fa-solid fa-circle-chevron-down menu__fixer menu__opener" onClick={openHandler}></i>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
