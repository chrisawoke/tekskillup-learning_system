import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const DynamicAddInput = ({ valueSetterFunc, placeholder }) => {
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState("");

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const addOption = () => {
    setOptions([...options, option]);
    valueSetterFunc([...options, option]);
    setOption("");
  };

  const deleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
    valueSetterFunc(newOptions);
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <section className="form-label-input flex w-full flex-col gap-2">
        <div className="flex w-full gap-1">
          <input
            type="text"
            name={placeholder}
            value={option}
            onChange={handleChange}
            placeholder={placeholder}
            className="h-full"
          />
          <button
            className="flex w-12 items-center justify-center rounded-md bg-primary_700 p-1 text-white transition-transform hover:scale-95 hover:bg-primary_700/80"
            onClick={addOption}
          >
            <FaPlus />
          </button>
        </div>
      </section>
      <div className="flex max-h-80 flex-col gap-6 overflow-y-scroll">
        {options.map((option, index) => (
          <div className="flex flex-col gap-2 text-gray-500" key={index}>
            <div className="flex gap-1">
              <p className="w-full rounded-md border px-3 py-1">{option}</p>
              <button
                className="flex w-8 items-center justify-center rounded-md bg-gray-500 p-1 text-white transition-transform hover:scale-95 hover:bg-gray-500/80"
                onClick={() => deleteOption(index)}
              >
                <FaMinus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicAddInput;