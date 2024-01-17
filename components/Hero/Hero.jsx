import Image from "next/image";

const Hero = () => {
  return (
    <section className="md:px-0 mb-24 md:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16">
        <div className="pr-20 pl-0 pb-6 lg:pb-48 relative">
          <div className="pt-4 ml-10 md:pt-12">
            <p className="text-black text-4xl -ml-5 hero__title md:text-5xl font-semibold leading-tight text-center md:text-left">
              Study Online Swiftly,
              <span className="hero__gradient_text">
                Conveniently
              </span>
                <br />&
              Affordable
            </p>
            <div className="my-6 md:my-12 lg:my-8">
              <p className="text-sm md:text-lg text-center md:text-left">
                Grow with Online Design and Development Courses. <br />
                Learn from Industry Experts and Enhance Your Skills.
              </p>
            </div>
            <div className="">
              <button className="custom-btn flex text-center ">Get Started 
              <svg class="rtl:rotate-180 mt-1 mb-3 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
              </button>
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
