import Motion from "@/providers/Motion";
import React from "react";
import styled from "styled-components";

const StyledBorder = styled.div`
  background: linear-gradient(90deg, rgba(249, 248, 247, 0) 0%, #fbfafa 9.09%, rgba(249, 248, 247, 0) 100%);
  height: 5px;
`;
const Categories = () => {
  return (
    <Motion transition={{ duration: 0.5, delay: 0.2 }} variants={{ hidden: { opacity: 0, x: -25 }, visible: { opacity: 1, x: 0 } }}>
      <div className="w-full rounded-[30px] bg-gradient-to-tr from-[#171b27] via-[#11141dc2] to-[#1a1d2b59] backdrop-blur-3xl card-border-gradients p-6 min-[400px]:p-10 space-y-8">
        <h1 className="text-2xl font-bold">Categories</h1>
        <div className="h-[2px] relative">
          <div className="w-full h-[4px] flex justify-center blur-[2px] styled-border" />
          <div className="w-full h-[2px] flex justify-center opacity-50 absolute top-0.5 blur-[0.7px] rounded-full styled-border z-[1]" />
        </div>{" "}
        <div className="space-y-4 mt-4">
          <span className="flex justify-between">
            <h1 className="text-lg">AI Content</h1>
            <p>(1)</p>
          </span>
          <span className="flex justify-between">
            <h1 className="text-lg">AI Image</h1>
            <p>(1)</p>
          </span>
          <span className="flex justify-between">
            <h1 className="text-lg">AI Code</h1>
            <p>(1)</p>
          </span>
        </div>
      </div>
    </Motion>
  );
};

export default Categories;
