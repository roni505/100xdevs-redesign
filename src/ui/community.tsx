import Image from "next/image";

const Community = () => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Image
        src="/communityImg.svg"
        width={1440}
        height={788}
        alt="Community Image"
      />
      <div className="absolute top-2/6 flex w-full flex-col items-center justify-center px-5 lg:w-4xl lg:px-0">
        <h2 className="text-center text-2xl font-semibold text-neutral-200 sm:text-3xl md:text-4xl lg:text-5xl">
          More Than a Course. A Community.
        </h2>
        <p className="mt-6 flex w-full text-center text-sm font-medium text-neutral-400 md:w-2xl md:text-lg">
          Where connections spark, friendships grow, and real growth happens.
          Every shared moment adds to a bigger journey—one you’ll never walk
          alone. This is more than learning. It’s a community that rises
          together.
        </p>
      </div>
    </div>
  );
};

export default Community;
