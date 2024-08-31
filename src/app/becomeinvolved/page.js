"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope } from 'react-icons/fa';
import SignUpForm from "@/components/SignUpForm";

export const FlipWords = ({ words, duration = 5000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={`z-10 inline-block relative text-left px-2 ${className}`}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block text-[#89BE63]"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const page = () => {
  const words = [
    "create meaningful change.",
    "build a brighter future.",
    "drive positive social progress."
  ];

  return (
    <main className="flex flex-col items-start justify-start px-8 md:px-20 min-h-screen bg-[#0A0708]">
      <div className="text-2xl md:text-4xl font-bold pt-20 pb-8">
        <span className="text-white">Join us in our mission to </span>
        <FlipWords words={words} />
      </div>

      <SignUpForm />

      <div className="mb-20 mt-8">
        <p className="text-white font-bold text-2xl md:text-3xl mb-12">Or <span className="text-[#89BE63]">Contact</span> us directly:</p>
        <div className="flex flex-wrap gap-x-16 gap-y-4">
            <div className="flex items-center gap-x-4">
              <FaEnvelope className="text-[#89BE63] text-3xl" />
              <a href="mailto:seherraza20@gmail.com"><p className="text-white">Seher</p></a>
            </div>

            <div className="flex items-center gap-x-4">
              <FaEnvelope className="text-[#89BE63] text-3xl" />
              <a href="mailto:huzaifakhalid1022@gmail.com"><p className="text-white">Huzaifa</p></a>
            </div>

            <div className="flex items-center gap-x-4">
              <FaEnvelope className="text-[#89BE63] text-3xl" />
              <a href="mailto:basharnawab5@gmail.com"><p className="text-white">Bashar</p></a>
            </div>
        </div>
      </div>

    </main>
  );
};

export default page;
