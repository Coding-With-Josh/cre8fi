import React from "react";
import { Spotlight } from "../ui/spotlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-[8.5rem] flex flex-col items-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <h1 className="animate-in font-mono text-[1.7rem] md:[2rem] lg:[2.5rem] xl:[3rem] text-center">
        Unlock your earning potential <br /> with {""}{" "}
        <span className="text-primary">Cre8Fi</span>{" "}
      </h1>
      <h2 className="mt-4 mb-6 text-center text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
        Empowering creators to monetize their passion. Discover innovative tools
        and strategies to maximize your income and build a sustainable career
        doing what you love.
      </h2>
      <HoverBorderGradient
        containerClassName="rounded-[1.5rem]"
        as="button"
        className="bg-primary/30 text-white flex items-center space-x-2"
      >
        <Link href='/sign-up'>Join the space</Link>
      </HoverBorderGradient>
    </div>
  );
};

export default Hero;
