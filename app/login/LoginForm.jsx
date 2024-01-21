"use client"

import { useState, useEffect } from 'react'; 
import InputIcon from "./Input"
import { FaUser } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import PasswordInput from "../signup/PasswordInput";

const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        email: '',
        password: '',
      });

      // Form validation logic
     const validateForm = () => {
        let valid = true;
        const newErrors = {
          email: '',
          password: '',
        };
        
       if (email.trim() === '' || !/^\S+@\S+\.\S+$/.test(email)) {
        newErrors.email = 'Valid email is required';
        valid = false;
      }

      if (password.trim() === '' || password.length < 8) {
       newErrors.password = 'Password must be at least 8 characters long';
       valid = false;
     }
      
  
      setErrors(newErrors);
      return valid;
    };

    useEffect(() => {
    }, [email, password]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        // Perform form submission logic here
        console.log('Form submitted successfully');
        setEmail('');
        setPassword('');
      } else {
        console.log('Form has validation errors');
      }
    };

    

  return (
    <main className="padding-x padding-y text-gray-500 w-[100%] mt-5 md:mt-0">
      <div>
        <h1 className="text-4xl font-bold md:text-6xl">
          Log In<span className="text-primary_700">!</span>
        </h1>
        <p className="mt-5">
          Explore, learn, and grow with us. enjoy a seamless and
          <br /> enriching educational journey. lets begin!
        </p>
      </div>
      <form className="mt-7" onSubmit={handleSubmit}>
        <div className="flex-column ">
          <label className="font-semibold"> Your Email</label>
          <InputIcon
            icon={<FaUser className="h-4 w-5 text-gray-500" />}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
        </div>
        <div className="mt-5">
          <label className="font-semibold">Password</label>
          <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        </div>
        <div className="mt-10">
          <button className="bg-primary_700 text-white sm:px-8 py-[8px] px-10 w-[100%] sm:text-base text-[12px] border border-primary_700 hover:text-primary_700 hover:bg-white rounded-[7px] transition duration-150 ease-in-out cursor-pointer">
            Log In
          </button>
        </div>
        <div className="text-end text-[1em] text-blue-500 mt-2 hover:text-[1.1em]">
          <a href="">forgot password?</a>
        </div>
      </form>
      <div className="mt-10">
        <p className="text-[1.1em] text-center">Login as -</p>
        <div className="flex flex-col gap-2 items-center justify-center mt-5 px-10 md:flex-row">
          <button className="bg-primary_700 text-white sm:px-8 py-[8px] px-10 w-[100%] sm:text-base text-[12px] border border-primary_700 hover:text-primary_700 hover:bg-white rounded-[7px] transition duration-150 ease-in-out cursor-pointer">
            Student
          </button>
          <button className="bg-primary_700 text-white sm:px-8 py-[8px] px-10 w-[100%] sm:text-base text-[12px] border border-primary_700 hover:text-primary_700 hover:bg-white rounded-[7px] transition duration-150 ease-in-out cursor-pointer">
            Admin
          </button>
          <button className="bg-primary_700 text-white sm:px-8 py-[8px] px-10 w-[100%] sm:text-base text-[12px] border border-primary_700 hover:text-primary_700 hover:bg-white rounded-[7px] transition duration-150 ease-in-out cursor-pointer">
            Instructor
          </button>
        </div>
        <div className="mt-7 text-center">
          <p className="text-lg">
            Don&apos;t have an account? &nbsp;{" "}
            <a href="" className="text-blue-500 hover:text-[1.1em]">
              Sign Up
            </a>{" "}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center mt-7">
          <hr className="w-[25%]  border-gray-500" />
          &nbsp; &nbsp;
          <p className="font-semibold text-lg">Or</p>&nbsp; &nbsp;
          <hr className="w-[25%] border-gray-500" />
        </div>
      <div className=" flex items-center justify-center mt-5 mb-5">
          <button className="flex flex-row gap-3 justify-center items-center bg-primary_700 text-white sm:px-8 py-[8px] px-10 w-[100%] md:w-[50%] sm:text-base text-[12px] border border-primary_700 hover:text-primary_700 hover:bg-white rounded-[7px] transition duration-150 ease-in-out cursor-pointer">
           <FaGoogle className="h-5 w-5 " /> Continue with Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default Form;
