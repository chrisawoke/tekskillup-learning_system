import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowForward } from 'react-icons/md';

const ServiceStats = () => {
  return (
    <div class="relative mx-auto md:pt-16 lg:pt-24">
            <h2 class="text-4xl pt-4 md:pt-0 my-6 md:my-10 font-extrabold text-center text-gray-900 md:text-5xl lg:text-[3rem]">Our Success</h2>
            <div className="flex-center pb-10 md:pb-16">
                <p class="md:px-24 lg:px-0 md:max-w-4xl text-center px-16 text-black text-opacity-80 md:text-xl font-normal leading-snug">Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
            </div>
            <div class="max-width px-8 grid grid-cols-2 md:grid-cols-5 md:gap-6 text-gray-500">
                <div class="py-5 md:p-6 text-center">
                    <h1 class="text-teal-600 text-[1.8rem] md:text-[2.5rem] lg:text-[3.1rem] font-bold md:font-semibold pb-4 md:pb-10 leading-0 md:leading-10">15K+</h1>
                        <p class="text-slate-950 text-opacity-80  text-sm md:text-base lg:text-xl font-normal leading-relaxed">Students</p>
                    
                </div>
                <div class="py-5 md:p-6 text-center">
                    <h1 class="text-teal-600 text-[1.8rem] md:text-[2.5rem] lg:text-[3.1rem] font-bold md:font-semibold pb-4 md:pb-10 leading-0 md:leading-10">35</h1>
                        <p class="text-slate-950 text-sm md:text-base lg:text-xl font-normal leading-relaxed">Main questions</p>
                </div>
                <div class="py-5 md:p-6 text-center">
                    <h1 class="text-teal-600 text-[1.8rem] md:text-[2.5rem] lg:text-[3.1rem] font-bold md:font-semibold pb-4 md:pb-10 leading-0 md:leading-10">75%</h1>
                        <p class="text-slate-950 text-opacity-80 text-sm md:text-base lg:text-xl font-normal leading-relaxed">Total success</p>
                </div>
            
                <div class="py-5 md:p-6 text-center">
                    <h1 class="text-teal-600 text-[1.8rem] md:text-[2.5rem] lg:text-[3.1rem] font-bold md:font-semibold pb-4 md:pb-10 leading-0 md:leading-10">16</h1>
                        <p class="text-slate-950 text-opacity-80 text-sm md:text-base lg:text-xl font-normal leading-relaxed">Years of experience</p>
                </div>
                <div class="py-5 md:p-6 text-center">
                    <h1 class="text-teal-600 text-[1.8rem] md:text-[2.5rem] lg:text-[3.1rem] font-bold md:font-semibold pb-4 md:pb-10 leading-0 md:leading-10">26</h1>
                        <p class="text-slate-950 text-opacity-80 text-sm md:text-base lg:text-xl font-normal leading-relaxed">Chief experts</p>
                </div>
        </div>
        <div className="max-width px-8 md:px-24 flex flex-col lg:flex-row my-16 md:my-24 gap-16 md:gap-44 justify-between">
            <Image
                src="/assets/image/education.svg"
                alt="hero-image"
                width="80"
                height="80"
                className="w-full lg:w-[70%] object-cover"
            />
            <div className="">
                <h2 className="text-center lg:text-start font-extrabold text-4xl pb-8">
                    What is Tekskillup?
                </h2>
                <p className='leading-[24px] md:leading-[32px] text-center lg:text-start text-base md:text-xl'>Tekskillup is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <Link href='#'
                    className='flex justify-center lg:justify-start items-center text-green_600 mt-10'
                >
                    Learn more
                    <MdOutlineArrowForward className='text-green_600 ml-2' />
                </Link>
            </div>
        </div>
        <Image
            src="/assets/image/Frame 2608265.svg"
            alt="round frame image"
            width="50"
            height="50"
            className="w-[55%] md:w-2/6 absolute bottom-0 right-0 rotate-180"
        />
        <div className="bg-teal-800 bg-opacity-5 w-full h-16"></div>
    </div>
  );
};

export default ServiceStats;
