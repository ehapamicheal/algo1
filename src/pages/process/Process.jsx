import React, { useState } from 'react';
import "./process.css";
import Banners from '../../components/Banners';
import ProcessImage from "../../images/process.png";
import { QualityApproach } from '../../data';
import { steps } from '../../data';
import TalkProject from '../../components/TalkProject';
import { Link } from 'react-router-dom';
import MediumDot from "../../images/medium dot.png";
import { processStep } from '../../data';


import EstimateIcon from "../../svgs/estimate_icon.svg";
import ProposalIcon from "../../svgs/Vector.svg";
import TeamIcon from "../../svgs/Team.svg";
import DevelopmentIcon from "../../svgs/Development.svg";
import DeliverytIcon from "../../svgs/Delivery.svg";

const Process = () => {

    // const [activeStep, setActiveStep] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div>
                <Banners
                    backgroundImage={ProcessImage}
                    text="Quality assurance is at the core of our development process."
                />
            </div>

            <div>

                {/* <div className="our_process_container">
                    <div className="our_process_main container">
                        <div className="our_process_top">
                            <h2>Our Process</h2>
                        </div>

                        <div className="our_process_content">
                            <div className="our_process_box active">
                                <p className="">Analysis & </p>
                                <p className="">Planning</p>
                            </div>

                            <div className="our_process_box">
                                <p>Estimate Complexity</p>
                                <p>& Design Solution</p>
                            </div>

                            <div className="our_process_box">
                                <p>Project Proposal</p>
                            </div>

                            <div className="our_process_box">
                                <p>Assigning an</p>
                                <p> Expert Team</p>
                            </div>

                            <div className="our_process_box">
                                <p>Development</p>
                            </div>

                            <div className="our_process_box">
                                <p>Delivery</p>
                                <p>& Support</p>
                            </div>
                        </div>

                        <div className="our_process_text_box">
                            <p className="change-text">Analysis & Planning</p>

                            <div className="our_process_circle_box active">
                               <div className="span_box">
                                    <span className="circle active"></span>
                                    <span className="circle"></span>
                                    <span className="circle"></span>
                                    <span className="circle"></span>
                                    <span className="circle"></span>
                                    <span className="circle"></span>
                               </div>
                            </div>

                        </div>
                    </div>
                </div> */}

                {/* <div className="our_process_container">
                    <div className="our_process_main container">
                        <div className="our_process_top">
                            <h2>Our Process</h2>
                        </div>

                        <div className="our_process_content">
                            {step.map((steps, index) => (
                                <div
                                    key={index}
                                    className={`our_process_box ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                >
                                    <p>{steps.title1}</p>
                                    {steps.title2 && <p>{steps.title2}</p>}
                                </div>
                            ))}
                        </div>

                        <div className="our_process_text_box">
                            <p className="change-text">{step[activeIndex].content}</p>

                            <div className="our_process_circle_box">
                                <div className="span_box">
                                    {step.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`circle ${index === activeIndex ? 'active' : ''}`}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="our_process_container">
                    <div className="our_process_main container_1">
                        <div className="our_process_top">
                            <h2>Our Process</h2>
                        </div>

                        <div className="our_process_content">
                            {processStep.map((step, index) => (
                                <div
                                    key={step.id}
                                    className={`our_process_box ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                >
                                    <p>{step.title1}</p>
                                    {/* {step.title2 && <p>{step.title2}</p>} */}
                                </div>
                            ))}
                        </div>

                        <div className="our_process_text_box">
                            <p className="change-text">{processStep[activeIndex].content}</p>

                            <div className="our_process_circle_box">
                                <div className="span_box">
                                    {processStep.map((step, index) => (
                                        <span
                                            key={step.id}
                                            className={`circle ${index === activeIndex ? 'active' : ''}`}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               

                <TalkProject/>


                <div className="quality-approach">
                    <div className="quality-approach_main">
                        <h1>
                            A quality approach to <span>Software Development</span>
                        </h1>

                        <div className="quality-approach_contents">
                            <div className="quality-approach_icon_box">
                                <div className="quality-approach_icon">
                                    <img src={EstimateIcon} alt="" />
                                    <h3>Estimate Complexity Design Solution</h3>
                                </div>
                                
                                <div className="quality-approach_text_box">
                                    <p>Once planning is done, we prepare a <span className="text_font_weight_700">detailed design solution</span> for your project.</p>
                                </div>
                            </div>

                            <div className="quality-approach_icon_box">
                                <div className="quality-approach_icon">
                                    <img src={ProposalIcon} alt="" />
                                    <h3>Project Proposal</h3>
                                </div>
                                
                                <div className="quality-approach_text_box">
                                    <p>Our Proposals clearly detail the <span className="text_font_weight_700">technology, deliverables and timing.</span> We know that timing is of essence and focus on providing a timely delivery.</p>
                                </div>
                            </div>

                            <div className="quality-approach_icon_box">
                                <div className="quality-approach_icon">
                                    <img src={TeamIcon} alt="" />
                                    <h3>Assigning Expert Team</h3>
                                </div>
                                
                                <div className="quality-approach_text_box">
                                    <p>We assign you an expert team to work on your project with a <span className="text_font_weight_700"> dedicated project manager</span> to ensure smooth collaboration.</p>
                                </div>
                            </div>

                            <div className="quality-approach_icon_box">
                                <div className="quality-approach_icon">
                                    <img src={DevelopmentIcon} alt="" />
                                    <h3>Development</h3>
                                </div>
                                
                                <div className="quality-approach_text_box">
                                    <p>We work closely with you to check deliverables on a regular basis. We  <span className="text_font_weight_700">use proven agile methodologies</span> and use tools to provide you with optimum visibility of the state of project at all times.</p>
                                </div>
                            </div>

                            <div className="quality-approach_icon_box">
                                <div className="quality-approach_icon">
                                    <img src={DeliverytIcon} alt="" />
                                    <h3>Delivery & Support</h3>
                                </div>
                                
                                <div className="quality-approach_text_box">
                                    <p>We pride to deliver <span className="text_font_weight_700">highly maintainable, "adaptive code"</span> to a high standard.</p>
                                    <p> We stay with you as long as needed to ensure the <span className="text_font_weight_700">success of your project.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="know_where_container">
                    <div className="dot_image_box1">
                        <img src={MediumDot} alt="" />
                    </div>

                    <div className="know_where_main">
                        <div className="know_where_left_side">
                            <h3>Don't know where to start?</h3>
                        </div>

                        <div className="know_where_right_side">
                            <h4>We are here to help you</h4>
                            <p>At Algo we will listen to your requirements and provide you with 
                                the best solution to your software’s needs.
                            </p>
                            <p>We have worked on hundreds of projects for clients of
                                all sizes around the world.
                            </p>

                            <div className="btn_white_box">
                                <Link className="btn_white" to="/contact">Get Started</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dot_image_box2">
                        <img src={MediumDot} alt="" />
                    </div>
                </div>
            </div>

            
        </>
   )
}

export default Process;