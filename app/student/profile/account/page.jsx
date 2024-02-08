"use client";

import { credentialInfo, emailRegex, passwordRegex } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";

const Account = () => {
  // get img url from backend db
  let imgUrl = "";

  // get email from backend db
  let dbEmail = "jhondoe@gmail.com";

  // password for testing purpose
  let password = "password";

  // state to manage user input data
  const [values, setValues] = useState({
    email: dbEmail,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  console.log(values)

  // Function to handle input changes
  const handleInput = (e, value) => {
    setValues((prev) => ({ ...prev, [value]: e.target.value }));
  };

  // State for managing validation errors
  const [error, setError] = useState({});

  // Validation messages object
  const validationMsg = {};

  const updateCredentials = () => {
    // Validation for email
    if (!values.email.trim()) {
      validationMsg.email = "Email is required";
    } else if (!emailRegex.pattern.test(values.email)) {
      validationMsg.email = "Email not valid";
    }

    // Validation for current password
    if (values.currentPassword.trim() && currentPassword !== password) {
      validationMsg.currentPassword = "Incorrect password";
    }

    // Validation for new password
    if (
      values.newPassword.trim() &&
      !passwordRegex.pattern.test(values.newPassword)
    ) {
      validationMsg.newPassword =
        "Password contain a minimum of 8 characters which includes at least one number and one special character";
    }

    // Validation for confirm password
    if (values.newPassword.trim() && !values.confirmPassword.trim()) {
      validationMsg.confirmPassword = "re-enter password";
    } else if (values.confirmPassword !== values.newPassword) {
      validationMsg.confirmPassword = "Password does not match";
    }

    // Set validation errors
    setError(validationMsg);
  };

  // State to toggle password visibility
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = (id) => {
    setPasswordShow((prev) => ({
      ...prev,
      [id]: !prev[id] || false,
    }));
  };

  return (
    <main>
      {/* <div className="flex items-center mt-8 mb-14">
        <Image
          src={imgUrl ? imgUrl : "/assets/image/no-user.jpg"}
          alt="header image"
          height={1000}
          width={1000}
          className=" rounded-full bg-slate-400 md:w-40 md:h-40 w-24 h-24 object-cover mr-5"
        />
        <div>
          <h2 className="mt-5 font-bold md:text-[1.5rem] text-[1rem]">Jhon Doe</h2>
          <span className="md:text-[1rem] text-[.65rem]">
            Update your profile picture and personal details
          </span>
        </div>
      </div> */}
      <h2 className="border-b pb-3 font-bold md:text-[1.8rem] text-[1.3rem] mb-7 mt-3 ">
        Account information
      </h2>
      <div>
        <div className=" w-full mt-5 pb-6 border-b">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <div className=" flex-center rounded-lg bg-[#f9fef9] mt-2">
            <input
              type="text"
              id="email"
              placeholder="Enter email address"
              value={values.email}
              onChange={(e) => handleInput(e, 'email')}
              className="border border-gray-200 text-[1.2rem] bg-transparent w-full outline-none focus:border focus:border-[#2e512e] px-4 py-2 rounded-md"
            />
          </div>
          <div className="h-4">
          <small
              className={`transition-all delay-200 text-red-600 ${
                error.email ? "opacity-100" : "opacity-0"
              }`}>
              {error.email}
          </small>
          </div>
        </div>
      </div>
      <div className="pt-10">
        {credentialInfo.map((password, index) => (
          <div key={index} className=" w-full mt-0">
            <label htmlFor={password.id} className="font-bold">
              {password.label}
            </label>
            <div className=" md:text-[1rem] text-[.95rem] flex-center rounded-lg bg-[#f9fef9] mt-2">
              <label
                htmlFor={password.id}
                className="py-3 md:px-5 px-3 border border-gray-300 rounded-tl-md rounded-bl-md text-gray-400">
                {password.icon}
              </label>
              <div className="border border-gray-200 flex-between px-2 w-full py-2 rounded-tr-md rounded-br-md password">
                <input
                  type={passwordShow[password.id] ? "text" : "password"}
                  id={password.id}
                  placeholder={password.placeholder}
                  value={values[password.id]}
									onChange={(e) => handleInput(e, [password.id])}
                  className=" bg-transparent w-full outline-none border-none "
                />
                <span
                  onClick={() => togglePassword(password.id)}
                  className="cursor-pointer">
                  {passwordShow[password.id] ? (
                    <RiEyeLine />
                  ) : (
                    <RiEyeCloseLine />
                  )}
                </span>
              </div>
            </div>
            <div className="p-4">
            <small
              className={`transition-all delay-200 text-red-600 ${
                error[password.id] ? "opacity-100" : "opacity-0"
              }`}>
              {error[password.id]}
            </small>
            </div>
          </div>
        ))}
      </div>
     <div className="flex lg:justify-start justify-center">
     <button className="custom-btn2 lg:mt-10 mt-0" onClick={updateCredentials}>
        Save Changes
      </button>
     </div>
    </main>
  );
};

export default Account;
