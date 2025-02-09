import React from "react";
import {
  BsApple,
  BsFacebook,
  BsGoogle,
  BsLinkedin,
  BsMailbox,
  BsTwitterX,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <section className="bg-[purple]  text-white pb-20">
        <div className="flex md:pl-[30%] md:pr-[30%] pt-10 pb-5 justify-between p-3">
          <span className="flex">
            <BsFacebook className="m-2 " size={"30px"} color="yellow" />
            <BsTwitterX className="m-2" size={"30px"} color="yellow" />
            <BsYoutube className="m-2" size={"30px"} color="yellow" />
          </span>
          <span className="flex ">
            <BsLinkedin className="m-2" size={"30px"} color="yellow" />
            <BsApple className="m-2" size={"30px"} color="yellow" />
            <BsGoogle className="m-2" size={"30px"} color="yellow" />
          </span>
        </div>

        <hr className="" />
        <div className="text-[22px] mt-5 flex flex-col justify-center items-center p-3">
          <h1 className="sm: self-center">
            Copyright © 2024 LearnFactory.All Rights Reserved
          </h1>
          <br />
          <h1 className="">Privacy Policy</h1>
          <br />
          <h1>Terms of Use</h1>
        </div>
      </section>
    </div>
  );
};

export default Footer;
