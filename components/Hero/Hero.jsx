import Image from "next/image";

const Hero = () => {
  return (
<section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Study Online Swiftly,</span>
                <span className="block bg-gradient-to-r from-emerald-600 via-[#DAEC08F0] to-[#E31F1BE3] bg-clip-text text-transparent xl:inline">Conveniently</span>& Affordable
            </h1>
            <p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Grow with Online Design and Development Courses. <br />
               Learn from Industry Experts and Enhance Your Skills.
            </p>
            {/* <!-- Button Section --> */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <button href="#"
                        className="custom-btn">
                        Get started
                        <svg class="rtl:rotate-180 mt-1 mb-3 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                    </button>
            </div>
            {/* <!-- End of Button Section --> */}
        </div>

        {/* <!--   Image Section     --> */}
        <div className=" px-8 md:pt-20 ">
           <Image
            src="/assets/image/pana.svg"
            alt="hero-image"
            width="150"
            height="150"
        className="w-full object-cover"
          />
            
        </div>
        {/* <!--   End of Image Section     --> */}
    </div>

</section>
  );
};

export default Hero;
