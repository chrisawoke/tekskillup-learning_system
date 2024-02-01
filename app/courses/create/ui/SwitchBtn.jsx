"use client";

import { useState } from "react";

const SwitchBtn = (valueSetterFunc) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <label
      htmlFor="check"
      className={`relative cursor-pointer h-6 rounded-full transition-colors w-12 p-1 flex items-center ${
        isToggled ? "bg-primary_700" : "bg-gray-300"
      }`}
    >
      <input
        type="checkbox"
        id="check"
        className="peer sr-only"
        checked={isToggled}
        onChange={toggle}
      />
      <span className="absolute left-1 h-4/5 w-2/5 rounded-full bg-gray-100 transition-all peer-checked:left-[55%]"></span>
    </label>
  );
};

export default SwitchBtn;
