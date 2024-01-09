import { achievements } from "@/constants";
import Image from "next/image";

const Achievements = () => {
  return (
    <section className="padding-x">
      <div className=" bg-[#3582720b] md:p-[2.8rem] px-2 py-[2rem]">
        <h2 className="mb-3 text-center font-bold md:text-4xl text-[0.8125rem]">Achievements</h2>
        <p className="text-center text-[#59595A] md:text-xl text-[0.4375rem] md:leading-[1.875rem]">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements.
        </p>
        <div className="flex-between flex-wrap md:mt-20 mt-10">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="md:p-[2.5rem] p-[1rem] pb-0 w-[48.5%] mb-[2rem] rounded-[0.875rem] hover:scale-105 transition-all bg-white">
              <Image src={achievement.imgUrl} alt="" width={70} height={70} className="md:w-[15%] w-[20%]"/>
              <h3 className=" md:text-xl text-[0.5rem] md:my-5 my-2">{achievement.title}</h3>
              <p className="h-[5rem] md:text-base text-[0.45rem] text-[#59595A]">{achievement.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
