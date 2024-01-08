import { gains } from "@/constants";
import Image from "next/image";

const WorldClass = () => {
  return (
    <section className=" text-center py-[4rem] padding-x">
      <h2 className="mb-3 font-bold md:text-4xl text-[0.8125rem]">
        World-Class Learning for Anyone, Anywhere
      </h2>
      <p className=" text-[#59595A]  md:text-xl text-[0.4375rem] md:leading-[1.875rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        nisi vel dui dignissim laoreet. Fusce eu turpis vel urna fermentum
        tincidunt. Sed id
      </p>
      <div className="mt-16 md:gap-[3.25rem] flex-between md:flex-nowrap flex-wrap">
        {gains.map((gain, index) => (
          <div
            key={index}
            className="text-center flex-center flex-col p-0 md:w-[25%] w-[48%] rounded-[0.875rem] hover:scale-105 md:mb-0 mb-[.5rem] hover:bg-white transition-all">
            <Image src={gain.imgUrl} alt="" width={150} height={150} className="w-[40%]"/>
            <h3 className=" font-semibold md:text-[1.875rem] text-[1.06869rem] md:my-5 my-2">
              {gain.title}
            </h3>
            <p className="md:h-[13rem] h-[5rem] md:text-[1.25rem] text-[0.5rem]">{gain.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldClass;
