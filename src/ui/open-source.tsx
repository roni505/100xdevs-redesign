import SectionHeader from "./section-header";
import Button from "./button";

const OpenSource = () => {
  return (
    <div className="flex justify-center items-center mx-auto flex-col max-w-6xl">
      <SectionHeader
        title="Contribute to our open source repos"
        description="Explore, fork, and contribute to our open source projects — the best way to learn is by doing."
      />
      <div className="flex gap-6">
        {/* First Project */}
        <div className="flex p-[1px] bg-gradient-to-b from-[#303539] to-[#0A0B10] rounded-3xl">
          <div className="flex flex-col bg-black rounded-3xl p-11">
            <div></div>
            <div className="flex flex-col w-60">
              <span className="text-xl font-medium text-white">
                Mobile-magic
              </span>
              <span className="text-sm text-neutral-500 mt-3">
                Mobile-magic is an agent that builds, edits, and deploys
                beautiful, high-performance,from simple prompts.
              </span>
              <Button varient="outlined" className="mt-8">
                Explore
              </Button>
            </div>
          </div>
        </div>
        {/* Second Project */}
        <div className="flex p-[1px] bg-gradient-to-b from-[#303539] to-[#0A0B10] rounded-3xl">
          <div className="flex flex-col bg-black rounded-3xl p-11">
            <div></div>
            <div className="flex flex-col w-60">
              <span className="text-xl font-medium text-white">Photo AI</span>
              <span className="text-sm text-neutral-500 mt-3">
                100xPhoto is a powerful AI image that lets you generate stunning
                images and train custom AI models.
              </span>
              <Button varient="outlined" className="mt-8">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
