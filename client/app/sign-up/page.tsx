import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useState } from 'react';
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

 // const handleSignup = () => {

 // };



const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="w-fit md:border-2 lg:border-2 flex flex-col items md:border-white/10 lg:border-white/10 rounded-[7px] py-4 px-12 md:bg-blue-900/10 lg:bg-blue-900/10 sm:bg-transparent backdrop-blur-md ">
        <div className="my-4">
          <h1 className="text-xl">Create an account</h1>
          <h3 className="text-sm text-muted-foreground">
            Joining the crowd is as easy as a click. Sign up now.
          </h3>
        </div>{" "}
        <div className="flex items-center justify-center space-x-4">
          <Button
            className="flex items-center justify-center space-x-2 text-white rounded-[8px]"
            variant={"outline"}
          >
            <span className="bg-white/15 p-[5px] rounded-full">
              <IconBrandGoogle size={17} />
            </span>
          </Button>
          <Button
            className="flex items-center justify-center space-x-2 text-white rounded-[8px]"
            variant={"outline"}
          >
            <span className="bg-white/15 p-[5px] rounded-full">
              <Github size={17} />
            </span>
          </Button>
        </div>
        <form className="flex flex-col space-y-5 mt-3">
          <div className="flex flex-col space-y-2">
            <Label className="text-gray">Username</Label>
            <Input placeholder="example123" autoSave="true" autoFocus />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-gray">Email</Label>
            <Input placeholder="example@stuff.com" autoFocus autoSave="true" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-gray">Password</Label>
            <Input placeholder="password" security="true" hidden />
          </div>
          <Link href="/onboarding" className="w-full">
            <Button>Continue</Button>
          </Link>{" "}
          <div className="flex items-center justify-center space-x-1">
            <div className="h-[2px] w-[4rem] bg-white/10" />
            <span className="text-sm text-muted-foreground">
              OR CONTINUE WITH
            </span>
            <div className="h-[2px] w-[4rem] bg-white/10" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Button
              className="flex items-center justify-center space-x-2 text-white rounded-[8px] w-[15rem]"
              variant={"secondary"}
            >
              <span className="bg-white/15 p-[5px] rounded-full">
                <IconBrandGoogle size={17} />
              </span>
              {""}
              <span>Google</span>
            </Button>
            <Button
              className="flex items-center justify-center space-x-2 text-white rounded-[8px] w-[15rem]"
              variant={"secondary"}
            >
              <span className="bg-white/15 p-[5px] rounded-full">
                <Github size={17} />
              </span>
              {""}
              <span>Github</span>
            </Button>
          </div>
        </form>
      </div>

      {/* <div className="w-full flex flex-col items-center justify-center">
        <div className="my-4">
          <h1 className="text-xl">Create an account</h1>
          <h3 className="text-sm text-muted-foreground">
            Joining the crowd is as easy as a click. Sign up now.
          </h3>
        </div>{" "}
        <form className="flex flex-col space-y-5 mt-3">
          <div className="flex flex-col space-y-2">
            <Label className="text-gray">Username</Label>
            <Input
              className="bg-transparent backdrop-blur-xl border rounded-[6.5px] border-blue-800/10 px-2 py-4 text-gray-100 placeholder:text-muted-foreground focus-visible:ring-neutral-600"
              placeholder="example123"
              autoSave="true"
              autoFocus
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-gray">Email</Label>
            <Input
              className="bg-transparent backdrop-blur-xl border rounded-[6.5px] border-blue-800/10 px-2 py-4 text-gray-100 placeholder:text-muted-foreground focus-visible:ring-neutral-600"
              placeholder="example@stuff.com"
              autoFocus
              autoSave="true"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-gray">Password</Label>
            <Input
              className="bg-transparent backdrop-blur-xl border rounded-[6.5px] border-blue-800/10 px-2 py-4 text-gray-100 placeholder:text-muted-foreground focus-visible:ring-neutral-600"
              placeholder="password"
              security="true"
              hidden
            />
          </div>
          <Button className="text-white rounded-[8px]">Continue</Button>
          <div className="flex items-center justify-center space-x-1">
            <div className="h-[2px] w-[4rem] bg-white/10" />
            <span className="text-sm text-muted-foreground">
              OR CONTINUE WITH
            </span>
            <div className="h-[2px] w-[4rem] bg-white/10" />
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <Button
              className="flex items-center justify-start pl-7 space-x-2 text-white rounded-[8px] w-[15rem]"
              variant={"secondary"}
            >
              <span className="bg-white/15 p-[5px] rounded-full">
                <IconBrandGoogle size={17} />
              </span>
              {""}
              <span>Google</span>
            </Button>
            <Button
              className="flex items-center justify-start pl-7 space-x-2 text-white rounded-[8px] w-[15rem]"
              variant={"secondary"}
            >
              <span className="bg-white/15 p-[5px] rounded-full">
                <Github size={17} />
              </span>
              {""}
              <span>Github</span>
            </Button>
          </div>
        </form>
      </div>
      <Separator orientation="vertical" className="" />
      <div className="w-full h-full bg-blue-800/20 flex items-center justify-center">
        <Image
          src={require("@/assets/solflare.jpg")}
          // width={70}
          // height={70}
          alt="Phone"
          className="w-[40rem] h-[40rem]"
        />
      </div> */}
    </div>
  );
};

export default SignUp;
