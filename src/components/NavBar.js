import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    const toggleNavBarMenu = e => {
        e.preventDefault();
        document.querySelector(".navbar-menu").classList.toggle("is-active");
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" >
            <div className="navbar-brand">
                <Link className="navbar-item logo" to="/">Cars4<span>Sale</span></Link>

                <a href = "/" onClick = {toggleNavBarMenu} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">

                    <Link to = "/cars" className={ `navbar-item`}>
                        Search Cars
                    </Link>

                </div>
                
            </div>
        </nav>
    );
};

export default NavBar;