"use client"

import { useState, useEffect } from 'react'; 
import InputIcon from "../login/Input";
import { FaUser } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import PasswordInput from "./PasswordInput";
import InputCheckbox from "./Checkbox";


const Form = () => {

     // FORM VALIDATION
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
   
     // State for error messages
     const [errors, setErrors] = useState({
       firstName: '',
       lastName: '',
       email: '',
       password: '',
     });
   
     // Form validation logic
     const validateForm = () => {
       let valid = true;
       const newErrors = {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
       };
   
       if (firstName.trim() === '') {
         newErrors.firstName = 'First name is required';
         valid = false;
       }
   
       if (lastName.trim() === '') {
         newErrors.lastName = 'Last name is required';
         valid = false;
       }
   
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
    }, [firstName, lastName, email, password]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        // Perform form submission logic here
        console.log('Form submitted successfully');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      } else {
        console.log('Form has validation errors');
      }
    };

  return (
    <main className="px-[10rem] padding-y text-gray-500 w-[100%] mt-5 md:mt-0">
      <div>
        <h1 className="text-4xl font-bold md:text-6xl">
          Sign Up<span className="text-primary_700">!</span>
        </h1>
      <p className="mt-7 text-xl">
          Explore, learn, and grow with us. enjoy a seamless and
          <br /> enriching educational journey. lets begin!
        </p>
      </div>
      <form className="mt-10"  onSubmit={handleSubmit}>
        <div className="flex-column mt-8">
          <label className="font-semibold text-xl">First name</label>
          <InputIcon
            icon={<FaUser className="h-5 w-6 text-gray-500" />}
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={errors.firstName}
          />
        </div>
        <div className="flex-column mt-8">
          <label className="font-semibold text-xl">Last name</label>
          <InputIcon
            icon={<FaUser className="h-5 w-6 text-gray-500" />}
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={errors.lastName}
          />
        </div>
        <div className="flex-column mt-8">
          <label className="font-semibold text-xl"> Your Email</label>
          <InputIcon
            icon={<FaUser className="h-5 w-6 text-gray-500" />}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
        </div>
        <div className="flex-column mt-8">
          <label className="font-semibold text-xl">Password</label>
          <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        </div>
        <div>
          <InputCheckbox/>
        </div>
        <div className="mt-10 text-2xl">
          <button className="bg-primary_700 text-white sm:px-8 py-3 px-10 w-[100%] sm:text-base text-2xl border border-primary_700 hover:text-primary_700 hover:bg-white rounded-[7px] transition duration-150 ease-in-out cursor-pointer">Sign Up</button>
        </div>
        <div className="mt-7 text-center">
          <p className="text-lg">
            Already have an account? &nbsp; <a href="/login" className="text-blue-500 hover:text-blue-700">Log In</a> 
          </p>
        </div>
      </form>
      <div>
      <div className="flex flex-row items-center justify-center mt-7">
      <hr className="w-[25%]  border-gray-500"/>&nbsp; &nbsp;
      <p className="font-semibold text-lg">Or</p>&nbsp; &nbsp;
      <hr className="w-[25%] border-gray-500"/>
      </div>
      <div className=" flex items-center justify-center mt-5 mb-5">
          <button className="flex flex-row gap-3 justify-center items-center bg-primary_700 text-white sm:px-8 py-3 px-10 w-[100%] md:w-[50%] sm:text-base text-2xl border border-primary_700 hover:text-primary_700 hover:bg-white rounded-[7px] transition duration-150 ease-in-out cursor-pointer">
           <FaGoogle className="h-5 w-5 " /> Continue with Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default Form;
