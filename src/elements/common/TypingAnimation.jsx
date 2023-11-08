import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, elementType = 'p', typingSpeed = 50, style }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        setIsTyping(false);
        clearInterval(typingInterval);
      } else {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, typingSpeed]);

  const Element = elementType;

  return (
    <Element style={style}>
      {displayText}
      {isTyping && <span className="typing-cursor">|</span>}
    </Element>
  );
};

export default TypingAnimation;