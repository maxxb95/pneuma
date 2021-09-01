import React from "react";
import "./Footer.css";
import * as PATH from "../../consts/Links";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="content-info" role="contentinfo">
            <div className="footer-content-container">
                <p>
                    <strong>
                        <a href={PATH.DISCLAIMER}>
                            <span> DISCLAIMER</span>
                        </a>
                    </strong>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
