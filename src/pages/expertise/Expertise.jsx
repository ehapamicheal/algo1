import React from "react";
import "./expertise.css";
import Banners from "../../components/Banners";
import ExpertiseImage from "../../images/Expertise.png";
import ExpertIcon from "../../svgs/expert.svg";
import AgileIcon from "../../svgs/agile.svg";
import FlexibleIcon from "../../svgs/flexible.svg";
import FocusedIcon from "../../svgs/focused 1.svg";
import ExperienceIcon from "../../svgs/experience 1.svg";
import ReliableIcon from "../../svgs/reliable.svg";

import Values from "../../components/Values";
import ContactForm from "../../components/ContactForm";



// VIRTUAL SECTION CODE
import virMage from "../../images/vr mag.png";
import { industries } from "../../data";
import MediumDot from "../../images/medium dot.png"
import sideDot from "../../images/side dot.png";
import { xrService } from "../../data";
import technologiesMag from "../../images/technologies frame.png";
import { Link } from "react-router-dom";

const Expertise = () => {

  return (
    <>
      {/* <div>
        <Banners
            backgroundImage={ExpertiseImage}
            text="A Quality approach to Software Development."
        />

        <div className="why_algo_container">
          <div className="why_algo_main">
            <h3 className="top_h3">Why Algo?</h3>

            <div className="why_algo_content_box">
              <div className="why_algo_box">
                <div className="why_algo_text_box1">
                  <img src={ExpertIcon} alt="" />
                  <h4 className="long_h2">Experts in multiple technologies</h4>
                  <p>We have <span className="text_font_weight_700">expert developers</span> in multiple technologies. We incorporate top experts from our global talent pool to build the <span className="text_font_weight_700">multidisciplinary teams</span> required to deliver your project.</p>
                </div>

                <div className="why_algo_text_box2">
                  <img src={AgileIcon} alt="" />
                  <h4>Agile and Efficient</h4>
                  <p>We apply <span className="text_font_weight_700">state-of-the-art methodogies</span> and <span className="text_font_weight_700">project management tools</span> plus team-based <span className="text_font_weight_700">quality control measures</span> and other processes to deliver a quality product and successful outcome to your project.</p>
                  <p className="text_drop">We provide you with optimum visibility of the state of the project at all times.</p>
                </div>

              </div>

              <div className="why_algo_box">
                <div className="why_algo_text_box1">
                  <img src={FlexibleIcon} alt="" />
                  <h4>Flexible</h4>
                  <p>We can <span className="text_font_weight_700"> manage your project from start to finish</span> taking full responsibility for the quality and delivery of the product.</p>
                  <p className="text_drop">Alternatively, we can also provide you with <span className="text_font_weight_700">team extension </span> services: expert developers who are assigned to work with your team adding resources on technologies you may not have in-house.</p>
                </div>

                <div className="why_algo_text_box2">
                  <img src={FocusedIcon} alt="" />
                  <h4>Quality Focused</h4>
                  <p>We pride ourselves on delivering <span className="text_font_weight_700">high quality solutions.</span> Our <span className="text_font_weight_700">dedicated service quality team</span> will monitor your project and conduct regular follow-up checks to ensure the project is being delivered to the <span className="text_font_weight_700"> highest quality standards</span> that meet your expectations.</p>
                </div>

              </div>

              <div className="why_algo_box">
                <div className="why_algo_text_box1">
                  <img src={ExperienceIcon} alt="" />
                  <h4>Experienced</h4>
                  <p>Over the last ten years the members of our team have successfully delivered <span className="text_font_weight_700">hundreds of emerging tech projects</span> for clients around the world.</p>                
                </div>

                <div className="why_algo_text_box2">
                  <img src={ReliableIcon} alt="" />
                  <h4>Reliable</h4>
                  <p>We go out of our way to ensure we deliver <span className="text_font_weight_700">outstanding solutions</span> with a <span className="text_font_weight_700">timely delivery.</span> We understand time is of the essence and getting to the finish line on time can be essential for the success of your business or project</p>
                </div>

              </div>

            </div>

          </div>
        </div>

        <Values/>
        <ContactForm/>

      </div> */}

      <div className="virtual_overall_container">
        <div className="virtual_main">
          <div className="virtual_content">
            <div className="virtual_left_side">
              <h2>Virtual Reality / Augmented Reality / Game Development</h2>
              <p className="virtual_p">We are proficient in the Unity and Unreal game engines and deliver end-to-end AR/VR/gaming development services from ideation to deployment and support. <span className="text_font_weight_700"> We can assist you with every step of the development cycle</span>  making the launching of a new project or solution seamless. </p>
              <p className="virtual_p1">We specialize in building <span className="text_font_weight_700">interactive, engaging and informative experiences</span>  that resonate with your customers and provide quantifiable results.</p>
              <p>Our experts have extensive experience in building <span className="text_font_weight_700">robust AR/VR/gaming applications</span> that include 3D models and animation, real-time gesture, objects, face recognition, motion tracking and many more.</p>
            </div>

            <div className="virtual_right_side">
              <img src={virMage} alt="virtual" />
            </div>
          </div>
        </div>
      </div>

      <div className="industries_container">
        <div className="industries_dot">
          <img src={MediumDot} alt=" industries dot 2" />
        </div>

        <div className="industries_main">
          <h3>AR and VR have disrupted entire industries, <span>move ahead of your peers</span></h3>
          <div className="industries_contents">
            {industries.map(industry => (
              <div className="industries_card" key={industry.id}>
                <div className="industries_box">
                  <h4>{industry.title}</h4>
                  <img src={industry.icons} alt={industry.title}/>
                </div>

                <div className="hover_card_container">
                  <ul>
                      {industry.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="industries_dot2">
          <img src={sideDot} alt=" industries dot 2" />
        </div>
        
      </div>  

      <div className="vr_container">
        <h3 className="vr_h3">Unique XR Services</h3>
        <div className="vr_main">
          <div className="vr_content_box">
            {xrService.map((service, index) => (
              <div key={service.id} className={`xr-service-card ${index === 1 ? "middle-card" : ""}`}>
                <img src={service.icon} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> 

      <div className="unity_container">
        <div className="unity_main">
          <h3>Our Technologies</h3>

          <div className="unity_image_box">
            <img src={technologiesMag} alt="technologies mage" />
          </div>
        </div>
      </div>

      <div className="easy_container">
        <div className="easy_main">
          <div className="easy_box">
            <h3>It is easy to get <span>excited</span> about the very many possibilities. Let us know your ideas and we will work with you to <span>bring your vision to life.</span></h3>

            <div className="link_box">
              <Link to="/contact" className="btn">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expertise;
