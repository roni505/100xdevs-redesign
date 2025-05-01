"use client";

import Logo from "./logo";
import Button from "./button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20 w-full">
      <nav className="fixed top-0 right-0 left-0 mx-auto flex max-w-7xl items-center justify-between bg-black/30 px-5 py-4 backdrop-blur-lg lg:px-0">
        <Logo />
        <div className="hidden items-center justify-center gap-6 text-neutral-300 md:flex lg:gap-10">
          <Link
            href="#active-cohort"
            onClick={() => router.push("#active-course")}
            className="cursor-pointer duration-300 hover:text-white"
          >
            Courses
          </Link>
          <Link
            href="/open-source"
            className="cursor-pointer duration-300 hover:text-white"
          >
            Open Source
          </Link>
          <Link
            href="/free-resources"
            className="cursor-pointer duration-300 hover:text-white"
          >
            Free Resources
          </Link>
          <Link
            href="/wins"
            className="cursor-pointer duration-300 hover:text-white"
          >
            Wins
          </Link>
          <Link
            href="/about"
            className="cursor-pointer duration-300 hover:text-white"
          >
            About
          </Link>
        </div>
        <button
          className="cursor-pointer text-white duration-300 hover:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isOpen && (
          <div className="absolute top-18 left-0 flex min-h-screen w-full flex-col gap-7 bg-black p-5 text-neutral-300">
            <Link
              href="/#active-cohort"
              className="cursor-pointer duration-300 hover:text-white"
            >
              Courses
            </Link>
            <Link
              href="/open-source"
              className="cursor-pointer duration-300 hover:text-white"
            >
              Open-Source
            </Link>
            <Link
              href="/free-resources"
              className="cursor-pointer duration-300 hover:text-white"
            >
              Free Resources
            </Link>
            <Link
              href="/wins"
              className="cursor-pointer duration-300 hover:text-white"
            >
              Wins
            </Link>
            <Link
              href="/about"
              className="cursor-pointer duration-300 hover:text-white"
            >
              About
            </Link>
            <Button
              varient="outlined"
              className="flex w-full items-center justify-center"
            >
              Login
            </Button>
          </div>
        )}
        <Button varient="outlined" className="hidden md:block">
          Login
        </Button>
        <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></span>
      </nav>
    </div>
  );
};

export default Nav;
