import React from "react";

const AgeOutput = ({ years, months, days }) => {
  return (
    <>
      <div className="flex flex-col space-y-2 font-extrabold italic text-5xl">
        <div className="flex flex-row space-x-2">
          <span className="text-violet-600">{years}</span> <span>years</span>
        </div>
        <div className="flex flex-row space-x-2">
          <span className="text-violet-600">{months}</span> <span>months</span>
        </div>
        <div className="flex flex-row space-x-2">
          <span className="text-violet-600">{days}</span> <span>days</span>
        </div>
      </div>
    </>
  );
};

export default AgeOutput;
