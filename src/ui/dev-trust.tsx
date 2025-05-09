import Image from "next/image";
import { Star } from "lucide-react";

type DevType = string;

const Dev: DevType[] = ["dev1.svg", "dev2.svg", "dev3.svg", "dev4.svg"];

const DevTrust = () => {
  return (
    <div className="mt-8 flex items-center gap-4">
      <div className="relative flex">
        {Dev.map((dev, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-full"
            style={{ marginLeft: idx > 0 ? "-15px" : "0" }}
          >
            <Image
              src={dev || "/placeholder.svg"}
              width={52}
              height={52}
              alt="Images of developers"
              className="rounded-full"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-medium text-white">
          Trusted by 10K+ developers.
        </h3>
        <div className="flex gap-1">
          <Star fill="yellow" strokeWidth={0} size={22} />
          <Star fill="yellow" strokeWidth={0} size={22} />
          <Star fill="yellow" strokeWidth={0} size={22} />
          <Star fill="yellow" strokeWidth={0} size={22} />
          <Star fill="yellow" strokeWidth={0} size={22} />
        </div>
      </div>
    </div>
  );
};

export default DevTrust;
