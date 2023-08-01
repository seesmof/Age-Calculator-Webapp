"use client";
import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";

const Main = () => {
  const names = [
    "Ada Lovelace",
    "Grace Hopper",
    "Alan Turing",
    "Margaret Hamilton",
  ];
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    console.log("increment like count");
    setLikes(likes + 1);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col space-y-4 p-4">
        <Header title={"Develop. Preview. Ship. 🚀"} />
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <Button onClick={handleLike}>
          Like <span className="font-medium pl-1">{likes}</span>
        </Button>

        <Button>I don't do anything</Button>
      </div>
    </>
  );
};

export default Main;
