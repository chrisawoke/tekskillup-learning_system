import React from "react";
import Form from "./LoginForm";
import Image from "next/image";

const Login = () => {
  return(
    <div className="md:flex flex-row md:w-[100%] md:padding-y md:px-20 mt-10">
       <div className="px-8 md:pt-20 md:w-[40%] md:mt-20 md:fixed">
          <Image
            src="/assets/image/pana.svg"
            alt="hero-image"
            width="100"
            height="100"
            className="w-full object-cover"
          />
        </div>
        <div className="md:w-[100%] md:pl-[40%]">
           <Form/>
        </div>
    </div>
  );
};

export default Login;
