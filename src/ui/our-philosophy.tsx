const OurPhilosophy = () => {
  return (
    <div className="mx-auto mt-52 flex h-full w-full flex-col items-center justify-center">
      <span className="text-center text-7xl text-white">Our Philosophy</span>
      <div className="mt-27 flex flex-col gap-44">
        {/* 1st */}
        <div className="flex items-center justify-center gap-8">
          <div className="bg-gradient-to-b from-neutral-400 to-black bg-clip-text text-[200px] text-transparent">
            1
          </div>
          <div className="flex h-full w-2xs flex-col justify-center">
            <span className="text-2xl font-normal text-white">
              Learn by Building
            </span>
            <p className="mt-3 text-base text-neutral-600">
              Every concept is reinforced through hands-on projects that
              simulate real-world scenarios.
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex items-center justify-center gap-8">
          <div className="bg-gradient-to-b from-neutral-400 to-black bg-clip-text text-[200px] text-transparent">
            2
          </div>
          <div className="flex h-full w-2xs flex-col justify-center">
            <span className="text-2xl font-normal text-white">
              Learn by Building
            </span>
            <p className="mt-3 text-base text-neutral-600">
              Every concept is reinforced through hands-on projects that
              simulate real-world scenarios.
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex items-center justify-center gap-8">
          <div className="bg-gradient-to-b from-neutral-400 to-black bg-clip-text text-[200px] text-transparent">
            3
          </div>
          <div className="flex h-full w-2xs flex-col justify-center">
            <span className="text-2xl font-normal text-white">
              Learn by Building
            </span>
            <p className="mt-3 text-base text-neutral-600">
              Every concept is reinforced through hands-on projects that
              simulate real-world scenarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPhilosophy;
