"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

const MaskText = ({ phrases }) => {
  // Define the stagger effect for the container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  // Define the individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });

  return (
    <div ref={body} className="m-auto w-full px-8 " id="#aboutSection">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className=""
      >
        {phrases.map((phrase, index) => {
          const isSpecial = index === 0; // Special style for the first phrase
          return (
            <motion.p
              key={index}
              variants={itemVariants}
              className={`overflow-hidden ${
                isSpecial
                  ? "mb-10  text-[30px] font-bold text-[#04ADEF] md:text-[40px] "
                  : " text-[18px] text-[#4f4e4e] md:text-[26px] "
              }`}
            >
              {phrase}
            </motion.p>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MaskText;
