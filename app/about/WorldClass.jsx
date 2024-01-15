import { gains } from "@/constants";
import Image from "next/image";

const WorldClass = () => {
  return (
    <section className=" text-center flex-center flex-col py-[4rem] padding-x">
      <h2 className="mb-3 font-bold lg:text-4xl md:text-2xl text-[1.35rem]">
        World-Class Learning for Anyone, Anywhere
      </h2>
      <p className=" text-[#59595A] md:w-[65%] w-[80%] lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.825rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        nisi vel dui dignissim laoreet. Fusce eu turpis vel urna fermentum
        tincidunt. Sed id
      </p>
      <div className="mt-14 lg:gap-[3.25rem] md:gap-[1.5rem] flex-between md:flex-nowrap flex-wrap">
        {gains.map((gain, index) => (
          <div
            key={index}
            className=" h-fit box-shadow2 px-5 py-8 text-center flex-center flex-col md:w-[25%] w-[47%] rounded-[0.875rem] hover:scale-105 md:mb-0 sm:mb-[1.8rem] mb-[2.3rem] hover:bg-white transition-all">
            <Image src={gain.imgUrl} alt="" width={150} height={150} className="md:w-[3.3rem] w-[2.8rem]"/>
            <h3 className=" font-semibold md:text-[1.3rem] text-[1rem] md:my-3 my-2">
              {gain.title}
            </h3>
            <p className="md:h-[8rem] sm:h-[5rem] h-[8rem] lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.825rem]">{gain.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldClass;
