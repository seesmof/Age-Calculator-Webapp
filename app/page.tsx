"use client";
import { useRef, useState } from "react";

export default function Home() {
  const inDay = useRef<HTMLInputElement>(null);
  const inMonth = useRef<HTMLInputElement>(null);
  const inYear = useRef<HTMLInputElement>(null);

  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [ageDays, setAgeDays] = useState("");

  const calculateAge = () => {
    const thisDay = new Date().getDate();
    const thisMonth = new Date().getMonth() + 1;
    const thisYear = new Date().getFullYear();

    const inDayValue: number = parseInt(inDay.current!.value.replace("0", ""));
    const inMonthValue: number = parseInt(
      inMonth.current!.value.replace("0", "")
    );
    const inYearValue: number = parseInt(inYear.current!.value);

    let yearsDiff = thisYear - inYearValue;
    let monthsDiff = thisMonth - inMonthValue;
    let daysDiff = thisDay - inDayValue;

    if (daysDiff < 0) {
      monthsDiff -= 1;
      daysDiff += 30;
    }

    if (monthsDiff < 0) {
      yearsDiff -= 1;
      monthsDiff += 12;
    }

    const ageYears = yearsDiff.toString();
    const ageMonths = monthsDiff.toString();
    const ageDays = daysDiff.toString();

    setAgeYears(ageYears);
    setAgeMonths(ageMonths);
    setAgeDays(ageDays);
  };

  return (
    <>
      <div className="flex bg-[#f0f0f0] min-h-screen p-4 items-center justify-center">
        <div className="bg-white font-bold p-5 flex flex-col rounded-md w-full">
          <div className="grid w-full grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="day" className="uppercase tracking-widest">
                day
              </label>
              <input
                placeholder="DD"
                required
                type="text"
                id="day"
                ref={inDay}
                value="21"
                className="rounded-md p-4 border-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="month" className="uppercase tracking-widest">
                month
              </label>
              <input
                type="text"
                id="month"
                ref={inMonth}
                value="09"
                className="rounded-md p-4 border-2"
                placeholder="MM"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="year" className="uppercase tracking-widest">
                year
              </label>
              <input
                type="text"
                id="year"
                ref={inYear}
                value="2005"
                className="rounded-md p-4 border-2"
                placeholder="YYYY"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-center relative py-6">
            <div className="h-[2px] bg-slate-500 w-full"></div>
            <button
              className="rounded-full p-4 bg-violet-600"
              onClick={calculateAge}
            >
              <img src="/icon-arrow.svg" alt="" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="italic text-6xl">
              <span className="text-violet-600 mr-2">
                {ageYears ? ageYears : "--"}
              </span>
              years
            </h2>
            <h2 className="italic text-6xl">
              <span className="text-violet-600 mr-2">
                {ageMonths ? ageMonths : "--"}
              </span>
              months
            </h2>
            <h2 className="italic text-6xl">
              <span className="text-violet-600 mr-2">
                {ageDays ? ageDays : "--"}
              </span>
              days
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
