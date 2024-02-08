import React from "react";
import TempIntro from "../tempIntro";
import Templates from "../Template";
import FAQ from "../FAQ";
import Question from "../Question";

const TemplateMain = () => {
  return (
    <div>
      <TempIntro />
      <Templates />
      <FAQ />
      <Question />
    </div>
  );
};

export default TemplateMain;
