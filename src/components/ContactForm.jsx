import React, { useState } from 'react'
import "./contactform.css";
import maskImage4 from "../images/Mask group 4.png";
import EmailSvg from "../svgs/email 1.svg";
import MediumDot from "../images/medium dot.png"
import BlueDot from "../images/Group 1000001074.png";

const ContactForm = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        setFileName(event.target.files[0]?.name || '');
    };
    
  return (
    <>
    <div className="contact_form_container">
        <div className="mediun_dot1">
            <img src={MediumDot} alt="dot 1" />
        </div>

        <div className="contact_form_main">
            <div className="contact-left">
                <h2>Do you want to talk about your project?</h2>
                <div className="contact-email_icon_box">
                    <img src={EmailSvg} alt="Email icon" />
                    <a href="mailto:sales@algocodingexperts.com" target="_blank" rel="noreferrer">sales@algocodingexperts.com</a>
                </div>
               <div className="dot1_box">
                    <img src={maskImage4} alt="Contact image" className="contact-image" />

                    <div className="medium_contact_dot_box">
                        <img src={BlueDot} alt="blue image" />
                    </div>
               </div>
            </div>

            <div className="contact-right">
                <h3>Send us your question or share your idea with us!</h3>
                <form>
                    <div className="form-group1">
                        <label>Email <span>*</span></label>
                        <input type="email" required />
                    </div>

                    <div className="form-group_name_box">
                        <div className="first_name_box">
                            <label htmlFor="">First name <span>*</span></label>
                            <input type="text" required />
                        </div>

                        <div className="last_name_box">
                            <label htmlFor="">Last name <span>*</span></label>
                            <input type="text" required />
                        </div>
                    </div>

                    <div className="form-group2">
                        <label>Your message / project decription</label>
                        <textarea required></textarea>
                    </div>

                    <div className="form-group3">
                        <label htmlFor="fileInput">{fileName ? fileName : 'Attach file'}</label>
                        <input type="file" id="fileInput" onChange={handleFileChange}  required />
                    </div>

                    <button className="send_button" type="submit">Send Message</button>
                </form>
            </div>

        </div>

        <div className="mediun_dot2">
            <img src={MediumDot} alt="dot 2" />
        </div>
    </div>
    </>
  )
}

export default ContactForm;
