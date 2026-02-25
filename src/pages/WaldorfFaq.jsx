import React from "react";
import WaldorfFaqHero from "../components/WaldorfFAQs components/WaldorfFaqHero";
import WhatIsWaldorf from "../components/WaldorfFAQs components/WhatIsWaldorf";
import { div } from "framer-motion/client";
import WaldorfCurriculum from "../components/WaldorfFAQs components/WaldorfCurriculum";
import RealWorldPreparation from "../components/WaldorfFAQs components/RealWorldPreparation";
import Footer from "../components/Footer"

const WaldorfFaq = () => {
  return (
    <div>
      <WaldorfFaqHero />
      <WhatIsWaldorf />
      <WaldorfCurriculum />
      <RealWorldPreparation />
      <Footer />
    </div>
  );
};

export default WaldorfFaq;
