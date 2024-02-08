"use client";

import FAQ from "@/components/FAQ";
import Question from "@/components/Question";
import Templates from "@/components/Templates";
import TempIntro from "@/app/(site)/template/components/tempIntro";

export default function Home() {
  return (
    <div>
      <TempIntro />
      <Templates />
      <FAQ />
      <Question />
    </div>
  );
}
