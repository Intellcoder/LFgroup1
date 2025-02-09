import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Logo from "../assets/Logo.jpg";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [isvisible, setIsvisible] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const location = useLocation();
  const toggle = ({ prev }) => {
    setIsvisible((prev) => !prev);

    console.log("clicked");
  };

  useEffect(() => {
    setIsvisible(false);
  }, [location.pathname]);
  return (
    <header className=" flex gap-4 items-center justify-between  h-[10vh] bg-[#fff7ea] px-6   rounded-[20px] border border-gray-300  md:p-2">
      <img src={Logo} alt="" className="  md: h-10 " />

      <nav className="sm: hidden md:flex gap-5 place-content-center ">
        <a
          href="/"
          className=" text-[17px] font-medium hover:bg-[#fd3c1d] p-2 rounded-lg"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-[17px] font-medium hover:bg-[#fd3c1d] p-2 rounded-lg md"
        >
          About
        </a>
        <a
          href="/courses"
          className="text-[17px] font-medium hover:bg-[#fd3c1d] p-2 rounded-lg"
        >
          All Courses
        </a>
        <a
          href="/application"
          className=" text-[17px] font-medium hover:bg-[#fd3c1d] p-2 rounded-lg"
        >
          Get Started
        </a>
      </nav>

      <button
        className="sm: hidden md:block md:bg-[#fd3c1d] text-white px-3.5 py-1.5 rounded-2xl font-medium  shadow-md  "
        onClick={() => {
          navigate("application");
        }}
      >
        Apply Now
      </button>

      <BiMenu size={"30px"} className="md:hidden" onClick={toggle} />
      <MenuBar
        isvisible={isvisible}
        toggle={toggle}
        setIsvisible={setIsvisible}
      />
    </header>
  );
};

export default Header;
