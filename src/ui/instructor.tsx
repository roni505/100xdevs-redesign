import Image from "next/image";

import SectionHeader from "./section-header";

const Instructor = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-5 lg:px-0">
      <SectionHeader title="Meet Your Instructor" />
      <div className="relative flex items-start justify-center rounded-4xl bg-gradient-to-b from-[#303539] to-[#0A0B10] p-px">
        <span className="absolute top-0 mx-auto flex h-[1px] w-2/5 bg-gradient-to-r from-transparent via-[#1500ff] to-transparent md:right-0"></span>
        <Image
          src="/texture.svg"
          width={380}
          height={328}
          alt="Bg imagek"
          className="absolute md:right-10"
        />
        <div className="flex rounded-4xl bg-black p-5 lg:px-12 lg:py-6">
          <div className="flex justify-center max-md:flex-wrap-reverse">
            <div className="relative">
              <h4 className="text-2xl text-white">Harkirat Singh</h4>
              <p className="mt-5 text-lg font-normal text-neutral-400">
                An IIT Roorkee alumnus with a B.Tech in Computer Science,
                Harkirat Singh has worked at top companies like Goldman Sachs,
                Bag Pack, and Gather AI. With hands-on experience in building
                and deploying large-scale systems, he has contributed to
                everything from high-frequency trading platforms to AI-driven
                infrastructure. Now, he brings that experience into
                teaching—blending real-world DevOps practices, modern web
                development techniques, and the fast-evolving world of Web3.
                Whether you're just starting out or looking to deepen your
                skills, you'll be learning from someone who has been at the
                forefront of tech and knows how to build and ship impactful
                products.
              </p>
            </div>
            <Image
              src="/HkiratImg.svg"
              width={380}
              height={328}
              alt="Bg imagek"
              className="z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
