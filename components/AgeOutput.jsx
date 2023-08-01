import React from "react";

const AgeOutput = ({ years, months, days, ...rest }) => {
  return (
    <>
      <div className="flex flex-col space-y-1 font-bold italic text-2xl">
        {...rest}
      </div>
    </>
  );
};

export default AgeOutput;
