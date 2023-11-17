import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black flex items-center p-5 h-20">
      <Image
        src="/netflix.png"
        width={100}
        height={100}
        objectFit="contain"
        className="cursor-pointer"
      />
    </header>
  );
}
