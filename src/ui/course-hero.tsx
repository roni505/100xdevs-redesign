import Image from "next/image";
import DevTrust from "./dev-trust";
import Button from "./button";

const CourseHero = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-10 px-5 pt-32 lg:mt-14 lg:flex-nowrap lg:px-0">
      <div className="flex flex-col max-lg:w-full lg:w-[600px]">
        <Image
          src="/cohort3Img.svg"
          width={650}
          height={300}
          alt="Course banner"
          className="w-full rounded-xl"
        />
        <div className="mt-8 hidden gap-7 lg:flex">
          <div className="flex gap-2">
            <Image src="/hoursIcon.svg" height={24} width={24} alt="Icon" />
            <span className="text-lg font-normal text-neutral-400">
              100+ hours of content
            </span>
          </div>
          <div className="flex gap-2">
            <Image src="/bookIcon.svg" height={24} width={24} alt="Icon" />
            <span className="text-lg font-normal text-neutral-400">
              80+ lessons
            </span>
          </div>
          <div className="flex gap-2">
            <Image src="/validityIcon.svg" height={24} width={24} alt="Icon" />
            <span className="text-lg font-normal text-neutral-400">
              3 years validity
            </span>
          </div>
        </div>
      </div>
      <div className="mx-5 flex flex-col items-center justify-center lg:mx-0 lg:w-[700px] lg:items-start lg:justify-start">
        <h2 className="flex w-9/12 text-center text-3xl leading-tight font-medium text-white md:text-3xl lg:w-full lg:text-start lg:text-5xl">
          Web Development + Devops + Blockchain Cohort
        </h2>
        <p className="mt-5 flex w-2/3 text-center text-sm text-neutral-400 md:text-base lg:w-full lg:text-start">
          Master full-stack web development, explore decentralized Web3
          technologies, and learn modern DevOps workflows. Gain hands-on
          experience through real projects, peer collaboration, and expert
          mentorship to build production-grade solutions.{" "}
        </p>
        <div className="mt-7 flex flex-col gap-2 lg:hidden">
          <div className="flex gap-2">
            <Image src="/hoursIcon.svg" height={24} width={24} alt="Icon" />
            <span className="text-lg font-normal text-neutral-400">
              100+ hours of content
            </span>
          </div>
          <div className="flex gap-2">
            <Image src="/bookIcon.svg" height={24} width={24} alt="Icon" />
            <span className="text-lg font-normal text-neutral-400">
              80+ lessons
            </span>
          </div>
          <div className="flex gap-2">
            <Image src="/validityIcon.svg" height={24} width={24} alt="Icon" />
            <span className="text-lg font-normal text-neutral-400">
              3 years validity
            </span>
          </div>
        </div>

        <DevTrust />
        <Button varient="primary" className="mt-9">
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default CourseHero;
