// "use client";

// import React from "react";
// import { Spotlight } from "../ui/spotlight";
// import { HoverBorderGradient } from "../ui/hover-border-gradient";
// import Image from "next/image";
// import { TextHoverEffect } from "../ui/text-hover-effect";

// const Hero = () => {
//   return (
//     <>
//       <div className="flex p-[8rem] items-center justify-center w-screen h-screen z-[-30rem] bg-gradient-to-b from-transparent to-background">
//         <TextHoverEffect text="CRE8FI" />
//       </div>
//       <div className="flex flex-col items-center justify-center w-full h-full">
//         <div className="flex items-center justfify-between w-full h-full z-[30rem]">
//           <h1 className="text-3xl text-white font-bold">
//             EXPERIENCE NEW <br />
//             OPPORTUNITIES <br /> WITH{" "}
//             <span className="text-primary font-bold">CRE8FI</span>
//           </h1>
//           <Image
//             src={require("@/assets/Rocket-removebg.png")}
//             width={100}
//             height={100}
//             alt="rocket"
//           />
//           <h1 className="text-lg">
//             Transforming your creativity<br/> into cryptocurrency with <br/>our web3
//             platform
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;
"use client";

import React from "react";
import { Spotlight } from "../ui/spotlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Image from "next/image";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* <div className="absolute z-[-1000rem] top-0 left-0 flex p-[12rem] items-center justify-center w-screen h-screen bg-gradient-to-b from-transparent to-background">
        <TextHoverEffect
          text="CRE8FI"
          className="absolute z-[-1000rem] top-0 left-0"
        />
      </div> */}
      <div className="lg:flex flex-col items-center justify-center w-full px-[3rem] lg:px-[22rem] md:px-[15px] hidden gap-[4rem] mt-[9rem]">
        <div className="flex items-center justify-between w-full z-[30rem]">
          <h1 className="text-3xl text-white font-bold">
            EXPERIENCE NEW <br />
            OPPORTUNITIES <br /> WITH{" "}
            <span className="bg-clip bg-gradient-to-b from-transparent to-primary font-bold p-2 rounded-[0.4rem]">CRE8FI</span>
          </h1>
          <Image
            src={require("@/public/assets/Rocket-removebg.png")}
            width={100}
            height={100}
            alt="rocket"
          />
          <h1 className="text-lg">
            Transforming your creativity
            <br className="hidden lg:block" /> into cryptocurrency with <br className="hidden lg:block" />
            our web3 platform
          </h1>
        </div>
        <div className="flex items-center justify-center gap-[2rem] z-[30rem]">
          <Link href="#join_waitlist"><Button>Join the waitlist</Button></Link>
          <Link href="/sign-up">
          <Button variant={"secondary"}>View Demo</Button></Link>
        </div>
        {/* <Image
            src={require("@/assets/Sphere_Ripple-removebg-preview.png")}
            width={600}
            height={600}
            alt="rocket"
            // className="h-[20rem] w-[20rem]"
          /> */}
      </div>
      <div className="flex flex-col items-center justify-center w-full px-[3rem] lg:hidden  gap-[4rem] mt-[9rem]">
        <div className="flex flex-col items-center justify-between w-full z-[30rem] text-center gap-[1.3rem]">
          <h1 className="text-3xl text-white font-bold">
            EXPERIENCE NEW <br />
            OPPORTUNITIES <br /> WITH{" "}
            <span className="bg-clip bg-gradient-to-b from-transparent to-primary font-bold p-2 rounded-[0.4rem]">CRE8FI</span>
          </h1>
          <h1 className="text-lg">
            Transforming your creativity
            <br /> into cryptocurrency with <br />
            our web3 platform
          </h1>
        </div>
        <div className="flex items-center justify-center gap-[2rem] z-[30rem]">
          <Link href="#join_waitlist"><Button>Join the waitlist</Button></Link>
          <Link href="/sign-up">
          <Button variant={"secondary"}>View Demo</Button></Link>
        </div>
        {/* <Image
            src={require("@/assets/Sphere_Ripple-removebg-preview.png")}
            width={600}
            height={600}
            alt="rocket"
            // className="h-[20rem] w-[20rem]"
          /> */}
      </div>
    </>
  );
};

export default Hero;
