import React, { useState } from 'react';
import "./home.css";
import HomeImage from "../../images/Group 1000001103.png"
import ExpertsBg from "../../images/Group 40972.png"
import BusinessImage from "../../images/Group 1000001575.png"
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Values from "../../components/Values";
import MarkGroupImage from "../../images/Mask group.png";
import Centric from '../../components/Centric';
import TalkProject from '../../components/TalkProject';
import { Link } from 'react-router-dom';
import  { cardSets } from "../../data";
import TypewriterHeader from '../../components/TypewriterHeader';

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


const Home = () => {

    const [currentSet, setCurrentSet] = useState(0);

    const handleNext = () => {
      setCurrentSet((prevSet) => (prevSet + 1) % cardSets.length);
    };
  
    const handlePrevious = () => {
      setCurrentSet((prevSet) => (prevSet - 1 + cardSets.length) % cardSets.length);
    };
    
  return (
    <>
        <div className="home_overall">
            <div className="home_container_main">
                <div className="home_left-_side">
                    <h2>We are your global, multi-disciplinary software development partner for emerging tech projects.</h2>

                    <div className="do_you_box">
                        <p>Do you want to talk about your Project?</p>
                        <Link to="/contact" className="btn">Get Started</Link>
                    </div>
                </div>

                <div className="home_right_side">
                    <img src={HomeImage} alt="Home Image" />
                </div>
            </div>

            <div className="we_take_your_business_container">
                <div className="we_take_top_main">
                    <div className="we_take_top_left">
                        <h4>We take your business to the next level in your digital transforming quest by incorporating new emerging technologies in the way you do business.</h4>

                        <div className="we_take_new_b">
                            <TypewriterHeader 
                                words={['New business models']}
                                elementType="h3"
                                className="we_take_new_b"
                            />
                        </div> 
                    </div>

                    <div className="we_take_top_right">
                        <img src={BusinessImage} alt="Business Image" />
                        
                    </div>
                </div>

                <div className="we_are_experts_container">
                    <img className="exp_bg" src={ExpertsBg} alt="Bg Image" />
                    <div className="experts_main containers">
                        <div className="experts_top">
                            <p className="p1">We are <span>experts</span></p>
                            <p className="p2">developing <span>emerging tech</span> in mainstream ways</p>
                        </div>

                        <div className="mainstream_wrapper">
                            <div className="mainstream_group">
                                <div className="mainstream_card_box">
                                    {cardSets[currentSet].map((card, index) => (
                                        <div className="mainstream_card" key={index}>
                                        {card.title.split('\n').map((line, index) => (
                                            <p key={index}>{line}</p>
                                        ))}
                                            <div className="stream_bottom">
                                                <img src={card.image} alt="" />
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                               
                            </div>

                            <div className="mainstream_pagination_box">
                                <div className="mainstream_pagination_content">
                                    <button className="handlePrev" onClick={handlePrevious}>
                                        <MdKeyboardDoubleArrowLeft />
                                    </button>
                                    <div className="mainstream_1-2_span_box">
                                        <span>{currentSet + 1}/</span>
                                        <span>{cardSets.length}</span>
                                    </div>
                                    <button className="handleNext" onClick={handleNext}>
                                        <MdKeyboardDoubleArrowRight />
                                    </button>
                                </div>
                            </div>

                           
                        </div>
                        
                    </div>
                </div>
            </div>

            <Values/>

            <div className="image_section">
                <div className="image_main container_2">
                    <div className="image_top">
                        <img src={MarkGroupImage} alt="Mark Group Image" />
                    </div>

                    <div className="image_text_box1">
                        <h2>Build your Emerging Tech project with us!</h2>
                        {/* <h2>with us!</h2> */}
                    </div>

                    <div className="image_text_box2">
                        <div className="reply_1_box">
                            <p>Rely on us to take in the project</p>
                            <p> and deliver a <span className="text_bold_secondary-color">turn-key solution</span></p>
                        </div>

                        <span className="middle_line_gray"></span>

                        <div className="reply_2_box">
                            <p><span className="text_bold_green">Expand your team</span> with remote</p>
                            <p>experts from our <span className="text_bold_green">global talent pool</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <Centric/>
            <TalkProject/>

            {/* <div className="do_you_want_project-box">
                <h2>Do you want to talk about</h2>
                <h2 className="sec_h2">your Project?</h2>

                <Link to="/contact" className="btn">Get Started</Link>
            </div> */}


        </div>


    </>
  )
}

export default Home;