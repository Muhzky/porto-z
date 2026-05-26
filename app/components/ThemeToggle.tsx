// "use client";

// import { useEffect, useState } from "react";

// interface ThemeToggleProps {
//   className?: string;
// }

// export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     // Check local storage or system preference on mount
//     const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
//     const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.classList.remove("light", "dark");
//       document.documentElement.classList.add(savedTheme);
//     } else if (systemPrefersDark) {
//       setTheme("dark");
//       document.documentElement.classList.remove("light", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       setTheme("light");
//       document.documentElement.classList.remove("light", "dark");
//       document.documentElement.classList.add("light");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
    
//     document.documentElement.classList.remove("light", "dark");
//     document.documentElement.classList.add(newTheme);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className={`relative p-2.5 rounded-none border-0 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none ${
//         theme === "dark" 
//           ? "text-yellow-400" 
//           : "text-zinc-800" 
//       } ${className}`}
//       aria-label="Toggle theme"
//     >
//       <div className="relative w-5 h-5 overflow-hidden">
//         {/* Sun Icon */}
//         <svg
//           className={`absolute inset-0 w-5 h-5 transform transition-all duration-500 ${
//             theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
//           }`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           viewBox="0 0 24 24"
//         >
//           <circle cx="12" cy="12" r="4" />
//           <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
//         </svg>
//         {/* Moon Icon */}
//         <svg
//           className={`absolute inset-0 w-5 h-5 transform transition-all duration-500 ${
//             theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
//           }`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//         </svg>
//       </div>
//     </button>
//   );
// }
