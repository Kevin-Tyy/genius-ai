"use client";

import Blog from "@/app/(site)/blog/components/Blog";
import BlogIntro from "@/app/(site)/blog/components/BlogIntro";
import Question from "@/components/Question";

export default function Home() {
  return (
    <div>
      <BlogIntro />
      <Blog />
      <Question />
    </div>
  );
}
