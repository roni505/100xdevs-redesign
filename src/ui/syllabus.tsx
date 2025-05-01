import SectionHeader from "./section-header";
import SyllabusDetails, { TopicRowInput } from "./syllabus-details";

const topics: TopicRowInput[] = [
  {
    topic: "Foundations",
  },
  {
    topic: "Simple frontend, DOM",
  },
  {
    topic: "Node.js/Bun/Cloudflare Runtime - Various JS runtimes",
  },
  {
    topic: "HTTP Servers",
  },
  {
    topic: "NoSQL Databases",
  },
  {
    topic: "SQL Databases",
  },
  {
    topic: "ORMs",
  },
  {
    topic: "React",
  },
  {
    topic: "Styling React apps",
  },
  {
    topic: "Typescript",
  },
  {
    topic: "NextJS",
  },
  {
    topic: "Monorepos, Turborepo, lints",
  },
  {
    topic: "Websockets, rtc",
  },
  {
    topic: "Testing",
  },
  {
    topic: "Advance backend",
  },
];

const Syllabus = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <SectionHeader
        title="Syllabus"
        description="Our step-by-step syllabus builds on each module to ensure a smooth learning journey—perfect for both beginners and advanced"
      />
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-10">
        <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-10 border-t border-b border-[#1F1F1F]">
          <span className="absolute top-20 left-0 h-px w-1/2 bg-neutral-800"></span>
          <SyllabusDetails
            title="Web Development"
            topic={topics.map((topic, idx) => topic.topic)}
          />
        </div>
        <div className="relative mx-auto flex w-full flex-col items-center justify-center border-t border-b border-[#1F1F1F]">
          <span className="absolute top-20 left-0 h-px w-1/2 bg-neutral-800"></span>
          <SyllabusDetails
            title="Web Development"
            topic={topics.map((topic, idx) => topic.topic)}
          />
        </div>
        <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-10 border-t border-b border-[#1F1F1F]">
          <span className="absolute top-20 left-0 h-px w-1/2 bg-neutral-800"></span>
          <SyllabusDetails
            title="Web Development"
            topic={topics.map((topic, idx) => topic.topic)}
          />
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
