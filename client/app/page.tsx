import Features from "@/components/sections/Features";
import Hero from "@/components/sections/hero";
import { Navbar } from "@/components/sections/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Head from "next/head";

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
    <div className="flex flex-col items-center relative h-screen w-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
