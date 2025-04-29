import Image from "next/image";

import SectionHeader from "./section-header";

export type TAcardInput = {
  name: string;
  src: string;
};

const taInfo: TAcardInput[] = [
  {
    name: "TA Sumana",
    src: "/hkiratImg.svg",
  },
  {
    name: "TA Jack Sparrow",
    src: "/hkiratImg.svg",
  },
  {
    name: "TA Harry Potter",
    src: "/hkiratImg.svg",
  },
  {
    name: "TA Rushikesh G",
    src: "/hkiratImg.svg",
  },
  {
    name: "TA Tarun",
    src: "/hkiratImg.svg",
  },
  {
    name: "TA SerBarristan",
    src: "/hkiratImg.svg",
  },
];

const MeetTA = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <SectionHeader title="Meet Your TAs" />
      <div className="flex flex-wrap items-center justify-center gap-12 lg:w-[696px]">
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
      <Image src={src} width={200} height={200} alt="TA images" />
      <span className="text-xl font-medium text-white">{name}</span>
    </div>
  );
};

export default MeetTA;
