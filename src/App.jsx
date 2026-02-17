import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// imported pages to app
import Home from "./pages/Home";
import About from "./pages/About";
import Board from "./pages/Board";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import WaldorfEducation from "./pages/WaldorfEducation";
import WaldorfFaq from "./pages/WaldorfFaq";
import Playgroup from "./pages/Playgroup";
import Kindergarten from "./pages/Kindergarten";
import Daycares from "./pages/Daycars";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    // Used React router for routes handling
   <div className="h-screen w-full">
   <BrowserRouter>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />

        <Route path="/waldorf-education" element={<WaldorfEducation />} />
        <Route path="/waldorf-faq" element={<WaldorfFaq />} />

        <Route path="/playgroup" element={<Playgroup />} />
        <Route path="/kindergarten" element={<Kindergarten />} />
        <Route path="/daycare" element={<Daycares />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};
export default App;
