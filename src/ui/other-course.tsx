import { X } from "lucide-react";

export type OtherCourseDetailsInput = {
  text: string;
};

const OtherCourseDetails = ({ text }: OtherCourseDetailsInput) => {
  return (
    <div className="flex items-center gap-2">
      <X size={16} color="white" />
      <span className="text-sm text-neutral-200">{text}</span>
    </div>
  );
};

export default OtherCourseDetails;
