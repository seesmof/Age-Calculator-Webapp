"use client";

import { useRef, useState } from "react";
import AgeOutput from "./AgeOutput";

const InputForm = () => {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const [isAge, setIsAge] = useState(false);
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const handleAge = () => {
    const [day, month, year] = [
      dayRef.current.value.replace("0", ""),
      monthRef.current.value.replace("0", ""),
      yearRef.current.value,
    ];
    const today = new Date();
    const years = today.getFullYear() - year;
    const months = today.getMonth() - month;
    const days = today.getDate() - day;

    setYears(years);
    setMonths(months);
    setDays(days);

    setIsAge(true);
  };

  return (
    <>
      <form className="grid grid-cols-3 gap-3">
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
            required
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
            required
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
            required
          />
        </div>
      </form>

      <div className="relative w-full flex flex-col items-center justify-center py-6">
        <div className="h-[2px] absolute z-10 bg-neutral-200 w-full"></div>
        <button className="bg-violet-600 z-20 self-center rounded-full p-5">
          <img
            src="/assets/images/icon-arrow.svg"
            alt=""
            className="w-8 h-8"
            onClick={() => handleAge()}
          />
        </button>
      </div>

      {isAge && <AgeOutput days={days} months={months} years={years} />}
    </>
  );
};

export default InputForm;
