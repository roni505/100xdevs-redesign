import Image from "next/image";

const Community = () => {
  return (
    <div className="relative flex justify-center items-center">
      <Image
        src="/communityImg.svg"
        width={1440}
        height={788}
        alt="Community Image"
      />
      <div className="flex flex-col w-4xl absolute top-2/6 justify-center items-center">
        <h2 className="text-5xl text-neutral-200 text-center font-semibold">
          More Than a Course. A Community.
        </h2>
        <p className="mt-6 text-lg text-neutral-400 text-center w-2xl font-medium">
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
