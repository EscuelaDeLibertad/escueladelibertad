"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/search")}
      className="flex items-center gap-x-2 cursor-pointer h-16"
    >
      <Image
        height={1200}
        width={1200}
        alt="logo"
        src="/assets/images/logo-plataforma.webp"
      />
      {/* <p className="text-xl font-bold text-blue-800">Escuela de Libertad</p> */}
    </div>
  );
};

export default Logo;
