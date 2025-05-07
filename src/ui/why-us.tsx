"use client";

import Image from "next/image";
import SectionHeader from "./section-header";
import { motion } from "motion/react";

const WhyUs = () => {
  return (
    <div className="mx-5 flex max-w-6xl flex-col lg:mx-auto">
      <SectionHeader title="Why learn with us ?" />
      <div className="flex w-full flex-wrap justify-center">
        {whyUsDetails.map((details, idx) => (
          <div key={idx}>
            <WhyUsCard src={details.src} title={details.title} p={details.p} />
          </div>
        ))}
      </div>
    </div>
  );
};

const whyUsDetails: WhyUsCardInput[] = [
  {
    title: "Access to Mentors",
    p: "Get personalized feedback and have your doubts resolved by our TAs. Learn directly from top practitioners in the industry.",
    src: "whyUs1.svg",
  },
  {
    title: "Stay Up-to-Date",
    p: "Learn the most current technologies used by industry professionals, ensuring your skills remain highly relevant.",
    src: "whyUs2.svg",
  },
  {
    title: "Learn by doing",
    p: "Build practical skills through hands-on learning, real project work, and meaningful contributions to open source projects.",
    src: "whyUs3.svg",
  },
];

export type WhyUsCardInput = {
  title: string;
  p: string;
  src: string;
};

const WhyUsCard = ({ title, p, src }: WhyUsCardInput) => {
  return (
    <motion.div
      whileHover="hover"
      className="flex h-full w-full flex-col border-[#252525] from-neutral-800 to-black py-8 max-lg:items-center max-lg:border-t md:flex-row lg:w-96 lg:flex-col lg:border-l lg:px-[30.6px] lg:hover:border lg:hover:border-neutral-700 lg:hover:bg-gradient-to-b"
    >
      <div>
        <h3 className="text-2xl text-white">{title}</h3>
        <p className="mt-6 w-full text-base text-neutral-500">{p}</p>
      </div>
      <motion.div
        variants={{
          hover: {
            scale: 1.12,
          },
        }}
        className="relative"
      >
        <Image
          src={src}
          width={330}
          height={239}
          alt="svgs"
          className="mt-20"
        />
        <div className="absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-black to-transparent"></div>
      </motion.div>
    </motion.div>
  );
};

export default WhyUs;
