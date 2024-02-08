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

      {/*
      <div className="flex justify-center space-x-5 mt-5">
        {Array.from({ length: 5 }, (_, index) => (
          <StyledButton key={index} className="border-2 border-white p-auto gradient-card rounded-md w-8 h-8">
            {index + 1}
          </StyledButton>
        ))}
      </div>
    </div> */}
    </div>
  );
}
