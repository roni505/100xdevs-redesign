"use client";

import Image from "next/image";
import SectionHeader from "./section-header";
import { motion } from "motion/react";

export type TAcardInput = {
  name: string;
  src: string;
};

const taInfo: TAcardInput[] = [
  {
    name: "TA Sumana",
    src: "TASumanaImg.svg",
  },
  {
    name: "TA Jack Sparrow",
    src: "/TAJackImg.svg",
  },
  {
    name: "TA Harry Potter",
    src: "/TAHarryImg.svg",
  },
  {
    name: "TA Rushikesh G",
    src: "/TARushikeshImg.svg",
  },
  {
    name: "TA Tarun",
    src: "/TATarunImg.svg",
  },
  {
    name: "TA SerBarristan",
    src: "/TASerbarristanImg.svg",
  },
];

const MeetTA = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <SectionHeader title="Meet Your TAs" />
      <div className="mt-3 flex flex-wrap items-center justify-center gap-12 lg:w-[696px]">
        {taInfo.map((info, idx) => (
          <TAcard key={idx} name={info.name} src={info.src} />
        ))}
      </div>
    </div>
  );
};

const TAcard = ({ name, src }: TAcardInput) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <motion.div
        whileHover={{
          scale: 1.03,
        }}
      >
        <Image src={src} width={200} height={200} alt="TA images" />
      </motion.div>
      <span className="text-xl font-medium text-white">{name}</span>
    </div>
  );
};

export default MeetTA;
