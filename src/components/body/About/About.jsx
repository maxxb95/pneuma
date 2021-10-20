import React from "react";
import InfoContainer from "../InfoContainer";
import "./About.css";

const About = () => {
    return (
        <InfoContainer>
            <div>
                <h3 style={{ marginBottom: "8px", marginTop: "8px" }}>Founded in 2021</h3>
                <p>
                    Pneuma Investment Management, LLC (“PIM”) was founded in 2021 by Thomas Kenneally. PIM is
                    headquartered in Schenectady, NY and is the General Partner of Pneuma Value Fund, LP.
                </p>
            </div>
            <br/>
            <div>
                <h3 style={{ marginBottom: "8px", marginTop: "8px" }}>Firm Values</h3>
                <p><b>Integrity.</b> We believe being completely honest and straightforward is a must in the investment
                  business. We want our Limited Partners to know we are doing the right thing by them when they are
                  looking and when they are not.</p>
                <br/>
                <p><b>Perseverance.</b> Providing quality and sustainable investment returns takes daily consistency
                  and discipline. We will stay true to our philosophy and always strive to be better for our investors,
                  in good times and bad.</p>
                <br/>
                <p><b>Patience.</b> This is perhaps the most important virtue to being a good investor in our eyes.
                  The market’s daily, weekly and monthly volatility can cause some fear or desire to react.
                  Patience is a key component to letting investment ideas play-out and getting through market
                  downturns or recessions.</p>
            </div>
        </InfoContainer>
    );
};

export default About;
