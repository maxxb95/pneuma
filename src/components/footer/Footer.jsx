import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="content-info" role="contentinfo">
            <div className="footer-content-container">
                <p>
                    <strong>
                        <a href="/disclaimer/">
                            <span> DISCLAIMER</span>
                        </a>
                        &nbsp; &nbsp; |&nbsp; &nbsp;
                        <a href="/privacy-policy/">
                            <span>PRIVACY POLICY</span>
                        </a>
                        &nbsp; &nbsp; |&nbsp; &nbsp;
                        <a href="/related-sites/">
                            <span>RELATED SITES</span>
                        </a>
                    </strong>
                </p>
                <p><b></b>PLACEHOLDER</p>
            </div>
        </footer>
    )
}

export default Footer;
