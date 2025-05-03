export type SectionProps = {
  title: string;
  description?: string;
};

const SectionHeader = ({ title, description }: SectionProps) => {
  return (
    <div className="z-40 mt-60 flex w-full flex-col items-center justify-center bg-black px-5">
      <h2 className="mb-5 text-center text-3xl font-medium text-neutral-200 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mb-16 text-center text-lg text-neutral-400 sm:max-w-xl">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
