import React from "react";
import './footer.styles.scss';

const Footer = () => {

    const year = new Date().getFullYear();

    return(
        <div className="footer">
            <p>NOMAD Store {year}</p>
        </div>
    )
}


export default Footer;