import React from 'react'
import mask2 from "../../images/Mask group2.png";
import mask3 from "../../images/Mask group 3.png";
import mask5 from "../../images/Mask group 5.png";
import MapImage from "../../images/map.png";
import "./about.css"
import MediumBg from "../../images/medium dot.png";
import DoublecoloumSvg from "../../svgs/semi-coloum left.svg";
import rightColumn from "../../svgs/right-column.svg";
import BlueDot from "../../images/Group 1000001074.png";
import Centric from '../../components/Centric';


const About = () => {
  return (
    <>  <div className="about_background_image">
            <div className="about_background_text_box">
                <h1>A Global Software Specialist Team.</h1>
            </div>
        </div>
       
        <section className="about-story">
            <div className="about-story-container">
                <h1>About Us</h1>
                <div className="about_content1">
                    <div className="about-section-content">
                        <p className="p1">
                            We are a Madrid based company with a global specialist team of highly experienced and qualified experts.
                        </p>
                        <p className="p2">
                            We are a specialist in deploying emerging tech in mainstream ways.
                        </p>
                        <p className="p3">
                            We have a track record a track record of delivering hundreds of projects suceessfully each year for clients around the world.
                        </p>
                    </div>

                    <div className="about-section-image">
                        <img src={MapImage} alt="Our Story Image" />
                    </div>
                </div>
            
            </div>

            <div className="works_enthics_container">
                <div className="enthics_bg_box1">
                    <img src={MediumBg} alt="Medium dot image" />
                </div>

                <div className="works_enthics_main container_2">
                    <h2>Our Work Ethics</h2>
                    <div className="works_enthics_bottom_box">
                       <p><img className="img1" src={DoublecoloumSvg} alt="Left Double Column"/> <span className="semi_span">Algo was very professional, effective, and delivered great quality software as promised. The project was particularly complex due to lack of support from the broker’s API team, but Algo was always there to figure things out. The team was always very polite, friendly, cooperative and competent. If I want to get a job done, I always go back to Algo.</span>  <img className="img2" src={rightColumn} alt="Right Double column" /></p>
                    </div>
                </div>

                <div className="enthics_bg_box2">
                    <img src={MediumBg} alt="Medium dot image 2" />
                </div>
            </div>

            <div className="we_believe_cont">
                <div className="we_believe_main">
                    <div className="we_believe_top1">
                        <div className="top1_left">
                            <h2>We believe in team-work above all</h2>
                            <p className="p1">Working cohesively as a team is key to project success. </p>
                            <p className="p2">This is why we focus on our teams professional growth and team building capabilities. We use latest team building tools and our teams are up-to-date on the latest technologies. </p>
                            <p className="p2">other’s strengths to deliver the best products and services.</p>
                        </div>

                        <div className="top1_right">
                            <img className="mask-mag" src={mask2} alt="Mask image 2" />

                            <div className="medium_top1">
                                <img src={BlueDot} alt="vlue image" />
                            </div>
                        </div>
                    </div>

                    <div className="second_container">
                        <div className="we_believe_top2">
                            <div className="top2_left">
                                <img src={mask3} alt="Mask image 2" />

                                <div className="medium_top2">
                                    <img src={BlueDot} alt="blue image 2" />
                                </div>
                            </div>

                            <div className="top2_right">
                                <h2>We are innovative</h2>
                                <p className="p1">We like to think outside the box to provide you with innovative solutions. 
                                    We are experts integrating new age technologies with mainstream software solutions.
                                </p>
                            </div>
                                
                        </div>
                    </div>

                    <div className="third_container">
                        <div className="we_believe_top3">
                            <div className="top3_left">
                                <h2>We are professional</h2>
                                <p className="p1">We focus on delivering high quality software without compromising ethics, transparency and reliability.</p>
                                <p className="p2">
                                    We have a commitment to fostering relationships with our clients that can be served and sustained long-term.
                                </p>
                            </div>

                            <div className="top3_right">
                                <img src={mask5} alt="Mask image 5" />

                                <div className="medium_top3">
                                    <img src={BlueDot} alt="blue image 3" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Centric/>
        </section>
       
    </>
  )
}

export default About;