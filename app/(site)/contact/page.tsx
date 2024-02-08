"use client";

import ContactForm from "@/app/(site)/contact/components/ContactForm";
import ContactIntro from "@/app/(site)/contact/components/ContactIntro";
import FAQ from "@/components/FAQ";
import Info from "@/components/Info";
import Question from "@/components/Question";

export default function Home() {
  return (
    <div>
      <ContactIntro />
      <ContactForm />
      <Info />
      <FAQ />
      <Question />
    </div>
  );
}
