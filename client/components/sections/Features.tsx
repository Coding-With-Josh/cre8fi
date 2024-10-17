"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { ChevronRightCircle } from "lucide-react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";

const Features = () => {
  return (
    <div className="animate-in px-4 mt-20 flex flex-col items-center">
      {/* Section Title */}
      <h1 className="bg-clip bg-gradient-to-b mb-9 from-transparent to-primary font-[helvetica] p-2 rounded-md text-2xl sm:text-3xl">
        Our Features
      </h1>

      {/* Feature Cards Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full">
        <GlowingStarsBackgroundCard className="w-full lg:w-[30%]">
          <GlowingStarsTitle>Earn while you create</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              The power of full-stack to the frontend. Read the release notes.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <ChevronRightCircle />
            </div>
          </div>
        </GlowingStarsBackgroundCard>

        <GlowingStarsBackgroundCard className="w-full lg:w-[30%]">
          <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              The power of full-stack to the frontend. Read the release notes.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <ChevronRightCircle />
            </div>
          </div>
        </GlowingStarsBackgroundCard>

        <GlowingStarsBackgroundCard className="w-full lg:w-[30%]">
          <GlowingStarsTitle>Innovate with Ease</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              Drive your project forward with the latest tech stack.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <ChevronRightCircle />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </div>
  );
};

export default Features;
