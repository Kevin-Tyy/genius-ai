import React from "react";
import PricingIntro from "./components/pricingIntro";
import Pricing from "../(home)/components/Pricing";
import Question from "@/components/Question";
import FAQ from "@/components/FAQ";

export default function page() {
  return (
    <div>
      <PricingIntro />
      <Pricing />
      <FAQ />
      <Question />
    </div>
  );
}
