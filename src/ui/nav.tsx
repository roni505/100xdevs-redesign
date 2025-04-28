"use client";

import { Link } from "react-scroll";
import Logo from "./logo";
import Button from "./button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full z-20">
      <nav className="fixed right-0 left-0 top-0 py-4 px-5 lg:px-0 flex max-w-7xl justify-between mx-auto items-center bg-black/30 backdrop-blur-lg">
        <Logo />
        <div className="hidden md:flex gap-6 lg:gap-10 justify-center items-center text-neutral-300">
          <Link
            to="Features"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white duration-300"
          >
            Courses
          </Link>
          <Link
            to="Benefits"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white duration-300"
          >
            Open Source
          </Link>
          <Link
            to="Customers"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white duration-300"
          >
            Free Resources
          </Link>
          <Link
            to="Pricing"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white duration-300"
          >
            Wins
          </Link>
          <Link
            to=""
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white duration-300"
          >
            About
          </Link>
        </div>
        <button
          className="md:hidden cursor-pointer hover:text-white duration-300 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isOpen && (
          <div className="absolute w-full left-0 top-18 gap-7 p-5 bg-black min-h-screen flex flex-col text-neutral-300">
            <Link
              to="Features"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-white duration-300"
            >
              Features
            </Link>
            <Link
              to="Benefits"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-white duration-300"
            >
              Benefits
            </Link>
            <Link
              to="Customers"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-white duration-300"
            >
              Customers
            </Link>
            <Link
              to="Pricing"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-white duration-300"
            >
              Pricing
            </Link>
            <Link
              to=""
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-white duration-300"
            >
              About
            </Link>
            <Button
              varient="outlined"
              className="w-full flex justify-center items-center"
            >
              Login
            </Button>
          </div>
        )}
        <Button varient="outlined" className="hidden md:block">
          Login
        </Button>
        <span className="absolute bottom-0 left-0 bg-gradient-to-r from-transparent via-neutral-800 to-transparent h-px w-full"></span>
      </nav>
    </header>
  );
};

export default Nav;
