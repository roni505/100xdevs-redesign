import Image from "next/image";
import SectionHeader from "./section-header";

const WhyUs = () => {
  return (
    <div className="flex flex-col  lg:mx-auto max-w-6xl mx-5">
      <SectionHeader title="Why learn with us ?" />
      <div className="flex flex-wrap w-full justify-center">
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
    <div className="lg:w-96 lg:border-l border-[#252525] lg:px-[30.6px] py-8 flex lg:flex-col max-lg:border-t md:flex-row w-full max-lg:items-center h-full flex-col lg:hover:bg-gradient-to-b from-neutral-800 to-black lg:hover:border lg:hover:border-neutral-700">
      <div>
        <h3 className="text-white text-2xl">{title}</h3>
        <p className="text-base text-neutral-500 mt-6 w-full">{p}</p>
      </div>
      <div className="relative">
        <Image
          src={src}
          width={330}
          height={239}
          alt="svgs"
          className="mt-20"
        />
        <div className="absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default WhyUs;
