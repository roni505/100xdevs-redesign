import Image from "next/image";
import DropDown from "./drop-down";
import SearchBar from "./search-bar";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export type StoriesCardInput = {
  src: string;
  name: string;
  text: string;
};

const cardContent: StoriesCardInput[] = [
  {
    name: "Mohit Rawat",
    src: "/wins1.svg",
    text: "Mohit Rawat a tech upskilling cohort where he dove deep into TypeScript, React, Next.js, Node.js, and cloud deployment. Through hands-on projects and mentorship, he built production-ready apps, contributed to open-source tools, and developed a strong GitHub portfolio.",
  },
  {
    name: "Mohit Rawat",
    src: "/wins2.svg",
    text: "Mohit Rawat a tech upskilling cohort where he dove deep into TypeScript, React, Next.js, Node.js, and cloud deployment. Through hands-on projects and mentorship, he built production-ready apps, contributed to open-source tools, and developed a strong GitHub portfolio.",
  },
  {
    name: "Mohit Rawat",
    src: "/wins1.svg",
    text: "Mohit Rawat a tech upskilling cohort where he dove deep into TypeScript, React, Next.js, Node.js, and cloud deployment. Through hands-on projects and mentorship, he built production-ready apps, contributed to open-source tools, and developed a strong GitHub portfolio.",
  },
  {
    name: "Mohit Rawat",
    src: "/wins2.svg",
    text: "Mohit Rawat a tech upskilling cohort where he dove deep into TypeScript, React, Next.js, Node.js, and cloud deployment. Through hands-on projects and mentorship, he built production-ready apps, contributed to open-source tools, and developed a strong GitHub portfolio.",
  },
];

const StoriesContent = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <div className="mb-7 flex w-full max-w-6xl items-center justify-between px-5">
        <DropDown />
        <SearchBar />
      </div>
      <div className="w-full border-t border-b border-[#1F1F1F]">
        <div className="divider-[#1F1F1F] mx-5 flex w-full flex-col divide-y border-r border-l border-[#1F1F1F] lg:mx-auto lg:w-6xl">
          {cardContent.map((content, idx) => (
            <StoriesCard key={idx} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StoriesCard = ({ content }: { content: StoriesCardInput }) => {
  return (
    <div className="w-full border-[#1F1F1F] p-12">
      <div className="mx-auto flex w-full items-center justify-center lg:w-4xl">
        <div className="flex flex-col justify-center gap-12 md:gap-16 lg:grid lg:grid-cols-2 lg:gap-24">
          <Image
            src={content.src}
            width={380}
            height={252}
            alt="Img"
            className="w-full lg:w-380"
          />
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <span className="flex justify-center text-xl font-medium text-white lg:justify-start">
              {content.name}
            </span>
            <p className="mt-5 flex items-center justify-center text-center text-lg font-normal text-neutral-400 max-md:w-4/5 lg:text-start">
              {content.text}
            </p>
            <div className="mt-9 flex justify-center gap-4 lg:justify-start">
              <FaXTwitter
                className="cursor-pointer text-neutral-700 transition-all duration-300 hover:text-neutral-200"
                size={32}
              />
              <BsGithub
                className="cursor-pointer text-neutral-700 transition-all duration-300 hover:text-neutral-200"
                size={32}
              />
              <BsLinkedin
                className="cursor-pointer text-neutral-700 transition-all duration-300 hover:text-neutral-200"
                size={32}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesContent;
