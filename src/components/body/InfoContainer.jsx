import React from "react";
import "./InfoContainer.css";

const InfoContainer = ({ children }) => {
    return (
        <div className="info-outer-container">
            <div className="info-inner-container">
                <div className="info-text-container">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default InfoContainer;