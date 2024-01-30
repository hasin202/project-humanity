import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative w-full flex flex-col min-h-72 lg:bg-none">
      {/* Background image for mobile */}
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center lg:hidden bg-[url('/mobile-hero-bg.svg')]"></div>

      {/* Text container with padding */}
      <div className="z-10 flex flex-col gap-4 absolute h-full items-start justify-end px-12 pb-2">
        <h1 className="font-black text-3xl">
          Taking action today for a brighter, more promising tomorrow.
        </h1>
        <h2 className="text-lg">
          Our <span className="font-semibold">objective</span> is to{" "}
          <span className="font-semibold">serve mankind</span> and{" "}
          <span className="font-semibold">protect humanity</span>.
        </h2>
      </div>
    </div>
  );
};

export default HeroBanner;
