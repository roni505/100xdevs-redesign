"use client";

import Image from "next/image";
import { motion } from "motion/react";

export type ContentCardInput = {
  src: string;
  text: string;
  href: string;
};

const contentDetails: ContentCardInput[] = [
  {
    src: "/rustImg.svg",
    text: "Rust Tutorial",
    href: "https://www.youtube.com/watch?v=qP7LzZqGh30",
  },
  {
    src: "/devopsImg.svg",
    text: "DevOps Bootcamp",
    href: "https://www.youtube.com/watch?v=sSRaakd95Nk&t=1038s",
  },
  {
    src: "/deployImg.svg",
    text: "Deploy website to production in 30 mins",
    href: "https://www.youtube.com/watch?v=gViEtIJ1DCw",
  },
  {
    src: "/mcpImg.svg",
    text: "What are MCP servers",
    href: "https://www.youtube.com/watch?v=1iJ34tTjwwo&t=460s",
  },
];

const Content = () => {
  return (
    <div className="mx-auto flex items-center justify-center border-t border-b border-[#1F1F1F]">
      <div className="relative mx-5 flex max-w-6xl flex-wrap items-center justify-center border-r border-l border-[#1F1F1F] lg:mx-auto">
        <span className="absolute right-0 left-0 mx-auto h-full w-px border-[#1F1F1F] max-lg:hidden"></span>
        {contentDetails.map((content, idx) => (
          <div key={idx}>
            <ContentCard content={content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

const ContentCard = ({ content }: { content: ContentCardInput }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center">
      <a target="_blank" href={content.href}>
        <div className="flex flex-col items-center justify-center gap-4 border-b border-[#1F1F1F] p-8">
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
          >
            <Image
              src={content.src}
              height={330}
              width={509}
              alt="Img"
              className="w-full rounded-lg lg:w-[509px]"
            />
          </motion.div>

          <span className="text-xl font-normal text-white">{content.text}</span>
        </div>
      </a>
    </div>
  );
};
