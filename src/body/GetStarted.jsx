import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GetStarted = () => {
  const { register, handleSubmit, reset, formState, control, setValue, watch } =
    useForm({
      defaultValues: {
        name: "",
        selectedOption: "",
        preference: "",
      },
    });

  const selectedOption = watch("selectedOption");
  const preference = watch("preference");

  const handleCheckBoxChange = (value) => {
    setValue("selectedOption", value);
  };

  const handlePreferenceChange = (value) => {
    setValue("preference", value);
  };
  const { errors, isSubmitted, isSubmitting } = formState;

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://learnfactory-applicant-portal.onrender.com",
        data
      );

      if (isSubmitted) {
        navigate("/succesful");
      }
      reset();
    } catch (error) {}
  };

  return (
    <div className="m-2">
      <section className="flex flex-col justify-center items-center p-10 mt-10">
        <h1 className="text-center font-bold text-[30px] text-purple-600">
          Welcome!
        </h1>
        <p className="text-black text-[18px] font-medium">
          Please fill the form below to start off your Application
        </p>
      </section>
      <section className="sm: p-0 flex justify-center items-center p-4 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="sm: p-1 bg-[#fff7ea] flex flex-col justify-center items-center  w-[80%] h-[95%] rounded-xl p-10"
        >
          <div className="sm: m-1 flex flex-col m-5 w-[80%]">
            <label className="text-[20px] font-medium">First Name</label>
            <input
              type="text"
              id="firstname"
              {...register("first_name", {
                required: {
                  value: true,
                  message: "first name is required",
                },
              })}
              placeholder="Enter Your First name"
              className="bg-gray-300 outline-none p-2 w-[100%] rounded "
            />
            <p className="text-red-600 text-2xl">
              {errors.first_name?.message}
            </p>
          </div>
          <div className="sm: m-1 flex flex-col m-5 w-[80%]">
            <label className="text-[20px] font-medium">Middle Name</label>
            <input
              type="text"
              id="middlename"
              {...register("middle_name", {
                required: "Middle name is required",
              })}
              placeholder="Enter Your First name"
              className="bg-gray-300 outline-none p-2 w-[100%] rounded "
            />
            <p className="text-red-600 text-2xl">
              {errors.middle_name?.message}
            </p>
          </div>
          <div className="sm: m-1 flex flex-col m-5 w-[80%]">
            <label className="text-[20px] p-2 font-meduium">Last Name</label>
            <input
              type="text"
              id="lastname"
              {...register("last_name", {
                required: "Last name is required",
              })}
              placeholder="Enter Your last name"
              className="bg-gray-300 outline-none p-2 w-[100%] rounded"
            />
            <p className="text-red-600 text-2xl">{errors.last_name?.message}</p>
          </div>
          <div className="sm: m-1 flex flex-col m-5 w-[80%]">
            <label className="text-[20px] font-medium">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter Your email address"
              className="bg-gray-300 p-2 outline-none w-[100%] rounded"
            />
            <p className="text-red-600 text-2xl">{errors.email?.message}</p>
          </div>
          <div className="sm: m-1 flex flex-col m-5 w-[80%]">
            <label className="text-[20px] font-medium">Phone</label>
            <input
              type="text"
              id="phonenumber"
              {...register("phone", {
                required: "Phone Number is required",
              })}
              placeholder="Enter Your Phone number"
              className="bg-gray-300 p-2 outline-none w-[100%] rounded"
            />
            <p className="text-red-600 text-2xl">{errors.phone?.message}</p>
          </div>
          <div className="sm: m-1 flex flex-col m-5 w-[80%]">
            <label className="text-[20px] font-medium">Date of Birth</label>
            <input
              type="text"
              id="date_of_birth"
              {...register("date_of_birth", {
                required: "Please provide birthday",
              })}
              placeholder="date of birth"
              className="bg-gray-300 outline-none p-2 w-[100%] rounded "
            />
            <p className="text-red-600 text-2xl">
              {errors.date_of_birth?.message}
            </p>
          </div>
          <div className="sm: m-1 flex flex-col m-5 w-[80%]">
            <label className="text-[20px] font-medium">Gender</label>
            <input
              type="text"
              id="gender"
              {...register("gender", {
                required: "All fields are required",
              })}
              placeholder="Enter Your Gender"
              className="bg-gray-300 outline-none p-2 w-[100%] rounded "
            />
            <p className="text-red-600 text-2xl">{errors.gender?.message}</p>
          </div>
          <section className="mt-16">
            <div className="bg-[#fff7ea] m-4 p-5 rounded-lg">
              <h1 className="text-center text-[20px] font-bold">
                Course/Track
              </h1>
              <span className="flex m-6">
                <Controller
                  name="selectedOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      value="Fullstack_Developemnt_with_javascript"
                      checked={
                        selectedOption ===
                        "Fullstack_development_with_Javascript"
                      }
                      id="javascript"
                      onChange={() =>
                        handleCheckBoxChange(
                          "Fullstack_development_with_Javascript"
                        )
                      }
                      className="p-10 w-5 border-black"
                    />
                  )}
                />
                <p className="ml-2 text-[18px] font-medium">
                  Fullstack Development with Javascript
                </p>
              </span>
              <span className="flex m-6">
                <Controller
                  name="selectedOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      value="Fullstack_Developemnt_with_Python"
                      checked={
                        selectedOption === "Fullstack_development_with_Python"
                      }
                      onChange={() =>
                        handleCheckBoxChange(
                          "Fullstack_development_with_Python"
                        )
                      }
                      id="python"
                      className="p-10 w-5 border-black"
                    />
                  )}
                />
                <p className="ml-2 text-[18px] font-medium">
                  Fullstack Development with Python
                </p>
              </span>{" "}
              <span className="flex m-6">
                <Controller
                  name="selectedOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      value="UI/Ux"
                      checked={selectedOption === "UI/UX"}
                      onChange={() => handleCheckBoxChange("UI/UX")}
                      id="ui/ux"
                      className="p-10 w-5 border-black"
                    />
                  )}
                />
                <p className="ml-2 text-[18px] font-medium">
                  Product Management & UIUX Design
                </p>
              </span>{" "}
              <span className="flex m-6">
                <Controller
                  name="selectedOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      value="Animation"
                      checked={selectedOption === "Animation"}
                      onChange={() => handleCheckBoxChange("Animation")}
                      id="animation"
                      className="p-10 w-5 border-black"
                    />
                  )}
                />
                <p className="ml-2 text-[18px] font-medium">
                  Digital Arts and Animation
                </p>
              </span>{" "}
              <span className="flex m-6">
                <Controller
                  name="selectedOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      value="Data_Engineering"
                      checked={selectedOption === "Data_Engineering"}
                      onChange={() => handleCheckBoxChange("Data_Engineering")}
                      id="data_engineeering"
                      className="p-10 w-5 border-black"
                    />
                  )}
                />
                <p className="ml-2 text-[18px] font-medium">Data Engineering</p>
              </span>{" "}
              <span className="flex m-6">
                <Controller
                  name="selectedOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      value="Ai_prompt"
                      checked={selectedOption === "Ai_prompt"}
                      onChange={() => handleCheckBoxChange("Ai_prompt")}
                      id="Ai_prompt"
                      className="p-10 w-5 border-black"
                    />
                  )}
                />
                <p className="ml-2 text-[18px] font-medium">
                  AI and Prompting Engineering
                </p>
              </span>{" "}
              <span className="flex m-6">
                <Controller
                  name="selectedOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      value="mobile_app"
                      checked={selectedOption === "mobile_app"}
                      onChange={() => handleCheckBoxChange("mobile_app")}
                      id="mobile_app"
                      className="p-10 w-5 border-black"
                    />
                  )}
                />
                <p className="ml-2 text-[18px] font-medium">
                  Mobile App Development
                </p>
              </span>{" "}
              <span className="flex m-6">
                <Controller
                  name="selectedOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="checkbox"
                      value="others"
                      checked={selectedOption === "others"}
                      onChange={() => handleCheckBoxChange("others")}
                      id="others"
                      className="p-10 w-5 border-black"
                    />
                  )}
                />
                <p className="ml-2 text-[18px] font-medium">Others</p>
              </span>
            </div>
          </section>

          <section className="mt-16 flex flex-col">
            <div className="bg-[#fff7ea] m-4 pt-5 px-5 py-5 pb-8 rounded-xl">
              <h1 className="text-lg font-bold text-center">
                CLASS PREFERENCE
              </h1>
              <p className="text-base font-medium text-wrap text-center">
                (Note that selection now must be adhered to during <br /> the
                course of the program and cannot be changed)
              </p>

              <div className="m-6">
                <span className="flex mt-6">
                  <Controller
                    name="preference"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="checkbox"
                        value="morning"
                        checked={preference === "morning"}
                        onChange={() => handlePreferenceChange("morning")}
                        id="morning"
                      />
                    )}
                  />
                  <p className="ml-2 text-base font-medium">
                    Morning (9:30am - 12:30pm)
                  </p>
                </span>
                <span className="flex mt-6 text-base font-medium">
                  <Controller
                    name="preference"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="checkbox"
                        value="afternoon"
                        checked={preference === "afternoon"}
                        onChange={() => handlePreferenceChange("afternoon")}
                        id="afternoon"
                      />
                    )}
                  />
                  <p className="ml-2">Afternoon (1:30pm - 4:30pm)</p>
                </span>
              </div>
            </div>
          </section>
          <button
            disabled={isSubmitting}
            onClick={onSubmit}
            type="submit"
            className="bg-[#fd3c1d] self-center text-white text-lg px-20 py-2 rounded-lg m-4"
          >
            {isSubmitting ? (
              <span className="text-[18px]">Submitting...</span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </section>
      {/* <section className="m-3 flex justify-center items-center">
        <img src={dd} alt="" className="" />
      </section> */}
    </div>
  );
};

export default GetStarted;
