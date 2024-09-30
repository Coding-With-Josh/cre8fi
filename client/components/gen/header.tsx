import { Bell, Menu, Search } from "lucide-react";
import Link from "next/link";

import { Logo } from "./logo";
import { UserButton } from "./user-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  toggleSidebar: () => void;
}

export const Header = ({ toggleSidebar }: Props) => {
  return (
    <header className="bg-slate-900 shadow-sm z-10 py-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between lg:justify-center gap-40">
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            <div className="hidden md:flex relative items-center w-[300px]">
              <Search className="mx-2 size-5 absolute shrink-0 opacity-50" />
              <Input className="w-full pl-10 rounded" placeholder="Search" />
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" size={"icon"}>
              <Bell className="text-slate-400" />
            </Button>
            <UserButton />
            <button onClick={toggleSidebar} className="lg:hidden">
              <Menu className="h-6 w-6 text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
