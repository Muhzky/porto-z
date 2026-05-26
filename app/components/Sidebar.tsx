"use client";

interface SidebarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "work-experience", label: "Work Experience" },
    { id: "studies", label: "Studies" },
    { id: "technical-skills", label: "Technical skills" },
  ];

  return (
    <aside className="hidden lg:flex flex-col gap-6 fixed left-12 top-48 w-48 z-40 select-none">
      <nav className="flex flex-col gap-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onNavClick(section.id)}
              className="group flex items-center gap-3 text-left focus:outline-none transition-all duration-300"
            >
              {/* Horizontal line indicator */}
              <span
                className={`h-[2px] transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-zinc-800 dark:bg-zinc-200"
                    : "w-4 bg-zinc-300 dark:bg-zinc-700 group-hover:w-6 group-hover:bg-zinc-500"
                }`}
              />
              {/* Section label text */}
              <span
                className={`text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                  isActive
                    ? "text-zinc-950 dark:text-zinc-50 font-bold"
                    : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300"
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
