import Image from "next/image";
import Button from "./button";

export type CourseCardInput = {
  title: string;
  prize: string;
  OGprize: string;
  discount: string;
  src: string;
};

const CourseCard = ({
  title,
  prize,
  OGprize,
  discount,
  src,
}: CourseCardInput) => {
  return (
    <div className="flex w-[360px] p-[1px] rounded-[20px] bg-gradient-to-b from-[#303539] to-[#191919]">
      <div className="bg-black w-full rounded-[20px] p-5">
        <Image src={src} width={320} height={180} alt="Banner for cohort" />
        <h4 className="text-white text-lg mt-5 font-medium">{title}</h4>
        <div className="text-base flex justify-between mt-6 font-medium">
          <div className="flex gap-2">
            <span className="text-white">{prize}</span>
            <span className="text-neutral-500">{OGprize}</span>
          </div>
          <span className="text-[#0E8A00]">{discount}</span>
        </div>
        <Button className="w-full mt-6 " varient="secondary">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
