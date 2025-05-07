import Image from "next/image";
import DevTrust from "./dev-trust";
import Button from "./button";

const CourseHero = () => {
  return (
    <div className="mx-auto mt-32 flex max-w-7xl flex-wrap items-center justify-center gap-10 px-5 lg:flex-nowrap lg:px-0">
      <div className="flex bg-white max-lg:w-full lg:w-[540px]">
        <Image
          src="/communityImg.svg"
          width={540}
          height={448}
          alt="Course banner"
          //   className="max-md:w-full lg:w-[540px]"
        />
      </div>
      <div className="mx-5 flex flex-col items-center justify-center lg:mx-0 lg:w-[700px] lg:items-start lg:justify-start">
        <h2 className="flex w-9/12 text-center text-2xl leading-tight font-medium text-white md:text-3xl lg:w-full lg:text-start lg:text-5xl">
          Complete Web Development + Devops + Blockchain Cohort
        </h2>
        <p className="mt-5 flex w-2/3 text-center text-sm text-neutral-200 md:text-base lg:w-full lg:text-start">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu{" "}
        </p>
        <div className="mt-7 flex flex-col gap-2">
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
          Enroll
        </Button>
      </div>
    </div>
  );
};

export default CourseHero;
