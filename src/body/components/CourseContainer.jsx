import React from "react";
import backdrop from "../../assets/de.jpg";
import Logo from "../../assets/Logo.jpg";
const CourseContainer = ({
  courseTitle,
  image,
  paragraph1,
  paragraph2,
  paragraph3,
}) => {
  return (
    <div className="bg-[purple] p-5 m-2 flex flex-col">
      <div className="sm: w-[90%] sm:py-1 md: flex justify-center self-center items-center rounded-lg bg-white w-[40%]">
        <img src={Logo} alt="" className="sm: w-16" />
        <h1 className="sm: text-[17px] md:text-[20px] text-[#fd3c1d] font-semibold m-3 ">
          {courseTitle}
        </h1>
      </div>
      <div
        className=" flex  justify-center items-center m-4 p-4"
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sm: flex sm: flex-col sm: p-1 md:grid grid-cols-2  bg-white rounded-lg p-4 overflow-hidden">
          <div className="sm: w-2/3 ">
            <p className="sm: text-[10px] sm: line sm: m-0  md:font-medium md:text-[17px] m-2 text-justify">
              {paragraph1}
            </p>
            <p className="sm: text-[10px] sm: text-wrap sm: m-0  font-medium md:text-[17px] m-2 text-justify">
              {paragraph2}
            </p>
            <p className="sm: text-[10px] sm: text-wrap sm: m-0  font-medium md:text-[17px] m-2 text-justify">
              {paragraph3}
            </p>
          </div>
          <img src={image} alt="" className="md:h-full w-full rounded" />
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
