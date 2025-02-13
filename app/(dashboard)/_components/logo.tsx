"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/search")}
      className="flex items-center gap-x-2 cursor-pointer p-2"
    >
      <Image
        height={600}
        width={600}
        alt="logo"
        src="/assets/images/logohor.png"
      />
      {/* <p className="text-xl font-bold text-blue-800">Escuela de Libertad</p> */}
    </div>
  );
};

export default Logo;
