"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      id: "introduction",
      label: "About",
      icon: (
        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      id: "work-experience",
      label: "Projects",
      icon: (
        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      id: "studies",
      label: "Journey",
      icon: (
        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      id: "certificates",
      label: "Certificate",
      icon: (
        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
  ];

  const baseHeaderClasses = "fixed top-5 left-0 right-0 z-50 flex justify-center transition-all duration-300";
  const scrolledClasses = isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-zinc-200/40 dark:border-zinc-800/40 shadow-md" : "bg-transparent";
  const paddingClasses = "py-0.5 px-2";

const navItemButtonClasses = (active) =>
    `flex items-center gap-1 px-1.5 py-0.5 text-xs md:text-sm rounded-full transition-all duration-300 font-normal ${
      active
        ? "bg-zinc-200/60 text-zinc-950 dark:bg-zinc-800/80 dark:text-zinc-50"
        : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40"
    }`;


  return (
    <header className={baseHeaderClasses}>
      <nav className={`${scrolledClasses} ${paddingClasses} rounded-full flex items-center gap-2 max-w-fit shadow-lg dark:shadow-none`}>
        {/* Home / About button */}

        {/* <button
          onClick={() => onNavClick("introduction")}
          className={`p-2 rounded-full transition-all duration-300 ${
            activeSection === "introduction"
              ? "bg-zinc-200/60 text-zinc-950 dark:bg-zinc-800/80 dark:text-zinc-50 font-semibold"
              : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40"
          }`}
          aria-label="Home"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </button> */}

        {/* Navigation items with icons */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={navItemButtonClasses(activeSection === item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
        

        {/* <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800 mx-1" /> */}


        {/* Theme Toggle Button built into the navbar capsule */}
        
        {/* <ThemeToggle className="!p-2.5" /> */}
      </nav>
    </header>
  );
}
