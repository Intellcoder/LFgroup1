import React from "react";
import Header from "./body/Header";
import Body from "./body/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./body/About";
import AllCourses from "./body/AllCourses";
import GetStarted from "./body/GetStarted";
import Footer from "./body/Footer";
import OnBoarding from "./body/OnBoarding";
import SuccessCard from "./body/components/SuccessCard";
import ErrorPage from "./body/components/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-2">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/application" element={<GetStarted />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/succesful" element={<SuccessCard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
