const AboutHero = () => {
  return (
    <div className="relative mx-auto flex w-full items-center justify-center lg:h-screen">
      <span className="absolute top-[57%] h-px w-full bg-[#1F1F1F] max-lg:hidden"></span>
      <span className="absolute right-2/4 -z-10 h-full w-[0.5px] bg-[#1F1F1F] max-lg:hidden"></span>
      <div className="mt-32 flex max-w-6xl flex-wrap items-center justify-center">
        {cardDetails.map((detail, idx) => (
          <AboutCard key={idx} detail={detail} />
        ))}
      </div>
    </div>
  );
};

export default AboutHero;

export type AboutCardInput = {
  title: string;
  description: string;
};

const cardDetails: AboutCardInput[] = [
  {
    title: "200+",
    description: "High-paying internships",
  },
  {
    title: "$150+",
    description: "Highest package",
  },
  {
    title: "10k+",
    description: "Active community members",
  },
  {
    title: "20+",
    description: "Students cracked GSoC 2024",
  },
];

const AboutCard = ({ detail }: { detail: AboutCardInput }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-40 py-30">
      <span className="text-7xl font-normal text-white">{detail.title}</span>
      <span className="text-center text-lg text-neutral-400">
        {detail.description}
      </span>
    </div>
  );
};
