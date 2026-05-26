"use client";

import { useState } from "react";

interface SkillIconProps {
  name: string;
}

export default function SkillIcon({ name }: SkillIconProps) {
  const [hovered, setHovered] = useState(false);

  // Return SVG path and brand color for each skill
  const getSkillData = (skill: string) => {
    switch (skill.toLowerCase()) {
      case "react":
        return {
          color: "text-sky-400 group-hover:bg-sky-500/10",
          displayName: "React",
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="2" />
              <path d="M12 2A15.3 15.3 0 0 1 12 22 15.3 15.3 0 0 1 12 2Z" transform="rotate(30 12 12)" />
              <path d="M12 2A15.3 15.3 0 0 1 12 22 15.3 15.3 0 0 1 12 2Z" transform="rotate(90 12 12)" />
              <path d="M12 2A15.3 15.3 0 0 1 12 22 15.3 15.3 0 0 1 12 2Z" transform="rotate(150 12 12)" />
            </svg>
          ),
        };
      case "nextjs":
      case "next.js":
        return {
          color: "text-zinc-900 dark:text-zinc-100 group-hover:bg-zinc-500/10",
          displayName: "Next.js",
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M16 8l-6 8h-1.5v-8" />
              <path d="M16 8v8" />
            </svg>
          ),
        };
      case "typescript":
      case "ts":
        return {
          color: "text-blue-500 group-hover:bg-blue-500/10",
          displayName: "TypeScript",
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
              <path d="M7 8h4" />
              <path d="M9 8v8" />
              <path d="M14 12c1 0 2 .5 2 1.5s-1 1.5-2 1.5h-1v-6h3" />
            </svg>
          ),
        };
      case "javascript":
      case "js":
        return {
          color: "text-yellow-500 group-hover:bg-yellow-500/10",
          displayName: "JavaScript",
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
              <path d="M10 15a2.5 2.5 0 0 0 4 0" />
              <path d="M8 8v4" />
              <path d="M16 8v4" />
            </svg>
          ),
        };
      case "tailwind":
      case "tailwindcss":
        return {
          color: "text-cyan-400 group-hover:bg-cyan-500/10",
          displayName: "Tailwind CSS",
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 7.5C13.5 5 16.5 5 18 6.5s.5 4.5-2 6-4.5.5-6-1-1-4.5 2-6Z" />
              <path d="M6 13.5C7.5 11 10.5 11 12 12.5s.5 4.5-2 6-4.5.5-6-1-1-4.5 2-6Z" />
            </svg>
          ),
        };
      case "figma":
        return {
          color: "text-orange-500 group-hover:bg-orange-500/10",
          displayName: "Figma",
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H10v5H7.5A2.5 2.5 0 0 1 5 5.5z" />
              <path d="M14 5.5A2.5 2.5 0 0 1 16.5 3H19v5h-2.5A2.5 2.5 0 0 1 14 5.5z" />
              <path d="M5 12.5A2.5 2.5 0 0 1 7.5 10H10v5H7.5A2.5 2.5 0 0 1 5 12.5z" />
              <path d="M10 15h2.5a2.5 2.5 0 0 1 0 5H10v-5z" />
              <path d="M10 10h4a2.5 2.5 0 0 1 0 5h-4v-5z" />
            </svg>
          ),
        };
      case "nodejs":
      case "node":
        return {
          color: "text-emerald-500 group-hover:bg-emerald-500/10",
          displayName: "Node.js",
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
              <path d="m12 22V12" />
              <path d="M12 12L2 7" />
              <path d="M22 7l-10 5" />
              <path d="M17 9.5l-5 2.5" />
            </svg>
          ),
        };
      case "git":
        return {
          color: "text-red-500 group-hover:bg-red-500/10",
          displayName: "Git",
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M6 9v6" />
              <path d="M9 9h3a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h0" />
            </svg>
          ),
        };
      default:
        return {
          color: "text-zinc-500 group-hover:bg-zinc-500/10",
          displayName: skill,
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          ),
        };
    }
  };

  const data = getSkillData(name);

  return (
    <div
      className="group relative flex flex-col items-center justify-center p-4 rounded-2xl glass transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`p-3 rounded-xl transition-all duration-300 ${data.color} bg-zinc-500/5`}>
        {data.svg}
      </div>
      
      <span className="mt-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 transition-colors">
        {data.displayName}
      </span>

      {/* Tooltip */}
      <div
        className={`absolute bottom-full mb-2.5 px-2.5 py-1 rounded bg-zinc-900 text-zinc-50 text-[10px] font-semibold whitespace-nowrap shadow-lg transition-all duration-200 pointer-events-none ${
          hovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
        }`}
      >
        {data.displayName}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
      </div>
    </div>
  );
}
