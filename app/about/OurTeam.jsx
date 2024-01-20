"use client";

import { teamMembers, teamSocialIcons } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const OurTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section className="text-center flex-center flex-col padding-x md:py-20 py-8">
      <h2 className="mb-3 font-bold lg:text-4xl md:text-2xl text-[1.35rem]">Our Leadership Teams</h2>
      <p className=" text-[#59595A] md:w-[65%] w-[80%] lg:text-base md:text-[.78rem] sm:text-[0.9rem] text-[0.825rem]">
        With over 100 years or combined experience, we&apos;ve got a well-seasoned
        team at the helm.
      </p>
      
      <div className="flex-between lg:gap-[2.5rem] md:gap-[1.5rem] sm:mt-32 mt-24 md:flex-nowrap flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative md:w-[25%] w-[47%] sm:mb-[7rem] mb-[4rem] bg-white"
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}>
            <div
              className="w-full sm:h-[13rem] h-[9rem] flex-center rounded-lg"
              style={{ backgroundColor: member.backgroundColor }}>
              <Image
                src={member.imgUrl}
                alt={member.imgAlt}
                width={500}
                height={500}
                className=" rounded-lg relative sm:-top-10 -top-6 sm:h-[18rem] h-[12rem] object-cover"
              />
            </div>
            <h3 className="font-bold lg:text-xl sm:text-[1rem] text-[.65rem] md:mt-5 mt-2">{member.name}</h3>
            <p className="lg:text-[.7rem] sm:text-[0.65rem] text-[0.5rem] font-semibold">{member.position}</p>
            
            <div
              className="absolute sm:-top-20 -top-14 flex-center flex-col text-center bg-[rgba(0,0,0,0.6)] w-[100%] sm:h-[22rem] h-[15.5rem] px-5 text-white rounded-md"
              style={{
                opacity: hoveredMember === index ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}>
              <p className="lg:text-base md:text-[.78rem] sm:text-[0.85rem] text-[0.625rem]">{member.bio}</p>
              <div className="flex-center gap-2 mt-8">
                {teamSocialIcons.map((icon) => (
                  <a href={member.socials[icon.key]} key={icon.key}>
                  <div className=" rounded-full md:scale-95 scale-75 md:p-2 p-[5px] hover:cursor-pointer md:hover:scale-110 hover:scale-90 transition-all"
                  style={{ backgroundColor: member.backgroundColor }}>
                      {icon.icon} 
                  </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
