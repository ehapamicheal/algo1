import React, { useState } from 'react'
import "./projects.css";
import ArtificialMag from "../../images/Artificial.png";
import mediumDot from "../../images/medium dot.png";

import { accordionData } from '../../data';
import { RiArrowDownDoubleLine } from "react-icons/ri";
import Tensor1 from "../../images/tensor.png";
import Keras from "../../images/keras.png";
import Pytorch from "../../images/pytorch.png";
import coreMl from "../../images/coreml.png";
import Onnx from "../../images/onnx.png";
import tensorLite from "../../images/tensor lite.png";
import tensor3 from "../../images/tensor 3.png";
import Catalyst from "../../images/catalyst.png";
import Scikit from "../../images/scikit.png";
import Mflow from "../../images/mflow.png";
import Weight from "../../images/weight.png";
import TalkProject from '../../components/TalkProject';


// ROBOTICES SECTION
import RoboticMag from "../../images/robotics.png"
import AirPlan from "../../images/plane.png";
import dotMag from "../../images/medium dot.png";
import { robotic } from '../../data';


// CRYPTO SECTION
import crytoMag from "../../images/crypto.png"


// LEVEARAGES SECTION
import { leverages } from '../../data';

//COVERS SECTION
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ethereum from "../../images/Ethereum-ETH-icon 1.png";
import solana from "../../images/solana-logo-freelogovectors.net_ 1.png";
import binance from "../../images/binance 1.png"
import { covers } from '../../data';


const Projects = () => {

  //GET THE ACTIVE BUTTONS AND DISPLAY THEIR CONTENTS
  const [activeButton, setActiveButton] = useState('business_ai');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };


  //GET THE ACCORDION
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };


  // CODE FOR THE ROBOTICS BOTTONS FUNCTIONALITY
  //GET THE ACTIVE BUTTONS AND DISPLAY THEIR CONTENTS
  const [activeResponse, setActiveResponse] = useState('emergency_response');

  const handleResponseClick = (buttons) => {
    setActiveResponse(buttons);
  };


  // COVERS SECTION
  // Split the covers array into three sections
  const splitArray = (arr, n) => {
    const res = [];
    while (arr.length) {
      res.push(arr.splice(0, Math.ceil(arr.length / n--)));
    }
    return res;
  };

  const sections = splitArray([...covers], 3);


  return (
   <>
    {/* ARTIFICIAL CODES */}
    <div className="artificial_overall_container">
      <div className="artificial_main">
        <div className="artificial_content">
          <div className="artificial_left_side">
            <h2>Artificial Intelligence, Machine Learning, Deep Learning</h2>
            <p className="artificial_p1">We deliver impactful custom built Artificial Intelligence, Machine Learning and Deep Learning solutions to <span className="text_font_weight_700">transform your business or disrupt your market.</span> </p>
            <p className="artificial_p1">We are hands-on specialists known for <span className="text_font_weight_700">seeking solutions in unconventional ways.</span> </p>
            <p>Our AI specialists work closely with our fintech, game development, internet-of-things, mechatronics, web/mobile app development and cloud/edge computing teams to deploy <span className="text_font_weight_700">interdisciplinary AI solutions that best adapt to your needs.</span> </p>
          </div>

          <div className="artificial_right_side">
            <img src={ArtificialMag} alt="artificial" />
          </div>
        </div>
      </div>
    </div>

    <div className="gains_overall_container">
      <div className="gains_main">
        <div className="gains_top">
          <h2>Gain a competitive advantage with AI and ML applications</h2>
          <p>AI and ML applications are improving business processes and creating new business opportunities</p>
        </div>

        <div className="gains_content_box">
          <div className="gains_left_side">
            <button className={`button ${activeButton === 'business_ai' ? 'active' : ''}`} onClick={() => handleButtonClick('business_ai')}>Business AI</button>
            <button className={`button ${activeButton === 'perception_ai' ? 'active' : ''}`} 
                onClick={() => handleButtonClick('perception_ai')}
              >

              Perception AI
            </button>
             
            <button 
                className={`button ${activeButton === 'autonomous_ai' ? 'active' : ''}`} 
                onClick={() => handleButtonClick('autonomous_ai')}
              >

              Autonomous AI
            </button> 
          </div>

          <div className="gains_right_side">
            <div className="box_content">

              {activeButton === 'business_ai' && (
                <div className="business_ai_content">
                    <p>Use <span>Big Data</span> for:</p>
                    <ul>
                        <li>Smart trading</li>
                        <li>Fraud detection</li>
                        <li>Credit scoring</li>
                        <li>Uncovering supply chain inefficiencies</li>
                        <li>Better medical diagnoses</li>
                        <li>Legal use cases</li>
                    </ul>
                </div>
              )}


              {activeButton === 'perception_ai' && (
                <div className="perception_ai_content">
                    <p>Employ <span>computer vision</span> and <span>natural language processing</span> to benefit in new ways from sensors and smart devices digitizing the physical world around us.</p>
                </div>
              )}

              {activeButton === 'autonomous_ai' && (
                <div className="autonomous_ai_content">
                  <p>Develop <span>autonomous AI devices</span> for use in cities, malls, homes, factories, warehouses, and farms, and also in road, rail, air, and sea transport.</p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div> 

    <div className="accordion_container">
      <div className="accordion_dot_box1">
        <img src={mediumDot} alt="" />
      </div>

      <div className="accordion_main containers">
        <div className="accordion_top">
          <h2>We are <span>experts</span></h2>
          <h2 className="accordion_h2">delivering <span>AI / ML / Deep Learning Solutions</span></h2>
        </div>

        <div className="accordion_wrapper">
          {accordionData.map((item, index) => (
            <div className="accordion_content_box" onClick={() => toggleVisibility(index)} key={item.id}>
              <div className="accordion_flex_box">
                <div className="accordion_flex">
                  <h4>{item.title}</h4>
                  <img src={item.icon.default} alt={item.title} />
                </div>
                <RiArrowDownDoubleLine style={{ display: visibleIndex === index ? 'block' : 'none' }} />
              </div>
              {visibleIndex === index && <p>{item.content}</p>}
            </div>
          ))}
        </div>

      </div>

      <div className="accordion_dot_box2">
        <img src={mediumDot} alt="" />
      </div>
    </div>

    <div className="intelligence_container">
      <div className="intelligence_main">
        <div className="intelligence_content">
          <div className="intelligence_left_side">
            <h3>Artificial Intelligence expertise</h3>
            <p>We have extensive expertise in AI/ML technologies and frameworks:</p>
          </div>

          <div className="intelligence_right_side">
            <h5>Concepts</h5>
            <p>Supervised, unsupervised and reinforcement learning</p>

            <div className="step_2">
              <h5>Neural Networks</h5>
              <p>Convolutional and recurrent neural networks, generative adversarial networks, deep bayesian neural networks, siamese networks</p>
            </div>

            <div className="step_3_box">
              <p>Deep Learning Frameworks</p>
              <div className="step_3_icon1_box">
                <img src={Tensor1} alt="" />
                <img src={Keras} alt="" />
                <img src={Pytorch} alt="" />
              </div>
            </div>

            <div className="step_4_box">
              <p>Deployment Toolkits</p>
              <div className="step_4_icon1_box">
                <img src={coreMl} alt="" />
                <img src={Onnx} alt="" />
                <img src={tensorLite} alt="" />
                <img src={tensor3} alt="" />
              </div> 
            </div>

            <div className="step_5_box">
              <p>Other AI Tools</p>
              <div className="step_5_icon1_box">
                <img src={Catalyst} alt="" />
                <img src={Scikit} alt="" />
                <img src={Mflow} alt="" />
                <img src={Weight} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="intelligence_dot_box">
        <img src={mediumDot} alt="" />
      </div>
    </div>

    <TalkProject/>    

    
    {/*CODE FOR THE ROBOTICES SECTION  */}

    {/* <div className="robotics_container">
      <div className="robotics_main">
        <div className="robotics_content">
          <div className="robotics_left_side">
            <h3>Robotics and Drones</h3>
            <p className="robotics_p1">At Algo we open up for you a world of <span className="text_font_weight_700">new opportunities.</span> </p>
            <p>The world of robotics is being transformed along three primary axes:</p>
            <p>increased <span className="text_font_weight_700">collaboration</span> </p>
            <p>increased <span className="text_font_weight_700">autonomous mobility</span> </p>
            <p>increased <span className="text_font_weight_700">intelligence</span></p>
            <p className="robotics_p2">These changes will shape the future of automation and thus robotics and drones.</p>
          </div>

          <div className="robotics_right_side">
            <img src={RoboticMag} alt="robotics" />
          </div>
        </div>
      </div>
    </div>

    <div className="advance_overall_container">
      <div className="advance_main">
        <div className="advance_top">
          <h3><span>Advance your business </span> by incorporating <span>autonomous applications</span></h3>
        </div>

        <div className="advance_content_box">
          <div className="advance_left_side">
            <button className={`buttons ${activeResponse === 'emergency_response' ? 'active' : ''}`} onClick={() =>  handleResponseClick('emergency_response')}>Emergency Response</button>
            <button className={`buttons ${activeResponse === 'agriculture' ? 'active' : ''}`} 
                onClick={() => handleResponseClick('agriculture')}
              >

              Agriculture
            </button>
             
            <button 
                className={`buttons ${activeResponse === 'logistics' ? 'active' : ''}`} 
                onClick={() =>  handleResponseClick('logistics')}
              >

              Logistics
            </button> 

            <button 
                className={`buttons ${activeResponse === 'surveillence' ? 'active' : ''}`} 
                onClick={() =>  handleResponseClick('surveillence')}
              >

              Surveillence
            </button> 
          </div>

          <div className="advance_right_side">
            <div className="right_side_box_content">

              {activeResponse === 'emergency_response' && (
                <div className="emergency_response_content">
                  <p>In the event of an emergency, robots and drones can provide an efficient and time saving solution.</p>
                  <p className="p_2">Swarms of connected drones can be deployed with different capabilities, including lightweight autonomous scouting, thermal imaging, and real-time video footage. </p>
                  <p>This can be followed by heavy capacity drones carrying essential supplies in payloads.</p>
                    
                </div>
              )}


              {activeResponse === 'agriculture' && (
                <div className="agriculture_content">
                    <p>Agriculture is seeing increased automation at all stages of the crop life cycle, including planting, monitoring, and harvesting.</p>
                    <p className="p_2">Autonomous drones can provide real-time high quality video monitoring of crops. This data can be critical to learn about evolution, increase or decrease of plant pests, weeds, diseases, irrigation, nutrition and vigor related to crops. Early identification of these conditions can prevent crops losses and or damages.</p>
                </div>
              )}

              {activeResponse === 'logistics' && (
                <div className="logistics_content">
                  <p>Robots and drones are disrupting the logistics industry with applications ranging from: </p>
                  <ul>
                    <li>Intralogistics (use of robots to achieve full automation of warehouse workloads),</li>
                    <li>Hybrid logistics (use of robotics and drones for workflows between different warehouses)</li>
                    <li>Last mile delivery (use of full autonomous drones mounted on delivery vehicles for last mile delivery)</li>
                    <li>Sortation (smart robotics used to fully automate sorting operations)</li>
                  </ul>
                </div>
              )}

              {activeResponse === 'surveillence' && (
                <div className="surveillence_content">
                  <p>Surveillance operations use drones combined with computer vision, face recognition, object recognition and other tracking technologies.</p>
                  <p className="p_2">The combination of networking robotics and Artificial Intelligence allows drones to adapt to their environment and perform many autonomous tasks like following a subject and filming while they move through an area.</p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>

    <div className="we_render_container">
      <div className="render_top">
        <h3>At <span>Algo</span> we can render your idea from <span>concept to design</span></h3>
        <p>We can support you with <span className="text_font_weight_700">extensive robotics/mechatronics/drones expertise</span></p>
      </div>
      <div className="we_render_main">
        <div className="we_render_box">
          <div className="we_render_content">
            {robotic.map((categoryData) => (
              <div key={categoryData.id} className="robotic-category">
                <h3>{categoryData.category}</h3>
                <ul>
                  {categoryData.items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="airplane_container">
      <div className="airplane_main container_main">
        <div className="airplane_left">
          <h2>We bring our <span>cross-domain expertise</span> to <span>Drones</span> and <span>Robotics</span></h2>

          <ul>
            <li>Computer Vision</li>
            <li>AR/VR</li>
            <li>Robotics and Drones</li>
            <li>Data analytics</li>
            <li>Machine learning/Artificial Intelligence</li>
            <li>Blockchain</li>
          </ul>
        </div>

        <div className="airplane_right">
          <img src={AirPlan} alt="" />

          <div className="drones_dot">
            <img src={dotMag} alt="dot mag" />
          </div>
        </div>

      </div>
    </div>

    <TalkProject/>  */}





    {/* CRYPTO CODE SECTION USING FIRST ROBOTICS DIV STYLING  */}
    {/* <div className="crypto_container">
      <div className="crypto_main">
        <div className="crypto_content">
          <div className="crypto_left_side">
            <h3>Blockchain / Crypto</h3>
            <p className="crypto_p1">We help our clients <span className="text_font_weight_700">leverage the power of blockchain</span> to capitalize on new opportunities enabled by this emerging technology.</p>
            <p className="crypto_p2">Our large blockchain team has delivered many successful blockchain-based projects accumulating <span className="text_font_weight_700">in-depth expertise and experience</span>  across <span className="text_font_weight_700">the leading blockchain ecosystems.</span></p>
            <p>We have worked on innovative blockchain projects ranging from <span className="text_font_weight_700">start-ups </span> to projects for <span className="text_font_weight_700"> large companies,</span>  contributed to innovative <span className="text_font_weight_700">whitepapers,</span>  and been involved in several  <span className="text_font_weight_700">completed and successful ICOs.</span></p>
          </div>

          <div className="crypto_right_side">
            <img src={crytoMag} alt="crypto" />
          </div>
        </div>
      </div>
    </div>


    <div className="leverages_container">
      <div className="levearge_dot_box">
        <img src={mediumDot} alt=" leverage dot" />
      </div>

      <div className="leverages_main">
        <h2>Leverage the power of Blockchain </h2>
        <div className="leverages_contents_box">
          {leverages.map(item => (
            <div key={item.id} className="leverages-card">
              <div className="leverage-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="levearge_dot_box2">
        <img src={mediumDot} alt=" leverage dot2" />
      </div>
    </div>

    <div className="covers_container">
      <div className="covers_main">
        <h3>Our experience covers</h3>
        <div className="covers_contents">
          {sections.map((section, index) => (
            <ul key={index} id={`section-${index + 1}`}>
              {section.map((cover) => (
                <li key={cover.id}>{cover.title}</li>
              ))}
            </ul>
          ))}
        </div>

        <div className="and_more">
          <p>And more</p>
          <MdKeyboardDoubleArrowRight/>
        </div>
      </div>

      <div className="cover_dot">
        <img src={mediumDot} alt="cover dot" />
      </div>
    </div>

    <div className="ecosytem_container">
      <div className="ecosytem_main">
        <div className="ecosytem_left">
          <h3>Blockchain Ecosystems</h3>
          <p>We have extensive development expertise in the main blockchain ecosystems:</p>
        </div>

        <div className="ecosytem_right">
          <div className="ecosytem_box_mag">
            <img src={ethereum} alt="etherum" />
            <p>Ethereum</p>
          </div>

          <div className="ecosytem_box_mag">
            <img src={solana} alt="solana" />
            <p>Solana</p>
          </div>

          <div className="ecosytem_box_mag">
            <img src={binance} alt="chain" />
            <p>BSC Chain</p>
          </div>
        </div>
      </div>
    </div>

    <TalkProject/> */}

    

   
   </>
  )
}

export default Projects;