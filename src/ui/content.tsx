import Image from "next/image";

export type ContentCardInput = {
  src: string;
  text: string;
};

const contentDetails: ContentCardInput[] = [
  {
    src: "/communityImg.svg",
    text: "Rust 0 - 100 Bootcamp, learn by doing",
  },
  {
    src: "/communityImg.svg",
    text: "Rust 0 - 100 Bootcamp, learn by doing",
  },
  {
    src: "/communityImg.svg",
    text: "Rust 0 - 100 Bootcamp, learn by doing",
  },
  {
    src: "/communityImg.svg",
    text: "Rust 0 - 100 Bootcamp, learn by doing",
  },
  {
    src: "/communityImg.svg",
    text: "Rust 0 - 100 Bootcamp, learn by doing",
  },
  {
    src: "/communityImg.svg",
    text: "Rust 0 - 100 Bootcamp, learn by doing",
  },
];

const Content = () => {
  return (
    <div className="mx-auto flex items-center justify-center border-t border-b border-neutral-900">
      <div className="relative mx-5 flex max-w-6xl flex-wrap items-center justify-center border-r border-l border-neutral-900 lg:mx-auto">
        <span className="absolute right-0 left-0 mx-auto h-full w-px bg-neutral-900 max-lg:hidden"></span>
        {contentDetails.map((content, idx) => (
          <div key={idx}>
            <ContentCard content={content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

const ContentCard = ({ content }: { content: ContentCardInput }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 border-b border-neutral-900 p-8">
        <Image
          src={content.src}
          height={330}
          width={509}
          alt="Img"
          className="w-full lg:w-[509px]"
        />
        <span className="text-xl font-normal text-white">{content.text}</span>
      </div>
    </div>
  );
};
