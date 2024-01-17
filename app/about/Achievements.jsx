import { achievements } from "@/constants";
import Image from "next/image";

const Achievements = () => {
  return (
    <section className=" padding-x">
      <div className=" bg-[#3582720b] flex-center flex-col md:p-[2.8rem] px-2 py-[2rem]">
        <h2 className="mb-3 text-center font-bold lg:text-4xl md:text-2xl text-[1.35rem]">Achievements</h2>
        <p className="text-center text-[#59595A] md:w-[65%] w-[80%] lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.825rem]">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements.
        </p>
        <div className="flex-between flex-wrap md:mt-20 mt-10">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className=" h-fit lg:p-[2.5rem] px-[1rem] py-[1.5rem] w-[48.5%] md:mb-[2rem] mb-[1rem] rounded-[0.875rem] hover:scale-105 transition-all bg-white">
              <Image src={achievement.imgUrl} alt="" width={70} height={70} className="md:w-[2.8rem] w-[2.3rem]"/>
              <h3 className=" md:h-fit h-[2.8rem] lg:text-xl sm:text-[1.1rem] text-base lg:my-4 my-[.65rem]">{achievement.title}</h3>
              <p className=" md:h-fit h-[9.5rem] lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.8rem] text-[#59595A]">{achievement.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
