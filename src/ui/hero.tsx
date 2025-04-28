import Button from "./button";
import DevTrust from "./dev-trust";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full text-white">
      <div className="flex flex-col items-center">
        <div className="w-2xl">
          <h1 className="text-7xl text-center font-medium leading-tight">
            100xDevs, because 10x ain't enough!
          </h1>
        </div>
        <div className="flex gap-3 mt-14">
          <Button varient="primary">View Courses</Button>
          <Button varient="secondary">View Notes</Button>
        </div>
        <div>
          <DevTrust />
        </div>
      </div>
    </div>
  );
};

export default Hero;
