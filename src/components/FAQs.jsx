import React, { useState } from 'react'
import { faqs } from '../data';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import mediumDot from "../images/medium dot.png";

const FAQs = () => {

    const [isAnswerShowing, setIsAnsweringShowing] = useState(null);

    const toggleFAQ = (id) => {
        setIsAnsweringShowing((prevActiveFAQ) => (prevActiveFAQ === id ? null : id));
    };
    
  return (
   <>
    <div className="lot_solution_container">
        <div className="lot_dot1">
            <img src={mediumDot} alt="dot 1" />
        </div>

        <div className="lot_solution_main">
            <h2>Our IoT solutions provide <span>business value</span> across industries</h2>
            <div className="lot_solution_contents">
                {faqs.map(faq => (
                    <div className="faq_box_content" key={faq.id} onClick={() => toggleFAQ(faq.id)}  >
                        <div className="faq_box">
                            <div className="faq_flex">
                                <img className='icons' src={faq.icons} alt={faq.question} />   
                                <h4 className="question">{faq.question}</h4>
                            </div>

                            <button>
                                {isAnswerShowing === faq.id ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                            </button>
                        </div>

                       {isAnswerShowing === faq.id && <p>{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>

        <div className="lot_dot2">
            <img src={mediumDot} alt="dot 2" />
        </div>

    </div>
   </>
  )
}

export default FAQs;