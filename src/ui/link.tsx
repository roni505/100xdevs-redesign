"use client";

import { ReactNode } from "react";
import { Link as TextLink } from "react-scroll";

export type LinkInputProps = {
  to: string;
  text: ReactNode;
};

const Link = ({ to, text }: LinkInputProps) => {
  return (
    <TextLink
      to={to}
      smooth={true}
      duration={500}
      className="cursor-pointer hover:text-white duration-300 text-neutral-300"
    >
      {text}
    </TextLink>
  );
};

export default Link;
