import OtherCourseDetails, { OtherCourseDetailsInput } from "./other-course";
import SectionHeader from "./section-header";
import OurCourse from "./xDevsDetails";
import Image from "next/image";

const whybestDetails: OtherCourseDetailsInput[] = [
  {
    text: "Boring classes that put you to sleep",
  },
  {
    text: "No opportunities to make new friends",
  },
  {
    text: "Outdated syllabus that isn't relevant anymore",
  },
  {
    text: "Very few or no industry connections",
  },
  {
    text: "No help with motivation and accountability",
  },
  {
    text: "No alumni network to take help from",
  },
  {
    text: "Info that can easily be found online for free",
  },
  {
    text: "Hours of content, but no real outcome",
  },
  {
    text: "No support & help after you graduate",
  },
];

const WhyBest = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SectionHeader title="Why this is the best course ?" />
      <div className="flex flex-wrap items-center justify-center gap-9">
        {/* First card */}
        <div className="relative flex items-start justify-center rounded-4xl bg-gradient-to-b from-[#303539] to-[#0A0B10] p-px">
          <span className="absolute top-0 right-0 left-0 mx-auto flex h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#ff0000] to-transparent shadow-[rgb(0,12,32)]"></span>
          <Image
            src="/bg-1.svg"
            width={388}
            height={484}
            alt="background img"
            className="absolute"
          />
          <div className="rounded-4xl bg-black p-8">
            <h2 className="mb-7 text-4xl font-semibold text-white">
              Other course
            </h2>
            <div className="flex flex-col gap-6">
              {whybestDetails.map((detail, idx) => (
                <OtherCourseDetails key={idx} text={detail.text} />
              ))}
            </div>
          </div>
        </div>
        {/* Second card */}
        <div className="relative flex items-center justify-center rounded-4xl bg-gradient-to-b from-[#303539] to-[#0A0B10] p-px">
          <span className="absolute top-0 right-0 left-0 mx-auto flex h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#15ff00] to-transparent"></span>
          <Image
            src="/bg-2.svg"
            width={398}
            height={574}
            alt="background img"
            className="absolute"
          />
          <div className="rounded-4xl bg-black p-8">
            <h2 className="mb-7 text-4xl font-semibold text-white">
              Other course
            </h2>
            <div className="flex flex-col gap-6">
              {whybestDetails.map((detail, idx) => (
                <OurCourse key={idx} text={detail.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBest;
