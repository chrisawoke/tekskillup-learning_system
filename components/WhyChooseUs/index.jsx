import Image from 'next/image'
import featuresData from "./WhyChooseUs";
import SingleFeature from "./SingleFeature";
import { mockData } from '@/constants';

const Feature = () => {
  return (
      <section className="pt-16 md:pt-32">
        <div className="px-8 md:px-24 flex flex-col lg:flex-row gap-16 lg:gap-44 w-full">
          <div className="lg:w-1/2">
            <Image
                src="/assets/image/student.svg"
                alt="student image"
                width="600"
                height="500"
                className='w-full object-cover'
            />
          </div>
          <article className="lg:w-1/2">
            <h2 className="font-bold text-3xl text-center md:text-start md:text-4xl leading-snug mb-4 md:mb-2">Benefit from our online learning expert</h2>
            {mockData.map(({id, src, title, content}) =>(
              <div key={id} className='padding-y flex'>
                  <Image
                    src={src}
                    alt="student image"
                    width="20"
                    height="20"
                    className="-mt-10"
                  />
                <div className="ml-4">
                  <p className="text-base font-semibold pb-2">{title}</p>
                  <p className="text-sm md:text-base">{content}</p>
                  <p className="text-sm md:text-base">{content}</p>
                </div>
              </div>
            ))}
          </article>
        </div>
        <div className="mx-auto px-8 md:px-24 pt-8 md:pt-12">
          <h2 className="text-4xl lg:text-[3rem] md:pt-0 my-10 font-extrabold text-center text-gray-900 md:text-5xl">
            Why Choose Us?
          </h2>
          <div className="flex-center pb-6 md:pb-10">
              <p class="md:max-w-4xl text-center md:px-0 text-black text-opacity-80 md:text-xl font-normal leading-snug">Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
          </div>

            <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:my-15 lg:grid-cols-3 xl:my-20 pb-8 md:pb-16 px">
              {featuresData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
            </div>
        </div>
        <div className="bg-teal-800 bg-opacity-5 dark:bg-gray-900 w-full h-16"></div>
      </section>
  );
};

export default Feature;
