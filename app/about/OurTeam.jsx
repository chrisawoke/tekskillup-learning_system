"use client";

import { teamMembers, teamSocialIcons } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const OurTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section className="text-center padding-x md:py-20 py-5">
      <h2 className="mb-3 font-bold md:text-4xl text-[0.8125rem]">Our Leadership Teams</h2>
      <p className=" text-[#59595A] md:text-xl text-[0.4375rem] md:leading-[1.875rem]">
        With over 100 years or combined experience, we&apos;ve got a well-seasoned
        team at the helm.
      </p>
      <div className="flex-between md:gap-[2.5rem] md:mt-32 mt-20 md:flex-nowrap flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative md:w-[25%] w-[47%] mb-[5rem] bg-white"
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}>
            <div
              className="w-full md:h-[16rem] h-[9rem] flex-center"
              style={{ backgroundColor: member.backgroundColor }}>
              <Image
                src={member.imgUrl}
                alt={member.imgAlt}
                width={500}
                height={500}
                className=" relative md:-top-10 -top-6 md:h-[21rem] h-[12rem] object-cover"
              />
            </div>
            <h3 className="font-bold md:text-lg text-[0.45431rem] md:mt-5 mt-2">{member.name}</h3>
            <p className="md:text-[0.85rem] text-[0.30288rem] font-semibold">{member.position}</p>
            
            <div
              className="absolute md:-top-20 -top-12 flex-center flex-col text-center bg-[rgba(0,0,0,0.6)] w-[100%] md:h-[26rem] h-[14rem] px-5 text-white"
              style={{
                opacity: hoveredMember === index ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}>
              <p className="md:text-base text-[0.5rem]">{member.bio}</p>
              <div className="flex-center gap-2 mt-8">
                {teamSocialIcons.map((icon) => (
                  <div key={icon.key} className=" rounded-full md:scale-95 scale-75 md:p-2 p-[5px] hover:cursor-pointer md:hover:scale-110 hover:scale-90 transition-all"
                  style={{ backgroundColor: member.backgroundColor }}>
                   <a href={member.socials[icon.key]} >
                      {icon.icon}
                    </a> 
                  </div>
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
