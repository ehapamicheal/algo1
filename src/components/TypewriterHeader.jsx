import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterHeader = ({ words, elementType: ElementType = 'h1', className }) => {
  return (
    <div className={className}>
      <ElementType>
        <Typewriter
          words={words}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </ElementType>
    </div>
  );
};

export default TypewriterHeader;
