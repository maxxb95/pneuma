import React from "react";
import InfoContainer from "../InfoContainer";
import "./About.css";

const About = () => {
    return (
        <InfoContainer>
            <div>
                <h3>Founded in 2021</h3>
                <p>
                    Pneuma Investment Management, LLC (“PIM”) was founded in 2021 by Thomas Kenneally. PIM is
                    headquartered in Schenectady, NY and is the General Partner to the Pneuma Value Fund, LP.
                </p>
            </div>
            <br/>
            <div>
                <h3>Firm Values</h3>
                <p><b>Integrity.</b> PIM believes that the best way to grow is to be honest, straightforward and act
                    in the best interest of our limited partners. We strive to exemplify this. The investment business
                    is built on trust and that is something we take very seriously.</p>
                <p><b>Perseverance.</b> Providing quality and sustainable investment returns takes daily consistency and
                    perseverance. PIM will stay true to our philosophy and always strive to be better for our investors,
                    in good times and bad.</p>
                <p><b>Patience.</b> This is perhaps the most important virtue to being a good investor in our eyes.
                    The market’s daily, weekly and monthly volatility can make one question their investments or ideas.
                    Patience is a key component to letting investment ideas play-out and getting through market
                    downturns or recessions.</p>
            </div>
        </InfoContainer>
    );
};

export default About;
