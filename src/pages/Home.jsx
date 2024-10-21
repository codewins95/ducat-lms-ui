import React from "react";
import HomeBanner from "../component/HomeBanner";
import About from "./About";
import PopularSubject from "../component/PopularSubject";
import Course from "../component/HomeCourse";
import HomeRegistration from "../component/HomeRegistration";
import Testimonial from "../component/Testimonial";
import Blogs from "../component/Blogs";

const Home = () => {
  return (
    <>
      <main className="bg-transparent">
        <HomeBanner />
        <About />
        <PopularSubject />
        <Course />
        <HomeRegistration />
        <Testimonial />
        <Blogs />
      </main>
    </>
  );
};

export default Home;
