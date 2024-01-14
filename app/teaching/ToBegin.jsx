"use client";

import { toBeginItems } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const ToBegin = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndices, setActiveIndices] = useState([]);

  const mobileHeadingClick = (index) => {
    setActiveIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        // If the index is already in the active indices, remove it
        return prevIndices.filter((i) => i !== index);
      } else {
        // If the index is not in the active indices, add it
        return [...prevIndices, index];
      }
    });
 };

  const desktopHeadingClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="flex-center flex-col padding-x py-16">
      <h2 className="font-bold lg:text-4xl md:text-2xl text-[1.35rem]">
        How to Begin
      </h2>

      {/* desktop navigation */}
      <div className=" md:flex justify-center items-center hidden border-b border-gray-300 gap-20 mt-20 w-fit">
        {toBeginItems.map((item, index) => (
          <h3
            key={index}
            className={` font-bold border-b border-transparent ${
              index === activeIndex
                ? "border-black text-black pointer-events-none"
                : ""
            } text-gray-600 hover:text-black hover:cursor-pointer transition-all`}
            onClick={() => desktopHeadingClick(index)}>
            {item.heading}
          </h3>
        ))}
      </div>

      {/* mobile navigation and body  */}
      <div className="border-b md:border-transparent border-gray-300 w-full mt-10">
        {toBeginItems.map((item, index) => (
          <div key={index} className="w-full hover:cursor-pointer transition-all" onClick={() => mobileHeadingClick(index)} >
            <div className="md:hidden justify-between items-center flex border-t border-gray-300 py-3">
              <h3
                className=" font-bold text-black">
                {item.heading}
              </h3>
              <FaAngleDown
                size={13}
                className={`transition-transform duration-300 transform ${
                  activeIndices.includes(index) ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* body/content (desktop) */}
            <div
              className={`md:${index === activeIndex ? "flex" : "hidden"} hidden justify-center items-center h-[18rem] md:gap-16 lg:px-20 md:px-0`}
             >
              <div className="md:w-[40%] w-full">
                <p className="lg:text-base md:text-[.78rem]">{item.detail1a}</p>
                <p className="lg:text-base md:text-[.78rem] mt-2">{item.detail1b}</p>
                <h4 className="font-bold my-4 lg:text-lg md:text-[.88rem] ">How we help you</h4>
                <p className="lg:text-base md:text-[.78rem]">{item.detail2}</p>
              </div>
              <div className=" md:w-[30%] w-full h-full flex-center">
                <Image
                  src={item.imgUrl}
                  alt=""
                  width={450}
                  height={450}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>

            {/* body/content (mobile) */}
            <div
              className={` md:hidden ${activeIndices.includes(index) ? "flex" : "hidden"} justify-center items-center flex-col-reverse h-fit md:p-16 py-4 md:px-32 px-0`}
              >
              <div className=" w-full">
                <p className=" ml-5 sm:text-[0.9rem] text-[0.8rem]">{item.detail1a}</p>
                <p className=" ml-5 sm:text-[0.9rem] text-[0.8rem]">{item.detail1b}</p>
                <h4 className="font-bold my-4 sm:[1rem] text-[.88rem] ">How we help you</h4>
                <p className="ml-5 sm:text-[0.9rem] text-[0.8rem]">{item.detail2}</p>
              </div>
              <div className=" w-[50%] mb-10 h-full flex-center">
                <Image
                  src={item.imgUrl}
                  alt=""
                  width={450}
                  height={450}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToBegin;
