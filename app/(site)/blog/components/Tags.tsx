import React, { useState } from "react";

const Tags = () => {
  const [selectedTag, setSelctedTag] = useState("gpt-4");
  return (
    <div className="w-full rounded-[30px] bg-gradient-to-tr from-[#171b27] via-[#11141dc2] to-[#1a1d2b59] backdrop-blur-3xl card-border-gradients p-6 min-[400px]:p-10 space-y-8">
      <h1 className="text-2xl font-bold">Tags</h1>
      <div className="h-[2px] relative">
        <div className="w-full h-[4px] flex justify-center blur-[2px] styled-border" />
        <div className="w-full h-[2px] flex justify-center opacity-50 absolute top-0.5 blur-[0.7px] rounded-full styled-border z-[1]" />
      </div>
      <div className="space-y-3 mt-4">
        <div className="flex gap-3">
          <button
            onClick={() => setSelctedTag("Openai")}
            className={`w-4/5 px-6 py-4 card-gradients rounded-xl ${selectedTag === "Openai" ? "gradient-sm-filter text-[#101010]" : ""}`}>
            Openai
          </button>
          <button
            onClick={() => setSelctedTag("gpt-3.5")}
            className={`w-full px-6 py-4 card-gradients rounded-xl ${selectedTag === "gpt-3.5" ? "gradient-sm-filter text-[#101010]" : ""}`}>
            gpt-3.5
          </button>
        </div>
        <button
          onClick={() => setSelctedTag("gpt-4")}
          className={`w-1/2 px-6 py-4 card-gradients rounded-xl ${selectedTag === "gpt-4" ? "gradient-sm-filter text-[#101010]" : ""}`}>
          gpt-4
        </button>
      </div>
    </div>
  );
};

export default Tags;
