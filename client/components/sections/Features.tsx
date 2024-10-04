"use client";

import React from "react";
import { EvervaultCard } from "../ui/evervault-card";
import { CardSpotlight } from "../ui/card-spotlight";
import { Button } from "../ui/moving-border";

const features = [
  {
    title: "",
  },
];

const Features = () => {
  return (
    <div className="animate-in px-4 mt-[5rem] flex flex-col items-center">
      <h1 className="bg-clip bg-gradient-to-b from-transparent to-primary font-[helvetica] p-2 rounded-[0.4rem] text-2xl">
        Our Features
      </h1>
      <CardSpotlight>
        <h1>Earn while doing what you love</h1>
        <h3>Participate in bounties and projects. Collaborate with others while making profit</h3>
        <Button className="p-3">Learn more</Button>
      </CardSpotlight>
    </div>
  );
};

export default Features;
