"use client";

import { useState } from "react";

export default function ProjectsSection() {
  // State untuk mengontrol Project Accordion (null berarti tidak ada yang terbuka)
  const [openProjectId, setOpenProjectId] = useState(null);

  const handleToggle = (id) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  // Data Proyek
  const projectsData = [
    {
      id: 1,
      title: "Desa Ajakkang Digital Portal",
      shortDesc: "Fullstack Developer & Interactive Web Experiences.",
      fullDesc:
        "Developed a web-based village information system for Desa Ajakkang featuring public information management, content administration, and responsive user interface using Laravel, Boostrap, MySQL, & Git.",
      techStack: ["Laravel", "Boostrap", "MySQL", "Git"],
    },
    {
      id: 2,
      title: "Tanatoa Digital Platform",
      date: "2020 - 2022",
      shortDesc: "Fullstack Developer.",
      fullDesc:
        "Mobile application developed to provide digital information, services, and interactive user experience for Tanatoa using modern mobile development technologies.",
      techStack: ["Laravel", "Boostrap", "MySQL", "Git"],
    },
  ];

  return (
    <section
      id="work-experience"
      className="scroll-mt-32 md:scroll-mt-36 flex flex-col gap-6"
    >
      <div className="mb-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {projectsData.map((project) => {
          const isOpen = openProjectId === project.id;
          return (
            <div
              key={project.id}
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-blue-400  dark:border-blue-500"
                  : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 dark:bg-zinc-800"
              }`}
            >
              {/* Header Baris (Clickable) */}
              <button
                onClick={() => handleToggle(project.id)}
                className="w-full flex items-start justify-between p-5 text-left focus:outline-none group"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
  {project.title}
</h3>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 ml-1">
                  {/* Deskripsi Singkat (Hidden di Mobile) */}
                  <p className="hidden sm:block text-sm text-zinc-500 dark:text-zinc-400 max-w-[240px] text-right leading-snug">
                    {project.shortDesc}
                  </p>

                  {/* Ikon Panah */}
                  <svg
                    className={`w-5 h-5 text-zinc-400 dark:text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-500" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Konten Detail (Expandable) */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 pt-0">
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-700/50 flex flex-col gap-4">
                    {/* Deskripsi Lengkap */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.fullDesc}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 border border-blue-200 dark:border-blue-800/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}