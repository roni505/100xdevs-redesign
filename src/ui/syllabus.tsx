import SectionHeader from "./section-header";
import SyllabusDetails, { TopicRowInput } from "./syllabus-details";

const WebDTopics: TopicRowInput[] = [
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

const devopsTopics: TopicRowInput[] = [
  {
    topic: "Linux / Bash scripting",
  },
  {
    topic: "VMs/EC2/GCP VMs",
  },
  {
    topic: "ASGs/MIG",
  },
  {
    topic: "Containerization",
  },
  {
    topic: "ECS (Warming up for k8s)",
  },
  {
    topic: "Kubernetes",
  },
  {
    topic: "Iac, Terraform",
  },
  {
    topic: "Monitoring",
  },
  {
    topic: "Package managers (helm)",
  },
  {
    topic: "CI/CD in github",
  },
  {
    topic: "Gitops",
  },
  {
    topic: "CDNs and Object stores",
  },
];

const web3Topics: TopicRowInput[] = [
  {
    topic: "General Web3",
  },
  {
    topic: "Understanding EVM",
  },
  {
    topic: "Solana client side apps, adapters",
  },
  {
    topic: "Understanding the Data model on Solana",
  },
  {
    topic: "Solidity Basics (Remix)",
  },
  {
    topic: "Solidity Advance",
  },
  {
    topic: "Writing Smart contracts in Solidity, Writing frontends for them",
  },
  {
    topic: "Rust Basics",
  },
  {
    topic: "Rust Advance",
  },
  {
    topic: "Data Model on Solana",
  },
  {
    topic: "Programs on Solana",
  },
  {
    topic: "Web2 + Web3 usecases (indexing, sweeping)",
  },
];

const Syllabus = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center px-5 lg:px-0">
      <SectionHeader
        title="Syllabus"
        description="Our step-by-step syllabus builds on each module to ensure a smooth learning journey—perfect for both beginners and advanced"
      />
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-10">
        <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-10 border-t border-b border-[#1F1F1F]">
          <span className="top-20 left-0 hidden h-px w-[46.5%] bg-neutral-800 sm:absolute"></span>
          <SyllabusDetails
            title="Web Development"
            topic={WebDTopics.map((topic) => topic.topic)}
          />
        </div>
        <div className="relative mx-auto flex w-full flex-col items-center justify-center border-t border-b border-[#1F1F1F]">
          <span className="top-20 left-0 hidden h-px w-[46.5%] bg-neutral-800 sm:absolute"></span>
          <SyllabusDetails
            title="Devops"
            topic={devopsTopics.map((topic) => topic.topic)}
          />
        </div>
        <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-10 border-t border-b border-[#1F1F1F]">
          <span className="top-20 left-0 hidden h-px w-[46.5%] bg-neutral-800 sm:absolute"></span>
          <SyllabusDetails
            title="Web3"
            topic={web3Topics.map((topic) => topic.topic)}
          />
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
