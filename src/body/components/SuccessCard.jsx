import React from "react";
import { useNavigate } from "react-router-dom";
const SuccessCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center items-center h-[60%]">
        <div className=" sm: py-16 sm: h-[65%] sm: overflow-hidden flex flex-col justify-center items-center rounded-xl w-[60%] m-8 py-20  bg-[purple] h-full">
          <span className="sm:p-5 bg-[#fd3c1d] p-10 rounded-[50%] m-2">
            <p className="text-white">✔</p>
          </span>
          <h1 className="text-white m-2 text-lg">Sucesss</h1>
          <p className="text-gray-200 text-center font-light">
            Congratulations, you have completed your application <br />
            Kindly check your email for more details
          </p>
          <button
            onClick={handleClick}
            className="sm: px-12 bg-[#fd3c1d] px-32 py-3 rounded m-8 text-white"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessCard;
