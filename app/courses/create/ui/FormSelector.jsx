import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

const FormSelector = ({ options, valueSetterFunc }) => {
  const [uiOptions, setUiOptions] = useState(options);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchValue)
    );
    setUiOptions(filteredOptions);
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOptionsOpen(!isOptionsOpen);
        }}
        className="flex w-full flex-row items-center justify-between rounded-md border p-3 font-medium text-gray-500 hover:cursor-pointer"
      >
        <span>{selectedOption}</span>
        <MdPlayArrow className="rotate-90" />
      </button>
      <dialog className="relative w-full" open={isOptionsOpen}>
        <section className="flex flex-col gap-2">
          <div className="w-full px-3 pt-3">
            <input
              className="w-full rounded-md border p-3 transition-all focus:border-[2px] focus:border-gray-400 focus:outline-0"
              type="text"
              onChange={handleSearch}
            />
          </div>

          <div className="flex w-full flex-col gap-1 max-h-56 overflow-y-scroll">
            {uiOptions?.map((option) => (
              <button
                onClick={() => {
                  setSelectedOption(option);
                  valueSetterFunc(option);
                  setIsOptionsOpen(false);
                }}
                className={`w-full text-left hover:bg-primary_700 hover:text-white transition-colors p-3 ${
                  selectedOption === option ? "text-gray-800" : "text-gray-500"
                }`}
                key={option}
              >
                {option}
              </button>
            ))}
          </div>
        </section>
      </dialog>
    </>
  );
};

export default FormSelector;
