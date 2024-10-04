"use client";

import { useState } from "react";

const helpAndFAQs = [
  {
    title: "What is Cre8Fi?",
    description:
      "Cre8Fi is a Web3 platform designed to connect content creators with projects looking for their services. It provides a decentralized marketplace where creators can offer services like graphic design, writing, video editing, and more. Additionally, we use an intelligent project-matching algorithm to help projects find the right creators based on their skills and portfolios. In future versions, creators will also earn rewards through our content point system, which will be convertible to tokens.",
  },
  {
    title: "How does the project-creator matching work?",
    description: "abcd.",
  },
  {
    title: "What services can creators offer on Cre8Fi?",
    description: "abcd.",
  },
  {
    title: "Is Cre8Fi built on blockchain?",
    description: "abcd.",
  },
  {
    title: "How does the content point system work?",
    description: "abcd.",
  },
  {
    title: "Can creators sell digital assets like NFTs on Cre8Fi?",
    description: "abcd.",
  },
  {
    title: "What are the benefits of being a verified creator or project?",
    description: "abcd.",
  },
  {
    title:
      "What’s the difference between the content point system and token rewards?",
    description: "abcd.",
  },
  {
    title:
      "How does Cre8Fi ensure fair collaboration between creators and projects?",
    description: "abcd.",
  },
  {
    title: "What blockchain technologies is Cre8Fi using?",
    description: "abcd.",
  },
  {
    title: "When will the token reward system be available?",
    description: "abcd.",
  },
];

const HelpAndFAQsPage = () => {
  // State to track the currently expanded FAQ
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Function to handle the expansion of the FAQ
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the selected FAQ
  };

  return (
    <main className="m-20">
      <h1 className="m-5 text-left text-customBlue font-semibold text-2xl">
        Everything you need to know about Cre8Fi
      </h1>
      <section>
        {helpAndFAQs.map((term, index) => (
          <div
            key={index}
            className={`text-left m-5 border-b pb-3 ${
              expandedIndex === index
                ? "bg-customBlue border rounded-[20px]"
                : ""
            }`}
          >
            {/* FAQ Title */}
            <div
              className="flex justify-between items-center cursor-pointer p-3"
              onClick={() => toggleExpand(index)}
            >
              <h2 className="font-medium text-lg">{term.title}</h2>
              <span className="text-sm font-light border border-lightGray rounded-full  w-6 h-6 flex items-center justify-center ">
                {expandedIndex === index ? "-" : "+"}
              </span>
            </div>

            {/* Conditionally show the description if this FAQ is expanded */}
            {expandedIndex === index && (
              <p className="mt-5 p-3 text-lightGray font-normal text-sm">
                {term.description}
              </p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default HelpAndFAQsPage;
