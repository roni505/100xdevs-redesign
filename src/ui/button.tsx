"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

export type ButtonProps = {
  className?: string;
  children: ReactNode;
  varient: "secondary" | "primary" | "outlined";
  iocn?: React.ReactNode;
  onClick?: () => void;
};

const btnStyles = {
  primary:
    "px-5 py-3 rounded-xl shadow-[0px_-2px_0px_0px_rgba(255,255,255)] bg-gradient-to-b from-[rgb(0,114,255,100)] to-[rgb(0,25,96,100)] hover:from-[rgb(0,89,198)] hover:to-[rgb(0,19,71,100)] transition duration-300 hover:text-neutral-200 font-medium text-white",
  secondary:
    "bg-white px-5 py-3 rounded-xl hover:bg-neutral-300 duration-300 ease-in-out text-neutral-700 font-medium",
  outlined:
    "border border-[#0162E2] text-white text-base  px-5 py-3 rounded-xl duration-300 ease-in-out hover:text-neutral-200 hover:bg-blue-950",
};

const Button = ({
  className,
  children,
  varient,
  iocn,
  onClick,
}: ButtonProps) => {
  return (
    <motion.button
      whileHover="hover"
      onClick={onClick}
      className={`${className} ${btnStyles[varient]} flex cursor-pointer items-center justify-center gap-1`}
    >
      {children}
      <motion.div
        variants={{
          hover: {
            x: 5,
          },
        }}
      >
        {iocn}
      </motion.div>
    </motion.button>
  );
};

export default Button;
