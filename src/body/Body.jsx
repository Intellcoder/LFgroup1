import React from "react";
import c from "../assets/c.jpg";
import { useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import js from "../assets/js.jpg";
import py from "../assets/py.jpg";
import ui from "../assets/ui.jpg";
import ai from "../assets/ai.jpg";
import ani from "../assets/ani.jpg";
import cys from "../assets/cys.jpg";
import de from "../assets/de.jpg";
import fs from "../assets/fs.jpg";
import aa from "../assets/aa.jpg";
import structure from "../assets/structure.png";
import Logo from "../assets/Logo.jpg";

const Body = () => {
  const navigate = useNavigate();

  return (
    <main className="m-2">
      <section className="md:flex mt-10 mb-10 p-2 ">
        <div className="bg-white min-w-[50%]">
          <h1 className="font-black text-[40px]">
            Your <span className="text-[#fd3c1d]">Tech</span> Journey <br />{" "}
            <span className="text-purple-600">Starts Here </span>
          </h1>
          <p className="mt-4 text-grey-600 text-[20px] text-balance">
            At LearnFactory-Tech Hub, we're here to <br /> help you acquire the
            skills for your desired <br /> tech career and turn your dreams into{" "}
            <br /> reality, both online and onsite!
          </p>

          <div
            className="w-full rounded-[25px] mt-4"
            style={{
              backgroundImage: `url(${aa})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "40vh",
            }}
          >
            <button
              onClick={() => {
                navigate("/application");
              }}
              className=" border text-white text-2xl border-white bg-[#fd3c1d] rounded-xl ml-4 p-1"
            >
              Get started
            </button>
            <button
              onClick={() => navigate("/courses")}
              className="border text-2xl border-[#fd3c1d] bg-white ml-5 mr-2 mt-4 p-1 rounded-xl"
            >
              All Courses
            </button>
          </div>
        </div>
        <div className=" w-full h-full flex justify-center items-center p-2 rounded-md md: w-[50%] ">
          <img src={structure} alt="" className="w-full h-full self-center " />
        </div>
      </section>

      <section className=" gap-3 mt-10 mb-10 md:flex p-2">
        <div className="w-full">
          <img src={c} alt="" className="rounded-[24px]" />
        </div>

        <div className="">
          <h2 className="text-2xl font-bold text-[#fd3c1d]">
            About <br /> <span className="text-green-800">LEARN FACTORY</span>
          </h2>
          <p className="">
            Welcome to LearnFactory Tech Hub - your gateway to a future in
            technology excellence!
          </p>
          <p>
            At LearnFactory Tech Hub, we transcend the traditional education
            centre, evolving into a dynamic community dedicated to shaping the
            next generations of tech leaders.
          </p>
          <p>
            With edge-cutting, hands-on learning experiences, and an unwavering
            commitment to innovation, we empower individuals to thrive in the
            ever-evolving tech landscape.
          </p>
          <p>
            Join us on a journey where knowledge meets oppurtunity, and
            together, let's build a future driven by technology at Learn
            Factory-Tech Hub.
          </p>

          <button
            onClick={() => navigate("/about")}
            className="rounded-lg border border-gray-500 px-3 py-2 mt-4"
          >
            Learn More
          </button>
        </div>
      </section>
      <br />
      <br />

      <section className="flex flex-col items-center justify-center mt-10 mb-10">
        <h1 className="font-semibold text-[30px]">OUR COURSES</h1>
        <p className="text-[18px] text-center">
          Making sure that those intersted in exploring vaious Tech <br />
          can readily access all the necessary resources they need to <br />
          learn and grow.
        </p>
        <div className=" sm:text-[14px]  grid grid-cols-4 -2  gap-4 p-4  ">
          <div
            className="rounded-3xl h-fit  flex items-center justify-center text-white font-bold text-wrap"
            style={{
              backgroundImage: `url(${js})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "20vw",
            }}
          >
            JAVASCRIPT
          </div>

          <div
            className="rounded-3xl h-fit flex items-center justify-center text-white font-bold text-wrap"
            style={{
              backgroundImage: `url(${py})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "20vw",
            }}
          >
            PYTHION
          </div>

          <div
            className="rounded-3xl h-fit flex items-center justify-center text-white font-bold text-wrap"
            style={{
              backgroundImage: `url(${ui})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "20vw",
            }}
          >
            UI/UX
          </div>

          <div
            className="rounded-3xl h-fit flex items-center justify-center text-white font-bold text-wrap"
            style={{
              backgroundImage: `url(${ani})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "20vw",
            }}
          >
            ANIMATION
          </div>

          <div
            className="rounded-3xl h-fit flex items-center justify-center text-white font-bold text-wrap"
            style={{
              backgroundImage: `url(${fs})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "20vw",
            }}
          >
            FULL-STACK <br /> DEVELOPER
          </div>

          <div
            className="rounded-3xl h-fit flex items-center justify-center text-white font-bold text-wrap"
            style={{
              backgroundImage: `url(${de})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "20vw",
            }}
          >
            DATA <br /> ENGINEERING
          </div>

          <div
            className="rounded-3xl h-fit flex items-center justify-center text-white font-bold text-wrap"
            style={{
              backgroundImage: `url(${cys})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "20vw",
            }}
          >
            CYBER <br /> SECURITY
          </div>

          <div
            className="rounded-3xl h-fit flex items-center justify-center text-white font-bold text-wrap"
            style={{
              backgroundImage: `url(${ai})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "20vw",
              width: "20vw",
            }}
          >
            AI PROMPT
          </div>
        </div>
      </section>

      <section className=" mb-10 mt-10 md:flex ">
        <div className=" p-2 bg-gray-300 ">
          <h2 className="font-semibold text-2xl md: text-4xl p-2">
            Why Choose
          </h2>
          <img src={Logo} alt="" className="bg-none rounded-[0.9rem]" />
          <h1 className="font-extrabold text-3xl self-center text-center md:text-justify">
            Reimagining The SouthEast <br /> Dream
          </h1>
          <p className="text-lg font-medium ">
            This is where dreams comes to life. With our carefully crafted
            learning courses and diploma programs we will meet you where you
            are, and take you to where you want to be in your career.
          </p>
          <img src={aa} alt="" className="bg-none rounded-[30px] mt-4" />
        </div>
        <div className=" bg-[purple] p-2 ">
          <span className="mt-4 mb-6">
            <span className="flex justify-center items-center">
              <span className=" bg-white flex justify-center p-2 rounded-[20px] m-2">
                <MdLocationPin size={"24px"} />
              </span>
              <span className="m-2">
                <p className="text-white mb-2 mt-2 text-[19px]">
                  Learn anywhere
                </p>
                <p className="text-white">
                  We are explored to deliver.Our research made us resolved to an
                  online and onsite lecture arrangements as the best
                  modality,wrapped up with projects and internship.
                </p>
              </span>
            </span>
            <span className="flex justify-center items-center">
              <span className=" bg-white flex justify-center p-2 rounded-[20px] m-2">
                <MdLocationPin size={"24px"} />
              </span>
              <span className="m-2">
                {" "}
                <p className="text-white mb-2 mt-2 text-[19px]">
                  Learning is fun
                </p>
                <p className="text-white">
                  Say goodbye to outdated curriculums, bulky lecture notes, and
                  boring lectures
                </p>
              </span>
            </span>
            <span className="flex justify-center items-center">
              <span className=" bg-white flex justify-center p-2 rounded-[20px] m-2">
                <MdLocationPin size={"24px"} />
              </span>
              <span className="m-2">
                {" "}
                <p className="text-white mb-2 mt-2 text-[19px]">
                  Learning is Communal
                </p>
                <p className="text-white">
                  Learners are working together, sharing knowledge, and
                  collaborating to enhance their understanding. You are not
                  alone with your learning journey.
                </p>
              </span>
            </span>
            <span className="flex justify-center items-center">
              <span className=" bg-white flex justify-center p-2 rounded-[20px] m-2">
                <MdLocationPin size={"24px"} />
              </span>
              <span className="m-2">
                {" "}
                <p className="text-white mb-2 mt-2 text-[19px]">
                  Learning from the best
                </p>
                <p className="text-white">
                  Our instructors are carefully selected to give you the best
                  learning outcome.They are the best on the subject matter and
                  poised to give you the learning you deserve.
                </p>
              </span>
            </span>
          </span>
          <span className="flex justify-center items-center">
            <span className=" bg-white flex justify-center p-2 rounded-[20px] m-2">
              <MdLocationPin size={"24px"} />
            </span>
            <span className="m-2">
              {" "}
              <p className="text-white mb-2 mt-2 text-[19px]">
                Learn the profitable
              </p>
              <p className="text-white">
                Whether you're exploring a career path, embracing a new
                challenge or acquiring new skills for career, we will help you
                to achieve the desired results.
              </p>
            </span>
          </span>
        </div>
      </section>
    </main>
  );
};

export default Body;
