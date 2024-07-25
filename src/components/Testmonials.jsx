// // App.jsx or CardSlider.jsx depending on your structure
// import React, { useState } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';


// // Import your SVGs here
// import FintechSvg from '../svgs/group-1000001133.svg';
// import BlockChainSvg from '../svgs/group-1000001131.svg';
// import AiSvg from '../svgs/group-1000001130.svg';
// import VectorSvg from '../svgs/vector-7.svg';
// import GameSvg from '../svgs/group-1000001124.svg';
// import DronesSvg from '../svgs/group-1000001123.svg';

// const Testimonials = () => {
//   const cardContents = [
//     { title: "FINTECH/", subtitle: "TRADING", image: FintechSvg },
//     { title: "BLOCKCHAIN/", subtitle: "CRYPTO", image: BlockChainSvg },
//     { title: "AI/ML/", subtitle: "DEEP LEARNING", image: AiSvg },
//     { title: "INTERNET OF", subtitle: "THINGS", image: VectorSvg },
//     { title: "AR/VR/", subtitle: "GAME DEVELOPMENT", image: GameSvg },
//     { title: "ROBOTICS/", subtitle: "DRONES", image: DronesSvg },
//     // Add more items as necessary for sliding
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsPerPage = 6;

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + cardsPerPage) % cardContents.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - cardsPerPage + cardContents.length) % cardContents.length);
//   };

//   return (
//     <div className="mainstream_wrapper">
//       <div className="mainstream_group">
//         <div className="mainstream_card_box">
//           {cardContents.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
//             <div className="mainstream_card" key={index}>
//               <p>{card.title}</p>
//               <p>{card.subtitle}</p>
//               <div className="stream_bottom">
//                 <img src={card.image} alt={card.title} />
//                 <FaArrowRight />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mainstream_pagination_box">
//         <div className="mainstream_pagination_content">
//           <button onClick={prevSlide}>
//             <MdKeyboardDoubleArrowLeft />
//           </button>
//           <div className="mainstream_1-2_span_box">
//             <span>{Math.floor(currentIndex / cardsPerPage) + 1}/</span>
//             <span>{Math.ceil(cardContents.length / cardsPerPage)}</span>
//           </div>
//           <button onClick={nextSlide}>
//             <MdKeyboardDoubleArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
