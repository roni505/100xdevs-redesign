import Image from "next/image";

export type SyllabusDetails = {
  title: string;
  topic: string[];
};

const SyllabusDetails = ({ title, topic }: SyllabusDetails) => {
  return (
    <div className="relative mx-auto flex w-full items-center justify-center gap-6 max-sm:flex-wrap">
      <div className="flex flex-col items-start justify-start border-r border-l border-[#1F1F1F] px-4 py-5 sm:sticky sm:top-[74px] sm:max-h-screen sm:self-start sm:overflow-y-auto">
        <div className="w-full border-b border-[#1F1F1F] pb-6">
          <h1 className="text-4xl text-white">{title}</h1>
        </div>
        <Image
          src="/communityImg.svg"
          width={450}
          height={306}
          alt="Syllabus Image"
        />
      </div>
      <div className="flex flex-col divide-y divide-neutral-800 border-r border-l border-[#1F1F1F]">
        {topic.map((topic, idx) => (
          <TopicRow key={idx} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default SyllabusDetails;

export type TopicRowInput = {
  topic: string;
};

const TopicRow = ({ topic }: TopicRowInput) => {
  return (
    <span className="px-6 py-4 text-base font-normal text-neutral-300">
      {topic}
    </span>
  );
};
