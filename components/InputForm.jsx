"use client";

import { useRef, useState } from "react";

const InputForm = () => {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const [birthDate, setBirthDate] = useState(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="day"
            className="uppercase tracking-widest text-neutral-600 font-bold"
          >
            Day
          </label>
          <input
            type="number"
            id="day"
            name="day"
            className="border px-3 py-4 accent-neutral-800 rounded-xl font-bold text-xl"
            ref={dayRef}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="Month"
            className="uppercase tracking-widest text-neutral-600 font-bold"
          >
            Month
          </label>
          <input
            type="number"
            id="Month"
            name="Month"
            className="border px-3 py-4 accent-neutral-800 rounded-xl font-bold text-xl"
            ref={monthRef}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="Year"
            className="uppercase tracking-widest text-neutral-600 font-bold"
          >
            Year
          </label>
          <input
            type="number"
            id="Year"
            name="Year"
            className="border px-3 py-4 accent-neutral-800 rounded-xl font-bold text-xl"
            ref={yearRef}
          />
        </div>
      </div>

      <div className="relative self-center py-4">
        <button className="bg-violet-600 rounded-full p-5">
          <img
            src="/assets/images/icon-arrow.svg"
            alt=""
            className="w-10 h-10"
            onClick={() => {
              window.alert(
                dayRef.current.value +
                  "/" +
                  monthRef.current.value +
                  "/" +
                  yearRef.current.value
              );
            }}
          />
        </button>
      </div>
    </>
  );
};

export default InputForm;
