import React from "react";
import InfoContainer from "./InfoContainer";
import "./About.css";

const About = () => {
    return (
        <InfoContainer>
            <div className="info-text-section about-info-text-section-1">
                <h3>Founded in 2021</h3>
                <a>
                    Pneuma Investment Management, LLC (“Pnuema”) was founded in 2021 by Tom Kenneally. Pneuma is
                    headquartered in Schenectady, NY and is the General Partner to the Pneuma Value Fund, LP.
                </a>
            </div>
            <div className="info-text-section about-info-text-section-2">
                <h3>Firm Values</h3>
                <a>Integrity</a>
                <a>Perseverance</a>
                <a>Patience</a>
            </div>
        </InfoContainer>
    );
};

export default About;