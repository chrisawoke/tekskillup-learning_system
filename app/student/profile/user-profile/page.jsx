"use client";

import Image from "next/image";
import { useState } from "react";
import { FaUpload } from "react-icons/fa6";
import { BiSolidUser } from "react-icons/bi";
import { profileName, socialInfo } from "@/constants";

const UserProfile = () => {
  const [userImg, setUserImg] = useState("");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    biography: "",
    twitterLink: "",
    facebookLink: "",
    linkedinLink: "",
  });

  console.log(values);

  // State for managing validation errors
  const [error, setError] = useState({});

  // Validation messages object
  const validationMsg = {};

  // Function to handle input changes
  const handleInput = (e, value) => {
    setValues((prev) => ({ ...prev, [value]: e.target.value }));
  };

  const updateProfileInfo = () => {
    // Validation for first name
    if (!values.firstName.trim()) {
      validationMsg.firstName = "First name is required";
    } else if (values.firstName.length < 3) {
      validationMsg.firstName = "First name should be at least 3 characters";
    } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
      validationMsg.lastName = "fisrt name should contain only alphabetic characters";
    }

    // Validation for last name
    if (!values.lastName.trim()) {
      validationMsg.lastName = "Last name is required";
    } else if (values.lastName.length < 3) {
      validationMsg.lastName = "Last name should be at least 3 characters long";
    } else if (!/^[a-zA-Z -]+$/.test(values.lastName)) {
      validationMsg.lastName = "Last name should contain only alphabetic characters";
    }

    // Set validation errors
    setError(validationMsg);
  };

  return (
    <main>
      <div className="flex-between sm:flex-row flex-col">
        <div className="sm:w-fit w-full flex justify-start items-center md:flex-row sm:flex-col flex-row">
          <Image
            src={
              userImg
                ? URL.createObjectURL(userImg)
                : "/assets/image/no-user.jpg"
            }
            alt="user's profile picture"
            width={1000}
            height={1000}
            className=" rounded-full bg-slate-400 md:w-40 md:h-40 w-24 h-24 object-cover md:mr-7 mr-4"
          />
          <div className="text-center pl-3">
            <h2 className="mt-5 font-bold md:text-[1.5rem] text-[1rem]">Jhon Doe</h2>
            <span className="md:text-[1rem] text-[.8rem]">jhondoe@mail.com</span>
          </div>
        </div>
        <div className="flex justify-end sm:w-fit w-full sm:mt-0 mt-5">
        <label
          htmlFor="profile-pic"
          className="cursor-pointer flex rounded-md sm:py-2 py-1 px-3 bg-[#e3fde3] md:text[1rem] text-[.7rem] ">
          <FaUpload className="relative top-[3px] mr-2" />
          Upload photo
          <input
            type="file"
            id="profile-pic"
            onChange={(e) => setUserImg(e.target.files[0])}
            className=" hidden"
          />
        </label>
        </div>
      </div>
      <div className="border-b mb:pb-12 pb-10">
        <h2 className="border-b pb-3 font-bold md:text-[1.8rem] text-[1.3rem] mb-7 mt-16">
          Profle info
        </h2>
        <div className="flex-between sm:flex-row flex-col">
          {profileName.map((item, index) => (
            <div key={index} className=" sm:w-[48.5%] w-full">
              <label htmlFor={item.id} className="font-bold">
                {item.title}
              </label>
              <div className="border flex-center rounded-lg bg-[#f9fef9] mt-2">
                <label
                  htmlFor={item.id}
                  className="p-3 border border-gray-300 rounded-tl-md rounded-bl-md">
                  <BiSolidUser className=" text-gray-400" />
                </label>
                <input
                  type="text"
                  id={item.id}
                  placeholder={item.title}
                  value={values[item.id]}
                  onChange={(e) => handleInput(e, [item.id])}
                  className="border border-gray-200 bg-transparent w-full outline-none focus:border focus:border-[#2e512e] p-2 rounded-tr-md rounded-br-md"
                />
              </div>
              <div className="h-5">
              <small
                className={` transition-all delay-200 text-red-600 ${
                  error[item.id] ? "opacity-100" : "opacity-0"
                }`}>
                {error[item.id]}
              </small>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:mt-8 mt-4">
          <label htmlFor="bio" className="font-bold">
            Biography
          </label>
          <textarea
            id="bio"
            rows="6"
            placeholder=""
            value={values.biography}
            onChange={(e) => handleInput(e, "biography")}
            className="mt-2 p-3 border border-gray-300 bg-white w-full outline-none focus:border focus:border-[#2e512e] rounded-tr-md rounded-md"></textarea>
        </div>
      </div>
      <div className="md:pt-8 pt-3">
        {socialInfo.map((social, index) => (
          <div key={index} className=" w-full mt-5">
            <label htmlFor={social.id} className="font-bold">
              {social.label}
            </label>
            <div className="border flex-center rounded-lg bg-[#f9fef9] mt-2">
              <label
                htmlFor={social.id}
                className="py-3 md:px-5 px-3 border border-gray-300 rounded-tl-md rounded-bl-md text-gray-400">
                {social.icon}
              </label>
              <input
                type="text"
                id={social.id}
                placeholder={social.placeholder}
                value={values[social.id]}
                onChange={(e) => handleInput(e, [social.id])}
                className="border border-gray-200 bg-transparent w-full outline-none focus:border focus:border-[#2e512e] p-2 rounded-tr-md rounded-br-md"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex lg:justify-start justify-center">
      <button className="custom-btn2 mt-8" onClick={updateProfileInfo}>
        Save
      </button>
      </div>
    </main>
  );
};

export default UserProfile;
