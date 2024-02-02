import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative w-full flex flex-col min-h-72 lg:min-h-[22rem] 2xl:min-h-[30rem]">
      {/* Background image for mobile using Next.js Image component */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/mobile-hero-bg.svg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          priority
        />
      </div>
      {/* <div className="hidden lg:block lg:absolute lg:z-10 lg:w-80 lg:h-80 lg:top-12 lg:left-[42rem] xl:left-[56rem]">
        <Image
          src="/main-hero.svg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image"
        />
      </div>
      <div className="hidden lg:block lg:absolute lg:w-80 lg:h-80 lg:bg-sky-500 lg:top-[2.6rem] lg:left-[43rem] xl:left-[57rem]" />
      <div className="hidden lg:block lg:absolute lg:w-80 lg:h-80 lg:bg-sky-500 lg:top-[2.2rem] lg:left-[43rem] xl:left-[57rem]" /> */}
      <div className="grid grid-cols-[auto_1fr] w-full">
        <div className="z-10 flex flex-col gap-4 absolute h-full items-start justify-end px-12 pb-2 lg:pb-8 lg:px-28 xl:px-44 2xl:px-80">
          <h1 className="font-black text-3xl sm:text-4xl xl:text-5xl">
            Taking action today for a brighter, more promising tomorrow.
          </h1>
          <h2 className="text-lg sm:text-xl xl:text-2xl">
            Our <span className="font-semibold">objective</span> is to{" "}
            <span className="font-semibold">serve mankind</span> and{" "}
            <span className="font-semibold">protect humanity</span>.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
