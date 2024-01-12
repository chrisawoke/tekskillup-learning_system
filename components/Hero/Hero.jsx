import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-width md:px-12 mx-auto mb-24 md:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16">
        <div className="px-8 pb-6 lg:pb-48 relative">
          <div className="pt-4 md:pt-12">
            <p className="text-black text-4xl hero__title md:text-5xl font-semibold leading-tight text-center md:text-left">
              Study Online Swiftly
              <span className="hero__gradient_text">
                Conveniently <br />
              </span>
              & Affordable
            </p>
            <div className="my-6 md:my-12 lg:my-8">
              <p className="text-sm md:text-lg text-center md:text-left w-96 text-neutral-800 font-normal leading-normal">
                Grow with Online Design and Development Courses. <br />
                Learn from Industry Experts and Enhance Your Skills.
              </p>
            </div>
            <div className="">
              <button className="custom-btn">Get Started</button>
            </div>
          </div>
        </div>
        <div className="px-8 md:pt-20">
          <Image
            src="/assets/image/pana.svg"
            alt="hero-image"
            width="100"
            height="100"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
