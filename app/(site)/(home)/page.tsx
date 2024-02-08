"use client";

import FAQ from "@/components/FAQ";
import Intro from "@/app/(site)/(home)/components/Intro";
import Pricing from "@/app/(site)/(home)/components/Pricing";
import Video from "@/app/(site)/(home)/components/Video";
import Question from "@/components/Question";
import Review from "@/app/(site)/(home)/components/Review";
import Templates from "@/components/Templates";
import Choose from "@/components/Choose";

export default function Home() {
  return (
    <div>
      <Intro />
      <Video />
      <Choose />
      <Templates />
      <Pricing />
      <Review />
      <FAQ />
      <Question />
    </div>
  );
}
