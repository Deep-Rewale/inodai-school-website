import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// imported pages to app
import Home from "./pages/Home";
import About from "./pages/About";
import Board from "./pages/Board";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import WaldorfEducation from "./pages/WaldorfEducation";
import WaldorfFaq from "./pages/WaldorfFaq";
import Playgroup from "./pages/Playgroup";
import Kindergarten from "./pages/Kindergarten";
import Daycares from "./pages/Daycars";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import Navbar from "./components/Navbar";
// import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

export const App = () => {
  return (
    // Used React router for routes handling
    <div className=" w-full overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />

          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />

          <Route path="/waldorf-education" element={<WaldorfEducation />} />
          <Route path="/waldorf-faq" element={<WaldorfFaq />} />

          <Route path="/playgroup" element={<Playgroup />} />
          <Route path="/kindergarten" element={<Kindergarten />} />
          <Route path="/daycare" element={<Daycares />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/admissions"  element={<Admissions />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
