import './Disclaimer.css';
import React from "react";
import InfoContainer from "../InfoContainer";

const Disclaimer = () => {
    return (
        <InfoContainer>
            <div className="disclaimer">
                The information herein has been prepared on a confidential basis solely for your informational purposes
                and is being furnished to a limited number of sophisticated investors for discussion purposes only. It
                is not an offer to buy or sell or a solicitation of an offer to buy or sell any limited partnership
                interests, securities or to otherwise participate in any investment or trading strategy (“Investment”).
                If any offer of Investment is made, it shall be pursuant to a definitive Operating Agreement, Private
                Placement Memorandum Subscription Documents and/or other relevant definitive legal documents, prepared
                by or on behalf of Pneuma Investment Management which would contain material information not contained
                herein and which shall supersede the information herein in its entirety. The opportunity mentioned in
                this document will not be registered in your jurisdiction and to the fullest extent possible any such
                offer will be made only pursuant to private placement exemptions available. It may therefore not be
                eligible for sale or investment in your state or country and may not be suitable for you or certain
                types of investors.
                <br/>
                <br/>
                As such, any decision to make an Investment should be made after reviewing the
                definitive Operating Agreement, Private Placement Memorandum Subscription Documents and/or other
                relevant definitive legal documents, prepared by or on behalf of Pneuma Investment Management for the
                opportunity which will contain representations by you that you are a sophisticated investor meeting any
                relevant regulatory requirements and that you have conducted such investigations as you deem necessary
                and after consulting your own investment, legal, accounting and tax advisors in order to make an
                independent determination of the suitability and consequences of making an Investment.
            </div>
        </InfoContainer>
    );
};

export default Disclaimer;
