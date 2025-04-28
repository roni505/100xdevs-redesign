import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="text-wh">
      <Link href="/">
        <div className="">
          <Image
            src="/logo.svg"
            width={152}
            height={40}
            alt="This is the logo icon"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
