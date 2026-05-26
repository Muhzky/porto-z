"use client";

import Image from "next/image";
import TypedTitle from "./TypedTitle";

// ... (import statements tetap sama)

export default function HeroSection() {
  return (
    <section id="introduction" className="scroll-mt-35 md:scroll-mt-35">
      {/* Top Row: Avatar Left, Info Right */}
      <div className="flex flex-row items-start gap-6 mb-2">
        {/* Avatar Column */}
        <div className="shrink-0">
          <div className="relative w-30 h-30 md:w-35 md:h-35 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-md bg-zinc-100 dark:bg-zinc-800">
            <Image
              src="/avatar.jpg"
              alt="Muh Zacky Wal Ikram Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Info Column (Name, Title, Location, Socials) */}
        <div className="flex-1 flex flex-col justify-center gap-2 pt-1">
          {/* Name & Verified Badge */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
                Muh Zacky Wal Ikram
              </h1>
              {/* Verified Badge moved here next to name */}
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-blue-500 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </div>

            {/* Title */}
            <div className="flex items-center gap-2">
              <TypedTitle
                strings={["Frontend Developer", "Graphic Designer"]}
                typingSpeed={100}
                deletingSpeed={50}
                pause={1500}
                className="text-sm md:text-base font-medium text-blue-600 dark:text-blue-400"
              />
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            <svg
              className="w-3.5 h-3.5 text-grey-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>Makassar, Sulawesi Selatan, Indonesia</span>
          </div>

          {/* Social Media Links - Minimalist Icons Only */}
          <div className="flex flex-nowrap items-center gap-5 my-2">
            {/* GitHub */}
            <a
              href="https://github.com/muhzky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/muhzky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/elkiboi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:qayza.celluler1@gmail.com"
              className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row: Description Full Width */}
      <div className="w-full">
        <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 mt-4 mb-2">
          Hai! Saya Muh Zacky Wal Ikram 👋
        </p>
        <span className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          Jr Frontend Dev & Graphic Designer yang antusias dalam menciptakan
          pengalaman digital yang modern, interaktif, dan mudah digunakan.
          Menikmati proses mengubah ide menjadi tampilan yang fungsional melalui
          code, desain UI yang konsisten, dan kerja tim yang efektif. Terbuka
          untuk peluang kerja maupun kolaborasi.
        </span>

        {/* Skills Badges Section - Full Width Below Description */}
        <div className="flex flex-wrap gap-2 mt-4">
          {/* Java */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-[#007396]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.965 12.506c.146-1.418.786-2.648 1.777-3.538.99-.89 2.266-1.394 3.618-1.394 1.352 0 2.628.504 3.618 1.394.99.89 1.63 2.12 1.777 3.538h1.98c-.15-1.94-1.016-3.737-2.442-5.056C13.866 6.13 11.988 5.37 10.018 5.37c-1.97 0-3.848.76-5.275 2.08-1.426 1.32-2.292 3.117-2.442 5.056h1.98zm10.783 0c-.146 1.418-.786 2.648-1.777 3.538-.99.89-2.266 1.394-3.618 1.394-1.352 0-2.628-.504-3.618-1.394-.99-.89-1.63-2.12-1.777-3.538H2.978c.15 1.94 1.016 3.737 2.442 5.056 1.427 1.32 3.305 2.08 5.275 2.08 1.97 0 3.848-.76 5.275-2.08 1.426-1.32 2.292-3.117 2.442-5.056h-1.98z" />
            </svg>
            Java
          </div>
          {/* PHP */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-[#777BB4]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.01 10.207c0 .797-.646 1.443-1.443 1.443s-1.443-.646-1.443-1.443.646-1.443 1.443-1.443 1.443.646 1.443 1.443zm10.98 0c0 .797-.646 1.443-1.443 1.443s-1.443-.646-1.443-1.443.646-1.443 1.443-1.443 1.443.646 1.443 1.443zM12 2L2 7l10 5 10-5-10-5zm0 12l-10-5v5l10 5 10-5v-5l-10 5z" />
            </svg>
            PHP
          </div>
          {/* Laravel */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-[#FF2D20]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Laravel
          </div>
          {/* Next.js */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.572 0c-.176 0-.304.015-.39.047a1.27 1.27 0 0 0-.28.175l-7.404 6.42a1.27 1.27 0 0 0-.175.28c-.032.086-.047.214-.047.39v15.353c0 .176.015.304.047.39.043.107.102.201.175.28.079.073.173.132.28.175.086.032.214.047.39.047h15.353c.176 0 .304-.015.39-.047a1.27 1.27 0 0 0 .28-.175l.28-.28a1.27 1.27 0 0 0 .175-.28c.032-.086.047-.214.047-.39V7.312c0-.176-.015-.304-.047-.39a1.27 1.27 0 0 0-.175-.28l-7.404-6.42a1.27 1.27 0 0 0-.28-.175C11.876.015 11.748 0 11.572 0zm-.047 2.813h.094l6.28 5.437h-6.374V2.813zm-1.875 1.875v13.125H2.813V4.688l6.837-5.906v5.906zm1.875 1.875h7.031v13.125h-7.031V6.563z" />
            </svg>
            Next.js
          </div>
          {/* React.js */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-[#61DAFB]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 0 0 0-4.278zm-8.081 3.498c.15 1.495.463 2.927.918 4.212.477 1.348 1.142 2.542 1.977 3.542.876 1.048 1.93 1.872 3.13 2.44 1.262.597 2.648.904 4.056.904 1.408 0 2.794-.307 4.056-.904 1.2-.568 2.254-1.392 3.13-2.44.835-1 1.5-2.194 1.977-3.542.455-1.285.768-2.717.918-4.212-.15-1.495-.463-2.927-.918-4.212-.477-1.348-1.142-2.542-1.977-3.542-.876-1.048-1.93-1.872-3.13-2.44-1.262-.597-2.648-.904-4.056-.904-1.408 0-2.794.307-4.056.904-1.2.568-2.254 1.392-3.13 2.44-.835 1-1.5 2.194-1.977 3.542-.455 1.285-.768 2.717-.918 4.212zm2.088 0c.133-1.23.404-2.39.796-3.41.412-1.073.96-1.99 1.628-2.71.696-.75 1.51-1.31 2.41-1.66.93-.36 1.92-.54 2.94-.54 1.02 0 2.01.18 2.94.54.9.35 1.714.91 2.41 1.66.668.72 1.216 1.637 1.628 2.71.392 1.02.663 2.18.796 3.41-.133 1.23-.404 2.39-.796 3.41-.412 1.073-.96 1.99-1.628 2.71-.696.75-1.51 1.31-2.41 1.66-.93.36-1.92.54-2.94.54-1.02 0-2.01-.18-2.94-.54-.9-.35-1.714-.91-2.41-1.66-.668-.72-1.216-1.637-1.628-2.71-.392-1.02-.663-2.18-.796-3.41z" />
            </svg>
            React.js
          </div>
          {/* Git */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-[#F05032]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.721.721 1.888 0 2.609-.719.719-1.889.719-2.611 0-.539-.541-.674-1.337-.404-1.996L12.72 8.82v6.525c.178.086.348.203.496.351.716.721.716 1.886 0 2.607-.719.721-1.886.721-2.607 0-.719-.721-.719-1.886 0-2.607.176-.175.379-.309.596-.404V8.695c-.217-.095-.42-.229-.596-.404-.545-.545-.676-1.348-.393-2.013L7.359 3.415 2.627 8.146c-.603.606-.603 1.584 0 2.188l10.48 10.477c.603.604 1.582.604 2.187 0l8.252-8.252c.604-.604.604-1.583 0-2.188z" />
            </svg>
            Git
          </div>
          {/* C++ */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-[#00599C]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2h2v8H9V8zm4 0h2v8h-2V8z" />
            </svg>
            C++
          </div>
          {/* Figma */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-[#F24E1E]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 2h4v4H8V2zm0 6h4v4H8V8zm0 6h4v4H8v-4zm6-12h4v4h-4V2zm0 6h4v4h-4V8zm0 6h4v4h-4v-4zm-6 6h4v2H8v-2zm6 0h4v2h-4v-2z" />
            </svg>
            Figma
          </div>
          {/* Photoshop */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-[#31A8FF]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2h2v2H9V8zm4 0h2v2h-2V8zm4 0h2v2h-2V8zm-8 4h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
            </svg>
            Photoshop
          </div>
          {/* Canva */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-xs font-semibold text-zinc-700 dark:text-zinc-200 shadow-sm hover:-translate-y-0.5 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-[#00C4CC]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z" />
            </svg>
            Canva
          </div>
        </div>
      </div>
    </section>
  );
}