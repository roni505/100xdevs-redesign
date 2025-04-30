"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DropDown = () => {
  const [text, setText] = useState<string>("All Cohorts");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-normal text-white transition duration-300 hover:bg-neutral-800 hover:text-neutral-200"
      >
        {text}
        <ChevronDown size={20} />
      </button>
      {isOpen && (
        <div className="absolute z-10 flex w-60 flex-col gap-2 divide-y divide-neutral-800 rounded-2xl border border-neutral-800 bg-black p-3">
          <button
            onClick={() => (setIsOpen(!isOpen), setText("Cohort 1"))}
            className="flex w-full cursor-pointer gap-2 rounded-lg px-4 py-2 text-sm font-normal text-neutral-400 transition duration-300 hover:bg-neutral-900 hover:from-[rgb(0,89,198)] hover:to-[rgb(0,19,71,100)] hover:text-neutral-200"
          >
            Cohort 1
          </button>
          <button
            onClick={() => (setIsOpen(!isOpen), setText("Cohort 2"))}
            className="flex w-full cursor-pointer gap-2 rounded-lg px-4 py-2 text-sm font-normal text-neutral-400 transition duration-300 hover:bg-neutral-900 hover:from-[rgb(0,89,198)] hover:to-[rgb(0,19,71,100)] hover:text-neutral-200"
          >
            Cohort 2
          </button>
          <button
            onClick={() => (setIsOpen(!isOpen), setText("Cohort 3"))}
            className="flex w-full cursor-pointer gap-2 rounded-lg px-4 py-2 text-sm font-normal text-neutral-400 transition duration-300 hover:bg-neutral-900 hover:from-[rgb(0,89,198)] hover:to-[rgb(0,19,71,100)] hover:text-neutral-200"
          >
            Cohort 3
          </button>
          <button
            onClick={() => (setIsOpen(!isOpen), setText("All Cohort"))}
            className="flex w-full cursor-pointer gap-2 rounded-lg px-4 py-2 text-sm font-normal text-neutral-400 transition duration-300 hover:bg-neutral-900 hover:from-[rgb(0,89,198)] hover:to-[rgb(0,19,71,100)] hover:text-neutral-200"
          >
            All Cohort
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDown;
