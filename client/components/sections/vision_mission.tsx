import { Plus, Target } from "lucide-react";
import React from "react";

export const Vission_Mission = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 px-4 md:px-8 lg:px-16 mt-16">
      {/* Top Plus icons */}
      <div className="w-full flex items-center justify-between text-primary text-2xl">
        <Plus size={32} />
        <Plus size={32} />
        <Plus size={32} />
      </div>

      {/* Mission Statement */}
      <div className="min-h-fit w-full flex flex-col lg:flex-row items-center justify-between border border-primary p-4 md:px-8 md:py-6">
        <h1 className="text-xl md:text-2xl font-medium text-center lg:text-left mb-4 lg:mb-0">
          Empower creators, foster
          <br /> collaborations, ensure
          <br /> transparency, and drive
          <br /> community growth
        </h1>
        <div className="bg-gradient-to-t from-primary to-background min-h-[7rem] min-w-[12rem] md:min-w-[15rem] flex items-center justify-center text-[28px] md:text-[35px] px-4 md:px-6 font-bold gap-2">
          OUR MISSION
          <Target size={28} size={35} />
        </div>
      </div>

      {/* Vision Statement */}
      <div className="min-h-fit w-full flex flex-col lg:flex-row items-center justify-between border border-primary p-4 md:px-8 md:py-6">
        <div className="bg-gradient-to-b from-primary to-background min-h-[7rem] min-w-[12rem] md:min-w-[15rem] flex items-center justify-center text-[28px] md:text-[35px] px-4 md:px-6 font-bold gap-2">
          OUR VISION
          <Target size={28} size={35} />
        </div>
        <h1 className="text-xl md:text-2xl font-medium text-center lg:text-right mt-4 lg:mt-0">
          Cre8Fi is a decentralized social
          <br /> media on Solana, empowering <br />
          creators, fostering collaboration,
          <br /> and ensuring transparency with <br />
          fair rewards
        </h1>
      </div>

      {/* Bottom Plus icons */}
      <div className="w-full flex items-center justify-between text-primary text-2xl">
        <Plus size={32} />
        <Plus size={32} />
        <Plus size={32} />
      </div>
    </div>
  );
};
