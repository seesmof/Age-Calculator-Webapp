"use client";

import { useRef, useState } from "react";
import AgeOutput from "./AgeOutput";

const Card = () => {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);
  const [isAge, setIsAge] = useState(false);

  const handleAge = () => {
    const [day, month, year] = [
      dayRef.current.value.replace("0", ""),
      monthRef.current.value.replace("0", ""),
      yearRef.current.value,
    ];
    const today = new Date();

    const birthDate = new Date(`${year}-${month}-${day}`);
    const timeDiff = today.getTime() - birthDate.getTime();

    if (timeDiff < 0) {
      console.error("Invalid birth date");
      return;
    }

    const ageDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    const ageYears = Math.floor(ageDays / 365);
    const remainingDays = ageDays % 365;
    const ageMonths = Math.floor(remainingDays / 31);
    const remainingDaysInMonth = remainingDays % 31;

    setYears(ageYears);
    setMonths(ageMonths);
    setDays(remainingDaysInMonth);

    setIsAge(true);
  };

  return (
    <>
      <div className="flex rounded-3xl rounded-br-[7rem] bg-white text-black flex-col max-w-2xl py-10 p-6">
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
              className="inputField"
              ref={dayRef}
              required
              placeholder="24"
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
              className="inputField"
              ref={monthRef}
              required
              placeholder="09"
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
              className="inputField"
              ref={yearRef}
              required
              placeholder="1984"
            />
          </div>
        </form>
        <div className="relative w-full flex flex-col items-center justify-center py-6">
          <div className="h-[2px] absolute z-10 bg-neutral-200 w-full"></div>
          <button className="bg-violet-600 z-20 self-center md:self-end rounded-full p-5">
            <img
              src="/assets/images/icon-arrow.svg"
              alt=""
              className="w-8 h-8"
              onClick={() => handleAge()}
            />
          </button>
        </div>
        {isAge && <AgeOutput days={days} months={months} years={years} />}{" "}
      </div>
    </>
  );
};

export default Card;
