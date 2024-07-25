import React from 'react'
import "./services.css";
import FintechMag from "../../images/fintech_trading.png";
import mediumDot from "../../images/medium dot.png"
import PythonMag from "../../images/Python-logo.png";
import CsharpMag from "../../images/c logo.png";
import CplusMag from "../../images/C++_Logo.png";
import JavaMage from "../../images/java-logo.png";
import TalkProject from '../../components/TalkProject';

const Services = () => {
  return (
    <>
    <div className="financial_market_container">
        <div className="financial_market_main">
            <div className="financial_market_left">
                <h2>Fintech / Financial Markets</h2>
                <p className="p-one">We are  <span className="text_font_weight_700">very knowledgeable</span> of the mechanisms and workings of <span className="text_font_weight_700">securities markets, exchanges</span> (both centralized and decentralized), and <span className="text_font_weight_700">market data</span> (both time & sales and full order book).</p>
                <p className="p-two">We are experienced working with - and coding against - <span className="text_font_weight_700">trading APIs/ABIs</span> trading APIs/ABIs and other common elements of the client/message server <span className="text_font_weight_700">architectures </span> typically seen in trading systems.</p>
                <p>We are specialists in  <span className="text_font_weight_700">implementations of QuickFIX,</span> the open source implementation of the <span className="text_font_weight_700">FIX</span> messaging protocol</p>
            </div>

            <div className="financial_market_right">
                <img src={FintechMag} alt="Financial market" />
            </div>
        </div>
    </div>

    <div className="we_can_build_container">
        <div className="dot1">
            <img src={mediumDot} alt="dot 1" />
        </div>

        <div className="we_can_build_main">
            <div className="we_can_build_left">
                <h3>We can build your framework from scratch</h3>
                <p>We have experience in the <span className="text_font_weight_700">development and maintenance of trading and charting frameworks</span>, back testers, scanners and exchanges, and implementing market data connections.</p>
                <p>We have worked on <span className="text_font_weight_700">robo-advisor projects</span>, and <span className="text_font_weight_700"> HFT</span> and <span className="text_font_weight_700">Ultra HFT projects.</span> </p>
                
            </div>

            <div className="we_can_build_right">
                <h3>We can work with existing frameworks</h3>
                <p>Our team has extensive experience programming strategies, indicators and other algorithms for the following  <span className="text_font_weight_700">trading frameworks</span> including:</p>

                <ul>
                    <li>AlgoTrader</li>
                    <li>NinjaTrader</li>
                    <li>TradingView</li>
                    <li>MetaTrader</li>
                    <li>TradingView</li>
                    <li>Amibroker</li>
                    <li>ThinkOrSwim</li>
                    <li>cTrader</li>
                </ul>
            </div>
        </div>

        <div className="dot2">
            <img src={mediumDot} alt="dot 1" />
        </div>
    </div>

    <div className="our_technology_stack_container">
        <div className="our_technology_stack_main">
            <div className="our_technology_stack_left">
                <h4>Our technology stack</h4>

                <p>Choosing the best technology is crucial to your project success. We have built extensive fintech trading solutions using a wide array of programming languages:</p>
            </div>

            <div className="our_technology_stack_right">
                <div className="flex_icons_box">
                    <img src={PythonMag} alt="python" />
                    <span>Python</span>
                </div>

                <div className="flex_icons_box">
                    <img src={CplusMag} alt="c sharp" />
                    <span>C++</span>
                </div>

                <div className="flex_icons_box">
                    <img src={CsharpMag} alt="c sharp" />
                    <span>C#</span>
                </div>

                <div className="flex_icons_box">
                    <img src={JavaMage} alt="c sharp" />
                    <span>Java</span>
                </div>
               
            </div>
        </div>

        <div className="our_technology_dot_box">
            <img src={mediumDot} alt="dot tech" />
        </div>
    </div>

    <div className="our_clients_overall_container">
        <div className="our_clients_main">
            <h4>Our Clients</h4>

            <p>We are experts in financial markets. Our main strength is expressing in code whatever trading concept has been described to us by our client. We are not only software developers but also understand financial markets.</p>

            <div className="our_clients_ul_box">
                <p>Past clients include:</p>
                <ul>
                    <li>Banks and other financial institutions</li>
                    <li>Hedge funds</li>
                    <li>Retail and commercial traders</li>
                    <li>Managed futures traders</li>
                    <li>Prop shops/arcades</li>
                    <li>Private funds</li>
                    <li>Trading software vendors</li>
                    <li>Developers and trading educators</li>
                </ul>
            </div>
        </div>

        <div className="our_clients_dot_box">
            <img src={mediumDot} alt="dot client" />
        </div>
    </div>

    <TalkProject/>
    </>
  )
}

export default Services;



//THIS IS INTERNET CODES BELOW WHEN NEED COME AND TAKE IT

// import React, { useState } from 'react'
// import "./services.css";
// import InternetMag from "../../images/internet mage.png";
// import FAQS from "../../components/FAQs"
// import DomainMag from "../../images/internet 3.png";
// import { approachData } from '../../data';


// const Services = () => {
//   const [activeStep, setActiveStep] = useState(1);


//   return (
//     <>
//     <div className="internet_container">
//         <div className="internet_main">
//             <div className="internet_left">
//                 <h2>Internet of Things (IoT)</h2>
//                 <p className="p-one">At Algo we provide <span className="text_font_weight_700"> powerful</span> and <span className="text_font_weight_700">secure IoT solutions.</span></p>
//                 <p className="p-two">We help businesses to <span className="text_font_weight_700">capture sensor data,</span> run it through AI algorithms and <span className="text_font_weight_700">properly present and analyse the data</span> to enable <span className="text_font_weight_700">transformative improvements</span> to your business and processes.</p>
//                 <p>Our IoT development experts have accumulated solid experience in creating <span className="text_font_weight_700">robust connected solutions</span> for the <span className="text_font_weight_700">enterprise</span> and <span className="text_font_weight_700">consumer segments.</span></p>
//             </div>

//             <div className="internet_right">
//                 <img src={InternetMag} alt="internet" />
//             </div>
//         </div>
//     </div>

//     <FAQS />

//     <div className="our_domain_container">
//       <div className="our_domain_main container_main">
//         <div className="our_domain_left">
//           <h2>We bring our <span className="highlight">cross-domain expertise</span> to the <span className="highlight">IoT</span> table</h2>

//           <ul>
//             <li>Computer Vision</li>
//             <li>AR/VR</li>
//             <li>Robotics and Drones</li>
//             <li>Data analytics</li>
//             <li>Machine learning/Artificial Intelligence</li>
//             <li>Blockchain</li>
//           </ul>
//         </div>

//         <div className="our_domain_right">
//           <img src={DomainMag} alt="" />
//         </div>

//       </div>
//     </div>

//     <div className="process_steps_overall_container">
//       <div className="process-steps-main">
//         <h2>We have devised a <span>highly effective approach to IoT development</span></h2>
//         <div className="steps">
//           {approachData.map(step => (
//             <div
//               key={step.id}
//               className={`step ${activeStep === step.id ? 'active' : ''}`}
//               onClick={() => setActiveStep(step.id)}
//             >
//               <div className="step-circle">{step.id}</div>
//               <div className="step_text_box">
//                 <div className="step-title">{step.title}</div>
//                 <div className="sub-title">{step.subtitle}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="line-with-circles">
//           <div className="line"></div>
//           <div className="circle-container">
//             {approachData.map(step => (
//                 <span key={step.id} className={`blue_circle ${activeStep === step.id ? 'active' : ''}`}></span>
//             ))}
//           </div>
//         </div>

//         <div className="active-content">
//           <p>{approachData.find(step => step.id === activeStep)?.description}</p>

//         </div>
//       </div>
//     </div>

//     <div className="technologies_overall_container">
//       <div className="technologies_top_head">
//         <h3>Our Technologies</h3>
//         <p>We integrate all your connected devices into a <span>robust ecosystem</span></p>
//       </div>

//     </div>


//     <div className="technologies_main">     
//       <div className="tech_container">
//           <div className="technologies_content_box">
//             <div className="card">
//               <h3>LOW LEVEL</h3>
//               <div className="card_side">
//                 <h5>Languages:</h5>
//                 <span>C, C++</span>
//                 <h5>RTOS:</h5>
//               </div>
//               <p> RTLinux, RIOT, FreeRTOS, VxWorks, Windows IoT, Android Things, embOS, ThreadX, Nucleus RTOS </p>
//             </div>

//             <div className="card">
//               <h3>CONNECTIVITY AND MIDDLEWARE</h3>
//               <p className="p1_card">MQTT, CoAP, REST, AMQP, WebSocket, TCP/IP, Bluetooth, BLE, WiFi, GPRS, NFC, Zigbee, CAN/CANOpen, Beacon, Z-Wave, HTTP/HTTPS, XMPP</p>
//             </div>

//             <div className="card">
//               <h3>PROCESSING</h3>
//               <p className="p1_card"> Amazon Web Services, IBM Watson IoT platform, Microsoft Azure IoT Hub, Google Cloud IoT, Oracle IoT Cloud Service, SAP IoT Platform, Cisco IoT</p>
//             </div>

//             <div className="card">
//               <h3>APPS UI</h3>
//               <p className="p1_card"> Java, .NET, Qt, PHP, Python, Objective-C, Swift, Go, Rust, Node.js, React</p>
//             </div>

//           </div>
//         </div>
//     </div>
     
     
//     </>
   
//   )
// }

// export default Services;