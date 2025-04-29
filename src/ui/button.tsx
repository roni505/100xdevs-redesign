"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

export type ButtonProps = {
  className?: string;
  children: ReactNode;
  varient: "secondary" | "primary" | "outlined";
  animation?: boolean;
};

const btnStyles = {
  primary:
    "px-5 py-3 rounded-xl shadow-[0px_-2px_0px_0px_rgba(255,255,255)] bg-gradient-to-b from-[rgb(0,114,255,100)] to-[rgb(0,25,96,100)] hover:from-[rgb(0,89,198)] hover:to-[rgb(0,19,71,100)] transition duration-300 hover:text-neutral-200 font-medium text-white",
  secondary:
    "bg-white px-5 py-3 rounded-xl hover:bg-neutral-300 duration-300 ease-in-out text-neutral-700 font-medium",
  outlined:
    "border border-[#0162E2] text-white text-base  px-5 py-3 rounded-xl hover:bg-neutral-800 duration-300 ease-in-out hover:text-neutral-200",
};

const Button = ({ className, children, varient, animation }: ButtonProps) => {
  const animate = animation && varient !== "secondary";
  return (
    <motion.button
      initial={animate ? { opacity: 0 } : undefined}
      animate={
        animate
          ? {
              opacity: 1,
              transition: {
                delay: 0.8,
                ease: "easeInOut",
              },
            }
          : undefined
      }
      className={`${className} ${btnStyles[varient]} cursor-pointer`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
