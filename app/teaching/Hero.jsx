import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="md:px-12 flex md:justify-between justify-center items-center md:flex-row flex-col-reverse bg-[#076A550D]">
      <div className="md:block flex-center md:flex-row flex-col md:px-0 px-[1.75rem] md:pt-0 pt-10 w-full md:w-[50%] md:bg-transparent bg-white">
        <h1 className="font-bold text-2xl lg:text-5xl lg:mb-8 md:mb-5 mb-3">
          Come teach with us Come teach with us
        </h1>
        <p className="text-sm lg:text-[20px] lg:leading-8 md:w-[80%]">
          Become an instructor and change lives - including your own
        </p>
        <div className="md:w-[45%] w-full">
          <a href="/">
            <button className="custom-btn lg:mt-8 md:mt-5 mt-3 w-full">
              Get started
            </button>
          </a>
        </div>
      </div>
      <div className="w-[70%] h-full md:w-[40%]  md:block flex-center md:flex-row flex-col">
        <Image
          src="/assets/image/team-girl.png"
          alt=""
          width={450}
          height={450}
        />
      </div>
    </section>
  );
};

export default Hero;
