import React from "react";
import dd from "../assets/dd1.png";
import wel from "../assets/wel.jpg";
import blank from "../assets/blank.jpg";
import lead from "../assets/ceo.jpg";

const GetStarted = () => {
  return (
    <main className="m-2">
      <section
        style={{
          backgroundImage: `url(${blank})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex justify-center items-center mt-4"
      >
        <h1 className="text-yellow-400 text-[60px] font-semibold">About Us</h1>
      </section>
      <section className="md:flex md:p-4 mt-2 mb-2">
        <div className="p-2 md:w-1/2">
          <span className="flex justify-center items-center text-[1.3rem] font-black m-2 md:text-[25px] lg:text-3xl">
            <h1 className="text-center text-purple-600">Welcome to </h1>
            <h1 className="ml-1 text-[#fd3c1d]">LearnFactory</h1>
          </span>
          <span className="md: flex justify-center items-center">
            <p className="text-center md:text-[22px] ">
              At LearnFactory, we empower students to succeed in the rapidly
              evolving tech industruy. Our mission is to providde accessible,
              high-quality education and training that bridges the gap between
              theory and practice.
            </p>
          </span>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full rounded-[20px] self-end"
            src={wel}
            alt="imageofalady"
          />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col bg-[#fff7ea]">
        <button className="rounded-3xl font-black  border border-[#fd3c1d] px-3 py-2 mt-4 text-lg">
          <span className="text-[#fd3c1d] font-black">.</span> OUR TEAM{" "}
          <span className="font-black text-[#fd3c1d]">.</span>{" "}
        </button>
        <h1 className="font-black text-[30px] m-5">
          <span className="text-[#fd3c1d]">Team</span>{" "}
          <span className="text-purple-600">Members</span>
        </h1>
        <p className="text-center">
          Meet our team of experienced instuctors, mentors and <br /> industry
          experts. Who are dedicated to helping you achieve <br /> your tech
          career goals:
        </p>
        <br />
        <br />

        <div className="md:flex  ">
          <div className=" flex flex-col justify-center items-center mt-4 mb-4 md:m-2 ">
            <img src={lead} alt="" className="rounded-[20px]" />
            <h1 className="text-[18px] font-md m-2 font-serif text-[#fd3c1d]">
              Lead
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-4 mb-4 md:m-2">
            <img src={blank} alt="" className="rounded-[20px]" />
            <h1 className="text-[18px] font-md m-2 font-serif text-[#fd3c1d]">
              Director
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-4 mb-4 md:m-2">
            <img src={blank} alt="" className="rounded-[20px]" />
            <h1 className="text-[18px] font-md m-2 font-serif text-[#fd3c1d]">
              Project Manager
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-4 mb-4 md:m-2">
            <img src={blank} alt="" className="rounded-[20px]" />
            <h1 className="text-[18px] font-md m-2 font-serif text-[#fd3c1d]">
              Data Scientist
            </h1>
          </div>
        </div>
      </section>
      <section className="md:flex">
        <div className="p-4 flex flex-col justify-center items-center md:w-3/5">
          <span className="flex justify-center m-2 items-center text-3xl font-black md:text-4xl ">
            <h1 className="text-purple-600">Industry</h1>
            <h1 className="text-[#fd3c1d] ml-1">Partnerships</h1>
          </span>
          <span className="flex flex-col justify-center items-center">
            <p className="font-semibold">
              We partner with top tech compaines to provide students with:{" "}
              <br />
              <span className="text-2xl font-black text-[#fd3c1d]">.</span>{" "}
              Intership oppurtunities
              <br />
              <span className="font-black text-purple-600 text-2xl">.</span> Job
              placement assistance
              <br />
              <span className="font-black text-[#fd3c1d] text-2xl">.</span>{" "}
              Intership insights and mentorship
              <img src={dd} alt="" />
            </p>
          </span>
        </div>
        <div className="md:w-2/5">
          <span className="flex justify-center items-center text-3xl font-black m-4 md:text-[2.2rem]">
            <h1 className="font-bold text-[#fd3c1d]">Our</h1>
            <h1 className="text-bold text-purple-600 ml-1">Values</h1>
          </span>

          <div className="flex text-balance md:text-[16px]">
            <span className="m-2 bg-purple-600 rounded-md ">
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus ducimus velit veniam voluptas illo laborum. Explicabo
                aliquam a, ab nemo mollitia hic iste molestiae reprehenderit
                amet minima, molestias eligendi iure.
              </p>
            </span>
            <span className="m-2 bg-[#fd3c1d] rounded-md ">
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                qui est voluptatem unde, tempora voluptatibus omnis dolorem
                nihil asperiores praesentium dicta quidem voluptate minima ea
                quos magni accusantium tenetur consectetur!
              </p>
            </span>
          </div>
          <div className="bg-[#fd3c1d] rounded-md m-2 md:">
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex
              sed cum inventore possimus! Quod soluta, illum incidunt vero quasi
              sequi nobis quaerat unde deleniti nihil reprehenderit esse placeat
              fugiat.
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-[#fff7ea] p-8">
        <div className="pb-24">
          <h1 className="font-bold text-[25px]">Get in Touch</h1>
          <h1 className="font-bold text-[25px]">
            Ready To Start Your Tech Journey Contact Us
          </h1>

          <div className="pt-4">
            <span className="flex ">
              <p className="text-yellow-300 text-[px] font-black">.</p>
              <p>Click the Apply button to Join the next cohort </p>
            </span>
            <span className="flex ">
              <p className="text-yellow-300  font-black">.</p>
              <p>Click the Apply button to Join the next cohort </p>
            </span>
            <span className="flex ">
              <p className="text-yellow-300  font-black">.</p>
              <p>Click the Apply button to Join the next cohort </p>
            </span>
            <span className="flex ">
              <p className="text-yellow-300  font-black">.</p>
              <p>Click the Apply button to Join the next cohort </p>
            </span>
            <span className="flex">
              <p className="text-yellow-300  font-black">.</p>
              <p>Click the Apply button to Join the next cohort </p>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetStarted;
