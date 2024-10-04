"use client";

import { LogIn, LogInIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed bg-transparent backdrop-blur-md border-b border-slate-900/60 shadow-lg w-screen z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="font-bold text-2xl text-primary">Cre8Fi</span>
            </Link>
          <div className="flex items-center">

            <div className="hidden md:block md: ml-10">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      pathname === item.path
                        ? "text-primary scale-105"
                        : "text-gray-300 hover:scale-105 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
               {/* <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300">Log In</Link> */}
              <Link href="/sign-up" className="ml-3 px-4 py-2 rounded-full text-sm font-medium text-white bg-primary/80 hover:bg-primary/30 transition-colors duration-300">Sign Up</Link> 
              {/* <button className="flex items-center gap-2 bg-gray-800/60 hover:bg-gray-800 transition-all px-4 py-2 rounded-[10px] border-2 border-white/5">
                <Link href="/login" className="">
                  Login
                </Link>
                <LogInIcon size={18}/>
              </button> */}

            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary focus:outline-none"
            >
              {/* <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg> */}
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="max-w-fit flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`mx-auto block px-3 py-2 rounded-md text-base font-medium transition-all ${
                pathname === item.path
                  ? "text-primary scale-105"
                  : "text-gray-300 hover:scale-105 hover:text-primary/60"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="block px-3 py-2 rounded-full text-base font-medium text-gray-300 hover:text-primary hover:bg-primary/5 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Log In
          </Link>
          <Link
            href="/sign-up"
            className="block px-3 py-2 rounded-full text-base font-medium text-white bg-primary/30 hover:bg-primary/80 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};


// "use client"

// import * as React from "react"
// import Link from "next/link"

// import { cn } from "@/lib/utils"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
// import { DownloadCloudIcon } from "lucide-react";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

// // export function Navbar() {
// //   return (
// //     <NavigationMenu>
// //       <NavigationMenuList>
// //         <NavigationMenuItem>
// //           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
// //           <NavigationMenuContent>
// //             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
// //               <li className="row-span-3">
// //                 <NavigationMenuLink asChild>
// //                   <a
// //                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
// //                     href="/"
// //                   >
// //                     <DownloadCloudIcon className="h-6 w-6" />
// //                     <div className="mb-2 mt-4 text-lg font-medium">
// //                       shadcn/ui
// //                     </div>
// //                     <p className="text-sm leading-tight text-muted-foreground">
// //                       Beautifully designed components built with Radix UI and
// //                       Tailwind CSS.
// //                     </p>
// //                   </a>
// //                 </NavigationMenuLink>
// //               </li>
// //               <ListItem href="/docs" title="Introduction">
// //                 Re-usable components built using Radix UI and Tailwind CSS.
// //               </ListItem>
// //               <ListItem href="/docs/installation" title="Installation">
// //                 How to install dependencies and structure your app.
// //               </ListItem>
// //               <ListItem href="/docs/primitives/typography" title="Typography">
// //                 Styles for headings, paragraphs, lists...etc
// //               </ListItem>
// //             </ul>
// //           </NavigationMenuContent>
// //         </NavigationMenuItem>
// //         <NavigationMenuItem>
// //           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
// //           <NavigationMenuContent>
// //             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
// //               {components.map((component) => (
// //                 <ListItem
// //                   key={component.title}
// //                   title={component.title}
// //                   href={component.href}
// //                 >
// //                   {component.description}
// //                 </ListItem>
// //               ))}
// //             </ul>
// //           </NavigationMenuContent>
// //         </NavigationMenuItem>
// //         <NavigationMenuItem>
// //           <Link href="/docs" legacyBehavior passHref>
// //             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
// //               Documentation
// //             </NavigationMenuLink>
// //           </Link>
// //         </NavigationMenuItem>
// //       </NavigationMenuList>
// //     </NavigationMenu>
// //   )
// // }

// // const ListItem = React.forwardRef<
// //   React.ElementRef<"a">,
// //   React.ComponentPropsWithoutRef<"a">
// // >(({ className, title, children, ...props }, ref) => {
// //   return (
// //     <li>
// //       <NavigationMenuLink asChild>
// //         <a
// //           ref={ref}
// //           className={cn(
// //             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
// //             className
// //           )}
// //           {...props}
// //         >
// //           <div className="text-sm font-medium leading-none">{title}</div>
// //           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
// //             {children}
// //           </p>
// //         </a>
// //       </NavigationMenuLink>
// //     </li>
// //   )
// // })
// // ListItem.displayName = "ListItem"
