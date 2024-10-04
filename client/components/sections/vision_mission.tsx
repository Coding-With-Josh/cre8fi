import { Plus, Target } from "lucide-react";
import React from "react";

export const Vission_Mission = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-[2rem] px-[8rem] mt-[5rem]">
      <div className="w-full flex items-center justify-between text-primary text-2xl">
        <Plus size={32} />
        <Plus size={32} />
        <Plus size={32} />
      </div>
      <div className="min-h-fit min-w-full flex items-center justify-between border border-primary px-[4rem] py-[2rem]">
        <h1 className="text-2xl font-medium">
          Empower creators, foster
          <br /> collaborations, ensure
          <br /> transparency, and drive
          <br /> community growth
        </h1>
        <div className="bg-gradient-to-t from-primary to-background min-h-[7rem] min-w-[15rem] flex items-center justify-center text-[35px] px-[3rem] font-bold gap-2">
          OUR MISSION
          <Target size={35} />
        </div>
      </div>
      <div className="min-h-fit min-w-full flex items-center justify-between border border-primary px-[4rem] py-[2rem]">
        <div className="bg-gradient-to-b from-primary to-background min-h-[7rem] min-w-[15rem] flex items-center justify-center text-[35px] px-[3rem] font-bold gap-2">
          OUR VISION <Target size={35} />
        </div>
        <h1 className="text-2xl font-medium">
          Cre8Fi is a decentralized social
          <br /> media on Solana, empowering <br />
          creators, fostering collaboration,
          <br /> and ensuring transparency with <br />
          fair rewards
        </h1>
      </div>
      <div className="w-full flex items-center justify-between text-primary text-2xl">
        <Plus size={32} />
        <Plus size={32} />
        <Plus size={32} />
      </div>
      <div></div>
    </div>
  );
};
