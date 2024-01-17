import Image from "next/image";

const HomeFeatures = () => {
  return (

   <div className="-mx-4 flex flex-wrap p-8">
    <div class="relative mb-20 mx-auto max-w-5xl text-center">
            <h2
                class="text-center text-black text-[40px] font-bold leading-[60px]">
                 Why choose us
            </h2>
            <p
                class="text-center text-black text-opacity-80 text-xl font-normal leading-loose">
                Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
            </p>
        </div>
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-stone-50">
            <div className="mx-auto mb-7 inline-block">
                <Image
            src="/assets/icons/briefcase.svg"
            alt="hero-image"
            width="60"
            height="60"
            className=""
          />
            </div>
            <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Expert Instruction
                </h3>
                <p className="text-base font-medium text-body-color">Learn from industry experts who have hands-on experience in design and development.</p>
            </div>
        </div>
    </div>



    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-stone-50">
            <div className="mx-auto mb-7 inline-block"><Image
            src="/assets/icons/book-open.svg"
            alt="hero-image"
            width="60"
            height="60"
            className=""
          /></div>
            <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Flexible Learning Schedule
                </h3>
                <p className="text-base font-medium text-body-color">Fit your coursework around your existing commitments and obligations.</p>
            </div>
        </div>
    </div>



    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-stone-50">
            <div className="mx-auto mb-7 inline-block"><Image
            src="/assets/icons/aperture.svg"
            alt="hero-image"
            width="60"
            height="60"
            className=""
          /></div>
            <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Practical Projects and Assignments
                </h3>
                <p className="text-base font-medium text-body-color">Develop a portfolio showcasing your skills and abilities to potential employers.</p>
            </div>
        </div>
    </div>


    
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-stone-50">
            <div className="mx-auto mb-7 inline-block">              
            <Image
            src="/assets/icons/box.svg"
            alt="hero-image"
            width="60"
            height="60"
            className=""
          />
            </div>
            <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Interactive Learning Environment</h3>
                <p className="text-base font-medium text-body-color">Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
            </div>
        </div>
    </div>


    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-stone-50">
            <div className="mx-auto mb-7 inline-block">
                <Image
            src="/assets/icons/codepen.svg"
            alt="hero-image"
            width="60"
            height="60"
            className=""
          />
            </div>
            <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Diverse Course Offerings</h3>
                <p className="text-base font-medium text-body-color">Explore a wide range of design and development courses covering various topics.</p>
            </div>
        </div>
    </div>


    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-stone-50">
            <div className="mx-auto mb-7 inline-block">
                <Image
            src="/assets/icons/codesandbox.svg"
            alt="hero-image"
            width="60"
            height="60"
            className=""
          />
            </div>
            <div>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Updated Curriculum
                </h3>
                <p className="text-base font-medium text-body-color">Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default HomeFeatures