import Image from "next/image";
import Link from "./link";
import Logo from "./logo";

const Footer = () => {
  return (
    <div className="items-cente mt-40 flex w-full max-w-7xl flex-col justify-center px-5 lg:mx-auto">
      <div className="flex w-full items-center justify-between">
        <Logo />
        <div className="flex gap-5">
          <Link text="Home" to="" />
          <Link text="Terms & Conditions" to="" />
          <Link text="Privacy Policy" to="" />
          <Link text="Refund Policy" to="" />
        </div>
      </div>
      <span className="my-8 h-px w-full bg-neutral-800"></span>
      <div className="flex items-center justify-between">
        <span className="text-white">
          © 2025 100xDevs. All rights reserved
        </span>
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
      <div className="mt-12 hidden w-full items-center justify-center lg:flex">
        <h1 className="bg-gradient-to-b from-neutral-400 to-black bg-clip-text text-center text-[200px] text-transparent">
          100xDevs
        </h1>
      </div>
    </div>
  );
};

export default Footer;
