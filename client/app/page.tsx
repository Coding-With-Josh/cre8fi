import Features from "@/components/sections/Features";
import Hero from "@/components/sections/hero";
import { Navbar } from "@/components/sections/Navbar";
import { Vission_Mission } from "@/components/sections/vision_mission";
import { WaitlistForm } from "@/components/sections/waitlist_form";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-white" />,
  },
];

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background flex flex-col items-center">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

      <div className="flex flex-col items-center h-screen w-screen"> 
        <Navbar />
        <Hero />
         <Vission_Mission /> 
         <Features/>
         <WaitlistForm/>
     </div>
    </div>
  );
}
