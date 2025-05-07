"use client";

import SectionHeader from "./section-header";
import { Text } from "lucide-react";
import { Wrench } from "lucide-react";
import { Rocket } from "lucide-react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const OpenSource = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 lg:px-0">
      <SectionHeader
        title="Contribute to our open source repos"
        description="Explore, fork, contribute, collaborate, build, and grow with our open source projects — the best way to learn is by doing, together."
      />
      <div className="flex flex-wrap gap-6">
        {/* First Project */}
        <div className="relative flex w-full rounded-3xl bg-gradient-to-b from-[#24282b] to-[#000000] p-[1px] max-md:mx-5 max-md:w-full lg:w-[564px]">
          <span className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#9D9D9D] to-transparent"></span>
          <div className="flex w-full flex-col rounded-3xl bg-black p-5 max-md:w-full md:p-11">
            <div className="relative z-20 h-[320px] cursor-pointer">
              <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-black to-black/10"></div>
              <motion.div
                whileInView={{
                  y: -180,
                  transition: {
                    type: "spring",
                    delay: 0.8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 1.3,
                  },
                }}
                className="absolute -z-70 flex flex-col gap-2"
              >
                {/* propt ui */}
                <div className="flex items-center justify-start gap-10">
                  <div className="relative h-[35px] w-9 rounded-lg border border-[#454545] bg-gradient-to-b from-[rgb(40,40,40,100)] to-[rgb(0,0,0,100)] p-3">
                    <Text
                      size={20}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[#E9F900]"
                    />
                  </div>
                  <div className="">
                    <span className="rounded-md bg-[#2B2E00] px-3 py-1 text-sm text-[#E9F900]">
                      Prompt
                    </span>
                  </div>
                </div>
                <div className="flex w-[371px] items-center gap-[58px]">
                  <span className="ml-[18px] h-[120px] w-px bg-[#444444]"></span>
                  <PromptInstruction />
                </div>
                {/* build ui */}
                <div className="flex items-center justify-start gap-10">
                  <div className="relative h-[35px] w-9 rounded-lg border border-[#454545] bg-gradient-to-b from-[rgb(40,40,40,100)] to-[rgb(0,0,0,100)] p-3">
                    <Wrench
                      size={20}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[#0088FF]"
                    />
                  </div>
                  <div className="">
                    <span className="rounded-md bg-[#001B3A] px-3 py-1 text-sm text-[#0088FF]">
                      Build
                    </span>
                  </div>
                </div>
                <div className="flex w-[371px] items-center gap-[58px]">
                  <span className="ml-[18px] h-[120px] w-px bg-[#444444]"></span>
                  <BuildInstruction />
                </div>
                {/* deploy ui */}
                <div className="flex items-center justify-start gap-10">
                  <div className="relative h-[35px] w-9 rounded-lg border border-[#454545] bg-gradient-to-b from-[rgb(40,40,40,100)] to-[rgb(0,0,0,100)] p-3">
                    <Rocket
                      size={20}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[#00F908]"
                    />
                  </div>
                  <div className="">
                    <span className="rounded-md bg-[#012E00] px-3 py-1 text-sm text-[#00F908]">
                      Deploy
                    </span>
                  </div>
                </div>
                <div className="flex w-[371px] items-center gap-[58px]">
                  <span className="ml-[18px] h-[120px] w-px bg-[#444444]"></span>
                  <DeployInstruction />
                </div>
              </motion.div>
            </div>
            <div className="z-20 w-full bg-black">
              <div className="flex w-60 flex-col bg-black">
                <span className="text-xl font-medium text-white">
                  Mobile-magic
                </span>
                <span className="mt-3 text-sm text-neutral-500">
                  Mobile-magic is an agent that builds, edits, and deploys
                  beautiful, high-performance,from simple prompts.
                </span>
                <ChevronBtn
                  text="Explore"
                  link="https://github.com/code100x/mobile-magic"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Second Project */}
        <div className="relative flex rounded-3xl bg-gradient-to-b from-[#24282b] to-[#000000] p-[1px] max-md:mx-5 max-md:w-full">
          <span className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#9D9D9D] to-transparent"></span>
          <div className="flex flex-col items-start justify-center rounded-3xl bg-black p-5 max-md:w-full md:p-11">
            <div className="relative z-20 flex bg-[url(/mobileMagicImg.svg)] bg-cover lg:h-[316px]">
              <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-black to-transparent"></div>
              <motion.div
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="cursor-pointer"
              >
                <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-black/93 to-transparent"></div>
                <Image
                  src="/aiGeneratedImg.svg"
                  width={450}
                  height={316}
                  className="z-40 h-auto w-full object-contain lg:w-[450px]"
                  priority
                  alt="Mobile magic image"
                />
              </motion.div>
            </div>
            <div className="flex w-60 flex-col">
              <span className="text-xl font-medium text-white">Photo AI</span>
              <span className="mt-3 text-sm text-neutral-500">
                100xPhoto is a powerful AI image that lets you generate stunning
                images and train custom AI models.
              </span>
              <ChevronBtn
                text="Explore"
                link="https://github.com/code100x/photo-ai"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;

export type BadgeIput = {
  text: string;
};

const Badge = ({ text }: BadgeIput) => {
  return (
    <div className="">
      <span className="rounded-md border border-[#454545] bg-gradient-to-b from-[#23272a] to-[#0A0B10] px-2 py-1 text-sm text-white">
        {text}
      </span>
    </div>
  );
};

const PromptInstruction = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <Badge text="Describe" />
        <InstructionText text="what you want to" />
        <Badge text="build" />
      </div>
      <div className="flex gap-2">
        <InstructionText text="including any specific" />
        <Badge text="features" />
      </div>
    </div>
  );
};

const BuildInstruction = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <InstructionText text="The" />
        <Badge text="agent" />
        <InstructionText text=" constructs the solution" />
      </div>
      <div className="flex gap-2">
        <InstructionText text="using the best" />
        <Badge text="tools" />
        <InstructionText text="and" />
        <Badge text="methods" />
      </div>
    </div>
  );
};

const DeployInstruction = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <Badge text="Describe" />
        <InstructionText text="what you want to" />
        <Badge text="build" />
      </div>
      <div className="flex gap-2">
        <InstructionText text="including any specific" />
        <Badge text="features" />
      </div>
    </div>
  );
};

export type InstructionTextInput = {
  text: string;
};

const InstructionText = ({ text }: InstructionTextInput) => {
  return <span className="text-sm font-normal text-neutral-400">{text}</span>;
};

export type ChevronBtnInput = {
  text: string;
  link: string;
};

const ChevronBtn = ({ text, link }: ChevronBtnInput) => {
  return (
    <div className="flex pb-16">
      <motion.button
        whileHover="hover"
        onClick={() => window.open(`${link}`)}
        className="mt-8 flex cursor-pointer items-center justify-center gap-1 text-sm text-neutral-300 hover:text-white"
      >
        {text}
        <motion.div
          variants={{
            hover: {
              x: 5,
            },
          }}
        >
          <ChevronRight size={16} />
        </motion.div>
      </motion.button>
    </div>
  );
};
