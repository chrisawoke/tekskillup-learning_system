import { reasons } from "@/constants";
import Image from "next/image";

const Reasons = () => {
  return (
    <section className="text-center padding-x md:py-24 pt-20">
      <h2 className="font-bold lg:text-4xl md:text-2xl text-[1.35rem]">
        So many reasons to start
      </h2>
      <div className="md:mt-20 mt-10 lg:gap-[3.25rem] md:gap-[1.5rem] flex-between md:flex-row flex-col">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className=" h-fit text-center flex-center flex-col md:w-[28%] w-[60%] rounded-[0.875rem] hover:scale-105 md:mb-[1rem] mb-[3rem] hover:bg-white transition-all"
          >
            <Image
              src={reason.imgUrl}
              alt=""
              width={150}
              height={150}
              className="md:w-[4rem] w-[3rem]"
            />
            <h3 className=" font-semibold md:text-[1.3rem] text-[1rem] md:my-3 my-2">
              {reason.title}
            </h3>
            <p className=" lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.825rem]">
              {reason.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;
