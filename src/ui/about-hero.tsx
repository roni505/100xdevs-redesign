"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";

export type AboutCardInput = {
  prefix?: string;
  number: number;
  suffix?: string;
  description: string;
};

const cardDetails: AboutCardInput[] = [
  {
    prefix: "",
    number: 200,
    suffix: "+",
    description: "High-paying internships",
  },
  { prefix: "$", number: 150, suffix: "+", description: "Highest package" },
  {
    prefix: "",
    number: 10,
    suffix: "k+",
    description: "Active community members",
  },
  {
    prefix: "",
    number: 20,
    suffix: "+",
    description: "Students cracked GSoC 2024",
  },
];

const AboutCard = ({ detail }: { detail: AboutCardInput }) => {
  const count = useMotionValue(0);
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const controls = animate(count, detail.number, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayNumber(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [detail.number]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-40 py-30 lg:w-1/2">
      <motion.span
        style={{ fontSize: "64px", color: "white" }}
        className="text-7xl font-normal"
      >
        {detail.prefix}
        {displayNumber}
        {detail.suffix}
      </motion.span>
      <span className="text-center text-lg text-neutral-400">
        {detail.description}
      </span>
    </div>
  );
};

const AboutHero = () => {
  return (
    <div className="relative mx-auto flex w-full items-center justify-center lg:h-screen">
      <span className="absolute top-[57%] h-px w-full bg-[#1F1F1F] max-lg:hidden"></span>
      <span className="absolute right-2/4 -z-10 h-full w-[0.5px] bg-[#1F1F1F] max-lg:hidden"></span>
      <div className="mt-32 flex max-w-6xl flex-wrap items-center justify-center">
        {cardDetails.map((detail, idx) => (
          <AboutCard key={idx} detail={detail} />
        ))}
      </div>
    </div>
  );
};

export default AboutHero;
