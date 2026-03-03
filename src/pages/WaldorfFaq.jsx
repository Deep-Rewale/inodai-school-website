import React from "react";
import WaldorfFaqHero from "../components/WaldorfFAQs/WaldorfFaqHero";
import WhatIsWaldorf from "../components/WaldorfFAQs/WhatIsWaldorf";
import WaldorfCurriculum from "../components/WaldorfFAQs/WaldorfCurriculum";
import RealWorldPreparation from "../components/WaldorfFAQs/RealWorldPreparation";
import Footer from "../components/Footer";

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
