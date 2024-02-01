"use client";

import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

function WordsInput({ valueSetterFunc }) {
  const [words, setWords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setWords([...words, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    setWords(words.filter((word, i) => i !== index));
  };

  useEffect(() => {
    setInputValue("");
    valueSetterFunc(words);
  }, [words, valueSetterFunc]);

  return (
    <div className="form-label-input">
      <input
        className="w-full border-2 border-gray-300 p-2"
        type="text"
        value={inputValue}
        placeholder="Write a word then press enter"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <ul className="mt-4 flex flex-wrap gap-2">
        {words.map((word, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-1 overflow-hidden rounded-md border bg-primary_700 pl-1 text-sm text-white"
          >
            <span>{word}</span>
            <button onClick={() => handleDelete(index)}>
              <IoClose />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordsInput;
