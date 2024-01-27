import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-width mx-auto">
        <div className="px-8 md:px-24 mt-16 md:mt-28 md:mb-16 z-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-20 md:gap-16">
            <div className="mb-24 md:mb-0">
              <p className="text-black text-4xl md:text-5xl font-extrabold leading-snug md:leading-normal text-center lg:text-left md:font-extrabold">
                Study Online Swiftly,
                <br />
                  <span className="hero__gradient_text mr-2">
                    Conveniently
                  </span>
                    &
                  <br />
                  Affordable 
                </p>
                <div className="mt-12 mb-16 lg:mt-10 lg:mb-32">
                  <p className="text-sm md:text-lg text-center lg:text-left my-3 font-semibold">
                    Grow with Online Design and Development Courses. 
                  </p>
                  <p className="text-sm md:text-lg text-center lg:text-left font-semibold">
                    Learn from Industry Experts and Enhance Your Skills.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button className="custom-btn2 flex justify-center md:justify-start items-center text-center">
                      Get Started 
                      <MdOutlineArrowOutward className="text-white ml-1" />
                  </button>
                </div>
            </div>
            <Image
              src="/assets/image/amico.svg"
              alt="hero-image"
              width="100"
              height="100"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
      <Image
        src="/assets/image/Frame 2608265.svg"
        alt="round frame image"
        width="50"
        height="50"
        className="w-[60%] md:w-2/6 absolute top-0 left-0"
      />
    </section>
  );
};

export default Hero;
