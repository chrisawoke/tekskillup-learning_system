import React from "react";
import Hero from "./Hero";
import ContactSection from "./Section";
import Image from "next/image";

const Contact = () =>{
  return (
    <div className="">
      <Hero/>
      <div className="md:flex justify-end items-center md:py-5 hidden md:w-[100%] h-[100%]">
                <Image src="/assets/image/Frame 427320786.png" alt="Section"  width={400} height={300}/>
      </div>
      <ContactSection/>
    </div>
  )
};

export default Contact;
