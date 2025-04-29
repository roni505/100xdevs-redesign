import Image from "next/image";

export type SyllabusDetails = {
  title: string;
  topic: string[];
};

const SyllabusDetails = ({ title, topic }: SyllabusDetails) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-start justify-start border-r border-l border-neutral-800 px-4 py-5">
        <h1 className="mb-6 text-4xl text-white">{title}</h1>
        <Image
          src="/communityImg.svg"
          width={450}
          height={306}
          alt="Syllabus Image"
        />
      </div>
      <div className="flex flex-col divide-y divide-neutral-800 border-r border-l border-neutral-800">
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
