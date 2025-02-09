import React, { useState } from "react";
import { Link } from "react-router-dom";
const MenuBar = ({ isvisible }) => {
  return (
    <div
      data-isvisible={!isvisible}
      className={`md:hidden flex flex-col  text-white text-[18px] justify-between bg-[#fd3c1d] w-[40%] 
        right-[1.2rem] h-[37%] top-[14vh] absolute rounded-b-xl rounded-br-xl rounded-lg ${
          isvisible ? "block" : "hidden"
        } transition-all-300`}
    >
      <span className="">
        <ul className=" flex flex-col justify-between h-full p-5 ">
          <li className="m-2 hover:bg-[purple] rounded-xl pl-2">
            <a href="/">Home</a>
          </li>
          <li className="m-2 hover:bg-[purple] rounded-xl pl-2">
            <Link to="/about">About</Link>
          </li>
          <li className="m-2 hover:bg-[purple] rounded-xl pl-2">
            <Link to="/courses">All Courses</Link>
          </li>
          <li className="m-2 hover:bg-[purple] rounded-xl pl-2">
            <Link to="/application">Get Started</Link>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default MenuBar;
