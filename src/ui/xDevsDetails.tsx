import { Check } from "lucide-react";

export type OtherCourseDetailsInput = {
  text: string;
};

const OurCourse = ({ text }: OtherCourseDetailsInput) => {
  return (
    <div className="flex items-center gap-2">
      <Check size={16} color="white" />
      <span className="text-lg font-medium text-neutral-200">{text}</span>
    </div>
  );
};

export default OurCourse;
