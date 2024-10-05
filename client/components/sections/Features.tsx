"use client";

import React from "react";
import { EvervaultCard } from "../ui/evervault-card";
import { CardSpotlight } from "../ui/card-spotlight";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../ui/glowing-stars";
import { ChevronRightCircle } from "lucide-react";

const features = [
  {
    title: "",
  },
];

const Features = () => {
  return (
    <div className="animate-in px-4 mt-[5rem] flex flex-col items-center">
      <h1 className="bg-clip bg-gradient-to-b mb-9 from-transparent to-primary font-[helvetica] p-2 rounded-[0.4rem] text-2xl">
        Our Features
      </h1>
      {/* <div className="flex items-center justify-center gap-[2rem] overflow-x-scroll">
        <div className="bg-card rounded-[13px] h-fit w-[27rem] flex flex-col gap-[2rem] items-start justify-between  border-2 border-slate-600 px-[2rem] py-[3rem]">
          <div>
            {" "}
            <h1 className="text-xl">Earn while doing what you love</h1>
            <h3 className="text-md text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              inventore animi dolor illo fugiat magni.
            </h3>
          </div>
          <Link href="#">
            <Button className="p-[-1rem] rounded-full w-[8rem]" size="sm">
              Learn more
              <GoArrowUpRight />{" "}
            </Button>
          </Link>
        </div>
        <div className="bg-card rounded-[13px] h-fit w-[27rem] flex flex-col gap-[2rem] items-start justify-between  border-2 border-slate-600 px-[2rem] py-[3rem]">
          <div>
            {" "}
            <h1 className="text-xl">Earn while doing what you love</h1>
            <h3 className="text-md text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              inventore animi dolor illo fugiat magni.
            </h3>
          </div>
          <Link href="#">
            <Button className="p-[-1rem] rounded-full w-[8rem]" size="sm">
              Learn more
              <GoArrowUpRight />{" "}
            </Button>
          </Link>
        </div>
        <div className="bg-card rounded-[13px] h-fit w-[27rem] flex flex-col gap-[2rem] items-start justify-between  border-2 border-slate-600 px-[2rem] py-[3rem]">
          <div>
            {" "}
            <h1 className="text-xl">Earn while doing what you love</h1>
            <h3 className="text-md text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              inventore animi dolor illo fugiat magni.
            </h3>
          </div>
          <Link href="#">
            <Button className="p-[-1rem] rounded-full w-[8rem]" size="sm">
              Learn more
              <GoArrowUpRight />{" "}
            </Button>
          </Link>
        </div>
        <div className="bg-card rounded-[13px] h-fit w-[27rem] flex flex-col gap-[2rem] items-start justify-between  border-2 border-slate-600 px-[2rem] py-[3rem]">
          <div>
            {" "}
            <h1 className="text-xl">Earn while doing what you love</h1>
            <h3 className="text-md text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              inventore animi dolor illo fugiat magni.
            </h3>
          </div>
          <Link href="#">
            <Button className="p-[-1rem] rounded-full w-[8rem]" size="sm">
              Learn more
              <GoArrowUpRight />{" "}
            </Button>
          </Link>
        </div>
      </div> */}
      <div className="flex items-center justify-center gap-[3rem]">
        <GlowingStarsBackgroundCard>
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
        <GlowingStarsBackgroundCard>
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
        <GlowingStarsBackgroundCard>
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
      </div>
    </div>
  );
};

export default Features;
