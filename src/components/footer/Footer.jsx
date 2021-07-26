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
                    {/*    <Link className="nav-link" to={PATH.ABOUT} onClick={() => setActiveLink("About")}>*/}
                    {/*    About*/}
                    {/*</Link>*/}

                        <a href={PATH.DISCLAIMER}>
                            <span> DISCLAIMER</span>
                        </a>
                        &nbsp; &nbsp; |&nbsp; &nbsp;
                        <a href="/privacy-policy/">
                            <span>PRIVACY POLICY</span>
                        </a>
                    </strong>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
