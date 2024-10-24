import { useState } from "react";
import MiniImage from "./MiniImage";
export default function Input({
  variant,
  label,
  type,
  name,
  isActive,
  setIsActive,
}) {
  const [activeInput, setActiveInput] = useState(null); // Track active input

  // Function to set the clicked input as active
  const handleFocus = (inputName) => {
    setActiveInput(inputName);
  };

  return (
    <div>
      {variant ? (
        <div
          onClick={() => handleFocus(name)}
          className={`flex flex-col gap-2 transform duration-200 ${
            activeInput === name
              ? "border-gray-500 border-b-[3px] animate-borderChange"
              : "border-gray-400 border-b-2"
          }`}
        >
          <label htmlFor={name}>{label}</label>
          <div className="flex justify-start gap-2 items-center">
            <MiniImage alt="userIcon" src="/icons/userIcon.svg" />
            <input
              type={type}
              name={name}
              className="text-black p-1 outline-none"
              required
              onFocus={() => handleFocus(name)} // Mark input as active when focused
            />
          </div>
        </div>
      ) : (
        <div
          onClick={() => handleFocus(name)}
          className={`flex flex-col gap-2 transform duration-200 ${
            activeInput === name
              ? "border-gray-500 border-b-[3px] animate-borderChange"
              : "border-gray-400 border-b-2"
          }`}
        >
          <label htmlFor={name}>{label}</label>
          <div className="flex justify-start gap-2 items-center">
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              {isActive ? (
                <MiniImage alt="eyeOpen" src="icons/visibility02.svg" />
              ) : (
                <MiniImage alt="eyeOpen" src="icons/visibility01.svg" />
              )}
            </div>
            <input
              type={type}
              name={name}
              id={name}
              className="text-black p-2 outline-none"
              required
              onFocus={() => handleFocus(name)} // Mark input as active when focused
            />
          </div>
        </div>
      )}
    </div>
  );
}
