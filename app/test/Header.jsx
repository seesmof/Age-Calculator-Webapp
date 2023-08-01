import React from "react";

const Header = ({ title = "Default title" }) => {
  return (
    <>
      <h1 className="font-medium text-xl">{title}</h1>
    </>
  );
};

export default Header;
