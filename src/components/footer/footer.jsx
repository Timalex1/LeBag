import React from "react";
import './footer.styles.scss';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <p>LE_BAG Store {year}</p>
        </div>
    )
}


export default Footer;