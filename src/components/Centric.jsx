import React from 'react'
import MediumBg from "../images/medium dot.png";
import DoublecoloumSvg from "../svgs/semi-coloum left.svg";
import rightColumn from "../svgs/right-column.svg";
import TypewriterHeader from './TypewriterHeader';

const Centric = () => {
  return (
   <>
        <div className="centric_business_container">
            <div className="centric_bg_box1">
                <img src={MediumBg} alt="Medium dot image" />
            </div>

            <div className="centric_business_main container_2">
                <div className="centric_business_top">
                    <div className="centric_business_left">
                        <TypewriterHeader 
                            words={['Client centric business']}
                            elementType="h2"
                            className="client_centric_b"
                        />
                    </div>

                    <div className="centric_business_right">
                        <p className="p1">Our clients are at the centre of our business. We aim at providing 
                            high-quality, one-stop-shop solutions to our client’s software needs.
                        </p>

                        <p className="p2">We have worked for many companies of all sizes and geographies 
                            over the last 10 years
                        </p>
                    </div>
                </div>

                <div className="centric_bottom_box">
                   <p><img className="img1" src={DoublecoloumSvg} alt="Left Double Column"/> <span className="semi_span">Algo was very professional, effective, and delivered great quality software as promised. The project was particularly complex due to lack of support from the broker’s API team, but Algo was always there to figure things out. The team was always very polite, friendly, cooperative and competent. If I want to get a job done, I always go back to Algo.</span>  <img className="img2" src={rightColumn} alt="Right Double column" /></p>
                </div>

                <div className="trade-footer_bo">
                    <p>CTO – Fintech / Trading Project</p>
                </div>
            </div>

            <div className="centric_bg_box2">
                <img src={MediumBg} alt="Medium dot image2" />
            </div>
        </div>
   </>
  )
}

export default Centric;