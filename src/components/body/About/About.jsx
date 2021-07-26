import React from "react";
import InfoContainer from "../InfoContainer";
import "./About.css";

const About = () => {
    return (
        <InfoContainer>
            <div>
                <p><b>Founded in 2021</b></p>
                <a>
                    Pneuma Investment Management, LLC (“Pnuema”) was founded in 2021 by Tom Kenneally. Pneuma is
                    headquartered in Schenectady, NY and is the General Partner to the Pneuma Value Fund, LP.
                </a>
            </div>
            <br/>
            <div>
                <p><b>Firm Values</b></p>
                <p>Integrity</p>
                <p>Perseverance</p>
                <p>Patience</p>
            </div>
        </InfoContainer>
    );
};

export default About;
