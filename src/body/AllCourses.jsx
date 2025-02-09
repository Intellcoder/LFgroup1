import React from "react";
import allcourses from "../assets/all.jpg";
import dataEngr from "../assets/de.jpg";
import morecourses from "../assets/morecourses.jpg";
import javascript from "../assets/javascript.jpg";
import Animation from "../assets/Animation.jpg";
import python from "../assets/python.jpg";
import uiux from "../assets/uiux.jpg";
import CourseContainer from "./components/CourseContainer";

const AllCourses = () => {
  return (
    <>
      <div>
        <section
          style={{
            backgroundImage: `url(${allcourses})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex justify-center items-center mx-2 mt-4 sm: h-[30vh]"
        >
          <h1 className="sm: text-2xl md:font-black text-6xl to-indigo-400 font-serif ">
            All Courses
          </h1>
        </section>
        <section>
          <CourseContainer
            image={dataEngr}
            courseTitle={"DATA ENGINEERING"}
            paragraph1={`Data Engineering is the practice of designing, building, and maintaining data
           systems that enable organisations to collect, store, process, and analyze large volumes of data.It involves a combination of technical skills and domain knowledge to
           ensure data quality, accessibility, and security.`}
            paragraph2={
              "By Effectively managing the data lifecycle, data engineers empower organisations to make data-driven decisions, improve operational efficiency, and gain a competitve egde."
            }
            paragraph3={
              "By leveraging powerful tools like Apache Spark, Hadoop, Kafka, SQL, and Python, data engineers transform raw data into valuable insights."
            }
          />
        </section>
        <section
          style={{
            backgroundImage: `url(${morecourses})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "40vh",
          }}
          className="m-2 flex justify-center items-center"
        >
          <h1 className="font-black text-[#fff] text-4xl to-indigo-400 font-serif">
            More Courses
          </h1>
        </section>
        <section>
          <CourseContainer
            image={javascript}
            courseTitle={"JAVASCRIPT"}
            paragraph1={`Javascript is a versatile programming language that powers the interactive elements of web pages.It's used to create dynamic, responsive and engaging user experiences.`}
            paragraph2={`Javascript is a fundamental skill for web developers. It's widely used, constantly
          evolving, and offers a vast ecosystem of tools and libraies.By mastering Javscript, you can create innovative and interactive web experiences.`}
          />
          <CourseContainer
            image={Animation}
            courseTitle={"ANIMATION"}
            paragraph1={"Animation: Bringing Still Images to Life"}
            paragraph2={
              "Animation is the art of creating the illusion of movement through a rapid display of still images.It's a technique used to bring inanimate objects to life,tell stories, and convey emotions."
            }
            paragraph3={`Animation has become an integral part of our culture, influencing everything from advertising to film and video games.It is used to entertain, educate, 
              and inspire audiences of all ages.`}
          />
          <CourseContainer
            image={uiux}
            courseTitle={"UIUX"}
            paragraph1={`UI-UX is a track that designs the user interface (UI) and User Experience(UX) of a product.`}
            paragraph2={`User interface is all about the feel of a product, What you see and touch whie User Experience is about the usefulness of the product,how the product is able to meet the users' need.While UI concentrates on the colour, shape and overall aesthetics of a product, UX concentrates on user research, Information architecture,interactive
           design and usability testing.`}
            paragraph3={`The goal of both UI and UX is to 
              create products that are user-centered, easy to use,
               visually appealing, etc. The UI/UX designers are like
                architects who design building but 
              not the bricklayers who builds.The designs in this case are passed to a web or app developer who
              inputs the codes to build the website. `}
          />
          <CourseContainer
            image={python}
            courseTitle={"PYTHON"}
            paragraph1={`Python is a high-level, general-purpose programming language known for its simplicity and readability. Its syntax is designed to be as close to natural language as possible, making it a great choice for
           both beginners and experinced programmers`}
            paragraph2={`Python versatility, ease of learning, and strong community make it a valuable 
          skill for anyone interested in programing. Whether you're a data scientis, web develper, or simply curious about coding`}
            paragraph3={`Python offers a rewarding and flexible learning journey`}
          />
        </section>
      </div>
    </>
  );
};

export default AllCourses;
