import React, { useState, useEffect } from 'react';

interface CursorTypingEffectProps {
  wordsArray: string[];
  interval: number;
}

const CursorTypingEffect: React.FC<CursorTypingEffectProps> = ({ wordsArray, interval }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    let charIndex = 0;
    const wordLength = wordsArray[currentWordIndex].length;

    const typeInterval = setInterval(() => {
      if (charIndex <= wordLength) {
        setCurrentWord(wordsArray[currentWordIndex].substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(erase, 1000);
      }
    }, interval);

    function erase() {
      const eraseInterval = setInterval(() => {
        if (charIndex >= 0) {
          setCurrentWord(wordsArray[currentWordIndex].substring(0, charIndex));
          charIndex--;
        } else {
          clearInterval(eraseInterval);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
        }
      }, interval);
    }

    return () => {
      clearInterval(typeInterval);
    };
  }, [currentWordIndex, interval, wordsArray]);

  return (
    <div className="container">
      <h1>
        {currentWord}
        <span className="cursor" style={{userSelect: "none"}}>|</span>
      </h1>
    </div>
  );
};

export default CursorTypingEffect;
