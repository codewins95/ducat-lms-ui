import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Course from "./pages/Course";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <switch>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="courses" Component={Course} />
            <Route path="about" Component={About} />
            <Route path="contact-us" Component={ContactUs} />
            <Route path="login" Component={Login} />
            <Route path="sign-up" Component={SignUp} />
            <Route path="dashboard" Component={Dashboard} />
            <Route path="*" Component={Home} />
          </Routes>
        </switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
