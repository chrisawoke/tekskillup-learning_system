"use client"

import { useState} from 'react'; 
import { IoEye, IoEyeOff } from 'react-icons/io5';
import InputIcon from "../login/Input";
import { IoKeySharp } from 'react-icons/io5';


const PasswordInput = ({ value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <InputIcon
            icon={<IoKeySharp className="h-6 w-7 text-gray-500" />}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your valid password"
            value={value}
            onChange={onChange}
          /> 
      <div
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-4"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <IoEye className="h-5 w-6 text-gray-500" /> : <IoEyeOff className="h-6 w-6 text-gray-500" />}
      </div>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default PasswordInput;
