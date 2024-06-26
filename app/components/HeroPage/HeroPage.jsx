"use client";
import BigButton from "../../components/BigButton";

const HeroPage = () => {
  return (
    <div className="flex relative px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] items-center h-screen justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00b2d1_100%)]"></div>
      <div className="flex flex-col gap-8 justify-center items-center text-center">
        <h1 className="title text-white font-semibold text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-[100px] max-w-[55rem] tracking-tight">
          Building digital products, brands, and{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tl from-orange-300 from-20% to-cyan-500">
            experience.
          </span>
        </h1>
        <p className="subtitle text-white/70 font-light text-base font-poppins">
          An agency based in Europe commited to evolve ideas into products.{" "}
          <br /> Meet us, the most passionate people in the industry.
        </p>
        <div className="button">
          <BigButton url="/contact">Let&apos;s connect</BigButton>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
