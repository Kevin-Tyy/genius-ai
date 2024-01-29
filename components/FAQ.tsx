import Image from "next/image";
import { useState } from "react";

const FAQ = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
<div className="flex justify-center">
<div className="md:px-4 lg:px-20 xl:px-80">
      <span className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h1>
        <Image src="/union.svg" alt='union' width={180} height={2} />
      </span>
      <div className="overflow-x-auto mt-6 md:mt-10">
        <table className="table-auto w-full md:w-[70rem] h-[40vh] border-collapse border border-gray-300">
          <colgroup>
            <col className="w-10" />
            <col className="w-auto" />
            <col className="w-10" />
          </colgroup>
          <thead>
            <tr>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">
                <p className="font-semibold">
                  What is ChatGPT, and how does it work?
                </p>
                {isExpanded && (
                  <p className="mt-2 md:mt-4 text-sm md:text-base">
                    ChatGPT is an artificial intelligence (AI) chatbot that
                    uses natural language processing to create humanlike
                    conversational dialogue. The language model can respond to
                    questions and compose various written content, including
                    articles, social media posts, essays, code, and emails.
                  </p>
                )}
              </td>
              <td
                className="border border-gray-300 px-4 py-2 text-3xl cursor-pointer"
                onClick={() => setIsExpanded((show) => !show)}
              >
                {isExpanded ? "-" : "+"}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">
                Can ChatGPT generate code or help with programming tasks?
              </td>
              <td className="border border-gray-300 px-4 py-2 text-3xl">+</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">
                What are the key features and capabilities of ChatGPT?
              </td>
              <td className="border border-gray-300 px-4 py-2 text-3xl">+</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">
                How does ChatGPT handle sensitive or controversial topics?
              </td>
              <td className="border border-gray-300 px-4 py-2 text-3xl">+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</div>
  );
};

export default FAQ;
