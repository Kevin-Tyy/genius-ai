"use client"

import ContactForm from "@/components/ContactForm"
import ContactIntro from "@/components/ContactIntro"
import FAQ from "@/components/FAQ"
import Info from "@/components/Info"

export default function Home() {
    return (
      <div>
        <ContactIntro />
        <ContactForm />
        <Info />
        <FAQ />
      </div>
    )
  }