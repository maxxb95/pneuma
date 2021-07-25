import React, { useState } from "react";
import { Link } from 'react-router-dom';
import * as PATH from "../../consts/Links";
import './Header.css';

function Header() {
    const [activeLink, setActiveLink] = useState("");

    return (
        <header className="banner">
            <div className="logo-container">
                <Link to={PATH.HOME} onClick={() => setActiveLink("")}>
                    <img className="logo" src="/LLC_Main_Logo_I_INVERSE.jpg" alt="image" />
                </Link>
            </div>
            <div className="nav-container">
                <div className={`nav-link-container ${activeLink === "About" ? "nav-link-selected" : ""}`}>
                    <Link className="nav-link" to={PATH.ABOUT} onClick={() => setActiveLink("About")}>
                        About
                    </Link>
                </div>
                <div className={`nav-link-container ${activeLink === "Who" ? "nav-link-selected" : ""}`}>
                    <Link className="nav-link" to={PATH.WHO} onClick={() => setActiveLink("Who")}>
                        Who
                    </Link>
                </div>
                <div className={`nav-link-container ${activeLink === "What" ? "nav-link-selected" : ""}`}>
                    <Link className="nav-link" to={PATH.WHAT} onClick={() => setActiveLink("What")}>
                        What
                    </Link>
                </div>
                <div className={`nav-link-container ${activeLink === "Contact" ? "nav-link-selected" : ""}`}>
                    <Link className="nav-link" to={PATH.CONTACT} onClick={() => setActiveLink("Contact")}>
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
