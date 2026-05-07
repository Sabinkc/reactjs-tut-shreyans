import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import Coursedetail from "./pages/Coursedetail";

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Coursedetail />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <div className="bg-gray-500 py-5 flex justify-center absolute bottom-0 w-full">
        <h1>This is footer section</h1>
      </div>
    </div>
  );
};

export default App;
