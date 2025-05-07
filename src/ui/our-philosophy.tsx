"use client";

import { motion, useAnimate } from "motion/react";

const philosophyDetails: PhilosophyCardInput[] = [
  {
    number: 1,
    title: "Learn by Building",
    description:
      "Every concept is reinforced through hands-on projects that simulate real-world scenarios.",
  },
  {
    number: 2,
    title: "Industry Aligned",
    description:
      "Our curriculum evolves with the tech industry, keeping you ahead of the curve.",
  },
  {
    number: 3,
    title: "Community First",
    description:
      "We believe in the power of peer learning and collaborative growth.",
  },
];

export type PhilosophyCardInput = {
  number: number;
  title: string;
  description: string;
};

const OurPhilosophy = () => {
  return (
    <div className="mx-auto mt-60 mb-52 flex h-full w-full flex-col items-center justify-center">
      <span className="text-center text-7xl text-white">Our Philosophy</span>
      <div className="mt-27 flex flex-col gap-44">
        {philosophyDetails.map((details, idx) => (
          <PhilosophyCard key={idx} details={details} />
        ))}
      </div>
    </div>
  );
};

export default OurPhilosophy;

const PhilosophyCard = ({ details }: { details: PhilosophyCardInput }) => {
  return (
    <div className="flex items-center justify-center gap-8">
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          y: 30,
          scale: 0.6,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1.12,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{
          once: true,
        }}
        className="flex items-center justify-center gap-8"
      >
        <div className="bg-gradient-to-b from-neutral-400 to-black bg-clip-text text-[250px] text-transparent">
          {details.number}
        </div>
        <div className="flex h-full w-2xs flex-col justify-center">
          <motion.span className="text-2xl font-normal text-white">
            {details.title}
          </motion.span>
          <motion.div className="mt-3 text-base text-neutral-500">
            {details.description}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
