"use client";

import { goals } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const OurMission = () => {
  const [hoveredGoal, setHoveredGoal] = useState(null);

  return (
    <section className=" relative">
      <div className="flex-between md:flex-row flex-col padding-x md:pt-28 pt-20  md:pb-40 pb-20 lg:gap-[2.2em] md:gap-[1.5em] gap-[1.8em]">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="lg:px-8 lg:py-10 p-6 h-fit md:w-[33%] w-full rounded-[0.875rem] box-shadow border-b-4 z-[1] relative bg-white"
            style={{
              borderColor: hoveredGoal === index ? goal.color : "transparent",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={() => setHoveredGoal(index)}
            onMouseLeave={() => setHoveredGoal(null)}
          >
            <Image
              src={goal.imgUrl}
              alt=""
              width={50}
              height={50}
              className=" md:w-[3rem] w-[2.5rem]"
            />
            <h3 className="font-bold lg:text-xl md:text-base sm:text-xl text-base lg:my-4 my-2">
              {goal.title}
            </h3>
            <p className="md:h-[14rem] h-fit lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.825rem]">
              {goal.detail}
            </p>
          </div>
        ))}
      </div>
      <Image
        src="/assets/image/bubble.svg"
        alt=""
        width={400}
        height={400}
        className="absolute left-0 md:bottom-20 bottom-8 md:w-[35%] w-[50%]"
      />
      <div className="bg-[#076A550D] w-full md:h-[8rem] h-[3rem]"></div>
    </section>
  );
};

export default OurMission;
