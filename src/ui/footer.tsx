import Image from "next/image";
import Link from "./link";
import Logo from "./logo";

const Footer = () => {
  return (
    <div className="max-w-7xl flex justify-center items-cente mx-auto flex-col mt-40 w-full">
      <div className="flex justify-between w-full items-center">
        <Logo />
        <div className="flex gap-5">
          <Link text="Home" to="" />
          <Link text="Terms & Conditions" to="" />
          <Link text="Privacy Policy" to="" />
          <Link text="Refund Policy" to="" />
        </div>
      </div>
      <span className="w-full h-px bg-neutral-800 my-8"></span>
      <div className="flex justify-between items-center">
        <span className="text-white">© 2025 100xDevs. All rights reserved</span>
        <div className="flex gap-4">
          <Image
            src="/youtubeIcon.svg"
            width={33}
            height={33}
            alt="Youtube Logo"
          />
          <Image
            src="/githubIcon.svg"
            width={33}
            height={33}
            alt="Github logo"
          />
          <Image src="/xIcon.svg" width={24} height={24} alt="X logo" />
          <Image
            src="/linkedinIcon.svg"
            width={32}
            height={32}
            alt="Company Logos"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center mt-12">
        <h1 className="text-center text-[200px] bg-gradient-to-b from-neutral-400 to-black bg-clip-text text-transparent">
          100xDevs
        </h1>
      </div>
    </div>
  );
};

export default Footer;
