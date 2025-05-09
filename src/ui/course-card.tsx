"use client";

import Image from "next/image";
import Button from "./button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return (
    <div className="flex w-[360px] rounded-[20px] bg-gradient-to-b from-[#303539] to-[#191919] p-[1px]">
      <div className="w-full rounded-[20px] bg-black p-5">
        <Image src={src} width={320} height={180} alt="Banner for cohort" />
        <h4 className="mt-5 text-lg font-medium text-white">{title}</h4>
        <div className="mt-6 flex justify-between text-base font-medium">
          <div className="flex gap-2">
            <span className="text-white">{prize}</span>
            <span className="text-neutral-500">{OGprize}</span>
          </div>
          <span className="text-[#0E8A00]">{discount}</span>
        </div>
        <Button
          className="mt-6 w-full"
          varient="secondary"
          iocn={<ChevronRight size={20} />}
          onClick={() => router.push("/webDevopsWeb3")}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
