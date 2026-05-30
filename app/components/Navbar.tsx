"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({
  activeSection,
  onNavClick,
}: NavbarProps) {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navItems = [
    {
      id: "introduction",
      label: "About",
      icon: (
        <svg
          className="w-4 h-4 mr-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        <svg
          className="w-5 h-5 align-middle"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        <svg
          className="w-5 h-5 align-middle"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },

    {
      id: "certificates",
      label: "Certificate",
      icon: (
        <svg
          className="w-5 h-5 align-middle"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
  ];

  const baseHeaderClasses =
    "fixed top-5 left-0 right-0 z-50 flex justify-center transition-all duration-300";

  const scrolledClasses = isScrolled
    ? "bg-white/90 backdrop-blur-md border border-zinc-200/40 shadow-md"
    : "bg-transparent";

  const paddingClasses = "py-2 px-3";

  const navItemButtonClasses = (
    active: boolean
  ) =>
    `flex items-center gap-1
     shrink-0
     px-2 sm:px-3
     py-1
     leading-none
     text-[11px] sm:text-sm
     rounded-full
     transition-all duration-300
     font-normal
     mr-1 sm:mr-2
     last:mr-0
     ${
       active
         ? "bg-zinc-200/60 text-zinc-950"
         : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100/50"
     }`;

  return (
    <header className={`${baseHeaderClasses} px-3`}>

      <nav
        className={`
          ${scrolledClasses}
          ${paddingClasses}
          rounded-full
          flex items-center
          gap-1
          max-w-full
          overflow-x-auto
          whitespace-nowrap
          shadow-lg
          scrollbar-hide
        `}
      >

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={navItemButtonClasses(
              activeSection === item.id
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}

      </nav>

    </header>
  );
}