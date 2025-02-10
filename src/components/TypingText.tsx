import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface TypingTextProps {
  textArray: string[]; // Array of strings to type and untype
  typingSpeed?: number; // Speed of typing in milliseconds (default 100ms per character)
  pauseTime?: number; // Pause time between switching strings (default 1000ms)
  url?: string;
}

const TypingText: React.FC<TypingTextProps> = ({
  textArray,
  typingSpeed = 100,
  pauseTime = 1000,
  url = ""
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0); // Current index in the textArray
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const currentText = textArray[index];
    let timeout: any;

    if (!isDeleting) {
      // Typing effect
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Pause at the end of typing before starting to delete
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      // Untyping effect
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, typingSpeed);
      } else {
        // Switch to the next string in the array and start typing again
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length); // Round-robin through textArray
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, textArray, typingSpeed, pauseTime]);

  if (url.length > 0 ) {
    return <Link to={url}> <h1>{displayedText.length > 0 ? displayedText : "|"}</h1> </Link>;
  } else {
    return <h1>{displayedText.length > 0 ? displayedText : "|"}</h1>;
  }

};

export default TypingText;
