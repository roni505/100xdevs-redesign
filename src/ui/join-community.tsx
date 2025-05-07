import Image from "next/image";
import SectionHeader from "./section-header";

const JoinCommunity = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center px-5 lg:px-0">
      <SectionHeader
        title=" Join the Community of Cracked Devs"
        description="This isn’t just another Discord or forum. It’s the underground layer where India’s sharpest developers connect, build, and level each other up. From breaking down complex problems to launching projects, this is where serious devs go when they’re done playing small."
      />
      <div className="relative mx-auto flex items-center justify-center">
        <Image src="/bg-texture.svg" width={1280} height={714} alt="bg img" />
        <Image
          src="/peopleImg.svg"
          width={772}
          height={472}
          alt="bg img"
          className="absolute top-0"
        />
      </div>
    </div>
  );
};

export default JoinCommunity;
