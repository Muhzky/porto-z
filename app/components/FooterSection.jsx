export default function FooterSection() {
  return (
    <footer className="mt-16 pt-8 border-t border-zinc-200/40 dark:border-zinc-700/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm">
      {/* Copyright Section - Centered on mobile, left-aligned on desktop */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-zinc-500 dark:text-zinc-400 select-none">
        <span>© 2026</span>
        <span className=" dark:text-zinc-800 dark:text-zinc-200">
          Muh Zacky Wal Ikram
        </span>
        <span>All rights reserved.</span>
      </div>

      {/* Social Icons Section - Centered on mobile, right-aligned on desktop */}
      <div className="flex items-center justify-center sm:justify-end gap-5 text-zinc-500 dark:text-zinc-400">
        <a
          href="https://github.com/muhzky"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors p-1 hover:scale-110 transform duration-200"
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
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/muhzky"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors p-1 hover:scale-110 transform duration-200"
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
        <a
          href="https://instagram.com/elkiboi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors p-1 hover:scale-110 transform duration-200"
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
        <a
          href="mailto:qayza.celluler@gmail.com"
          className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors p-1 hover:scale-110 transform duration-200"
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
    </footer>
  );
}