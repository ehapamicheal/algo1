import React from 'react'
import { Link } from 'react-router-dom';
import Dot3 from "../images/dot 3.png";
import FooterLogo from "../images/footer log.png";

const Footer = () => {
  return (
    <div className="footer_overall_container">
        <div className="footer_dot1">
            <img src={Dot3} alt="Flat Dot Image"/>
        </div>

        <div className="footer_main container">
            <div className="footer_text_box">
                <img src={FooterLogo} alt=" Footer Logo" />

                <div className="footer_links">
                    <Link className="footer_link">Terms & Conditions</Link>
                    <Link className="footer_link">Privacy Policy</Link>
                </div>
            </div>

        </div>

        <hr className="footer_hr" />

        <div className="footer_bottom">
            <p>All rights reserved @Algo</p>
        </div>

        <div className="footer_dot2">
            <img src={Dot3} alt="Flat Dot Image 2"/>
        </div>

    </div>
  )
}

export default Footer;