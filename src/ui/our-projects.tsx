import { Star } from "lucide-react";
import { GitFork } from "lucide-react";
import { Users } from "lucide-react";

export type OSprojectsCardInputs = {
  title: string;
  description: string;
  stars: string;
  fork: string;
  contributor: string;
};

const projectsDetails: OSprojectsCardInputs[] = [
  {
    title: "cms",
    description:
      "An open source codebase powering app.100xdevs.com — the central platform for 100xDevs cohorts, featuring assignments, progress tracking, and community features.",
    stars: "1.3k",
    fork: "1.8k",
    contributor: "168",
  },
  {
    title: "mobile-magic",
    description:
      "Mobile-magic is an intelligent agent that builds, edits, and deploys beautiful, high-performance mobile apps from simple natural language prompts.",
    stars: "116",
    fork: "101",
    contributor: "8",
  },
  {
    title: "photo-ai",
    description:
      "100xPhoto is a powerful AI image platform that lets you generate stunning images and train custom AI models. Built with cutting-edge technology.",
    stars: "149",
    fork: "118",
    contributor: "9",
  },
  {
    title: "job-board",
    description:
      "Job Board is a platform designed to connect employers with potential employees. Employers can post job listings, and job seekers can apply for these positions.",
    stars: "369",
    fork: "457",
    contributor: "71",
  },
  {
    title: "daily-code",
    description:
      "A platform where you'll find the right content, tools, and guidance to help you improve your skills and grow your knowledge effectively.",
    stars: "901",
    fork: "1.1k",
    contributor: "90",
  },
  {
    title: "muzer",
    description:
      "Empower your audience to curate your music stream in real time. Connect with fans like never before and build a stronger, interactive community.",
    stars: "216",
    fork: "164",
    contributor: "19",
  },
];

const OurProjects = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center border-t border-[#1F1F1F] px-5 lg:px-0">
      <div className="flex max-w-6xl flex-wrap items-center justify-center gap-9 border-r border-l border-[#1F1F1F] px-5 py-7 lg:px-0">
        {projectsDetails.map((details, idx) => (
          <OSprojectsCard key={idx} details={details} />
        ))}
      </div>
    </div>
  );
};

export default OurProjects;

const OSprojectsCard = ({ details }: { details: OSprojectsCardInputs }) => {
  return (
    <div className="w-full cursor-pointer rounded-lg border border-neutral-800 bg-[#0A0A0A] p-6 transition-all duration-300 hover:bg-black lg:w-lg">
      <span className="text-xl text-white">{details.title}</span>
      <p className="mt-3 mb-20 text-base text-neutral-500">
        {details.description}
      </p>
      <div className="flex gap-4">
        <div className="flex gap-1">
          <Star
            fill="#E3B341"
            strokeWidth={2}
            size={18}
            className="text-[#E3B341]"
          />
          <span className="text-sm text-white">{details.stars}</span>
        </div>
        <div className="flex gap-1">
          <GitFork size={18} color="white" />
          <span className="text-sm text-white">{details.fork}</span>
        </div>
        <div className="flex gap-1">
          <Users color="white" size={18} />
          <span className="text-sm text-white">{details.contributor}</span>
        </div>
      </div>
    </div>
  );
};
