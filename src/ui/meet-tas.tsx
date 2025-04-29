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
];

const MeetTA = () => {
  return (
    <div>
      <SectionHeader title="Meet Your TAs" />
      <div>
        {taInfo.map((info, idx) => (
          <TAcard key={idx} name={info.name} src={info.src} />
        ))}
      </div>
    </div>
  );
};

const TAcard = ({ name, src }: TAcardInput) => {
  return (
    <div>
      <Image src={src} width={200} height={200} alt="TA images" />
      <span>{name}</span>
    </div>
  );
};

export default MeetTA;
