"use client";

import {
  AlertCircleIcon,
  ChartLineIcon,
  CircleDollarSign,
  LayoutDashboard,
  LucideMessageCircleQuestion,
  SettingsIcon,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Header } from "./header";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";

interface DashboardMenuProps {
  children: React.ReactNode;
  baseHref?: string;
}

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Marketplace",
    icon: ChartLineIcon,
    href: "/marketplace",
  },
  {
    label: "Earnings",
    icon: CircleDollarSign,
    href: "/earnings",
  },
  {
    label: "Help and FAQs",
    icon: AlertCircleIcon,
    href: "/help-and-faqs",
  },
  {
    label: "Terms of Service",
    icon: LucideMessageCircleQuestion,
    href: "/terms-of-service",
    subItems: [
      {
        label: "Policy",
        href: "/terms-of-service/policy/page.tsx",
      },
    ],
  },
  {
    label: "Profile",
    icon: User,
    href: "/profile",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
];

export function DashboardMenu({ children, baseHref }: DashboardMenuProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleTermsClick = () => {
    setShowPolicy(!showPolicy); // Toggle the visibility of the policy submenu
  };

  return (
    <div className="flex flex-col h-[982px] top-[39163px] left-[41285px] bg-deepBlue">
      {/* Top Navigation */}
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-deepGray shadow-lg transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static lg:inset-0 lg:top-16 lg:h-[calc(100vh-4rem)]`}
        >
          <div className="flex items-center justify-between p-4 border-b lg:hidden">
            <Logo />
            <button onClick={toggleSidebar}>
              <X className="h-6 w-6 text-lightGray" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              {navItems.map(({ label, href, icon, subItems }) => (
                <li key={href}>
                  <NavLink
                    label={label}
                    href={href}
                    baseHref={baseHref}
                    icon={icon}
                    onClick={
                      label === "Terms of Service"
                        ? handleTermsClick
                        : undefined
                    }
                  />
                  {/* Conditionally render Policy submenu if Terms of Service is clicked */}
                  {label === "Terms of Service" && showPolicy && subItems && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {subItems.map((subItem) => (
                        <li key={subItem.href}>
                          <NavLink
                            label={subItem.label}
                            href={subItem.href}
                            baseHref={baseHref}
                            icon={icon} // Reuse the parent icon or assign a new one if necessary
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-background p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

interface NavLinkPropType {
  label: string;
  href: string;
  baseHref?: string;
  icon: React.JSX;
  onClick?: () => void;
}

const NavLink = ({
  href,
  baseHref,
  label,
  icon: Icon,
  onClick,
}: NavLinkPropType) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center space-x-2 text-lightGray hover:text-primary hover:scale-105 transition duration-300 py-2 rounded px-1",
        (pathname === href ||
          (pathname.startsWith(href) && href !== baseHref)) &&
          "text-primary scale-105"
      )}
    >
      <Icon className="size-5" />
      <span>{label}</span>
    </Link>
  );
};
