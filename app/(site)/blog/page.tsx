"use client";

import Blogs from "@/app/(site)/blog/components/Blogs";
import BlogIntro from "@/app/(site)/blog/components/BlogIntro";
import Question from "@/components/Question";

export default function Home() {
  return (
    <div>
      <BlogIntro />
      <Blogs />
      <Question />
    </div>
  );
}
