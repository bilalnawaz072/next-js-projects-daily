import Image from "next/image";

export default function Banner() {
  return (
    <header className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/banner.jpg" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          MOVIE NAME
        </h1>
        <div className="mt-4">
          <button className="cursor-pointer text-white bg-[#e50914] px-5 py-1.5 rounded-md font-semibold">
            Play ▶
          </button>
          <button className="cursor-pointer text-white bg-[#333] ml-3 px-5 py-1.5 rounded-md font-semibold">
            My List ▶
          </button>
        </div>
        <h1 className="mt-4 text-xs sm:text-sm lg:text-md max-w-md mx-auto text-white border border-white px-5 py-1.5 bg-[#333]">
          This is a description of the movie. This is a description of the
          movie. This is a description of the movie.
        </h1>
      </div>
    </header>
  );
}
