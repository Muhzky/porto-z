export default function StudiesSection() {
  return (
    <section
      id="studies"
      className="scroll-mt-32 md:scroll-mt-36 flex flex-col gap-6"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">
        Journey
      </h2>
      <div className="flex flex-col gap-8">
        {/* Studies Entry 1 */}
        <div className="relative pl-6 border-l border-zinc-200 flex flex-col gap-2 group">
          <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors duration-300" />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
            <h3 className="text-base font-bold text-zinc-800">
              Universitas Dipa Makassar
            </h3>
            <span className="text-xs text-zinc-400 font-medium">
              2023 - Now
            </span>
          </div>
          <span className="text-xs font-semibold text-blue-600">
            Informatics Engineering (S.Kom.)
          </span>
          <p className="mt-1 text-xs md:text-sm text-zinc-500 leading-relaxed">
            The Informatics Engineering Study Program (S1) at DIPA University
            Makassar (UNDIPA) is one of the leading study programs that has been
            accredited as superior.
          </p>
        </div>
        {/* Studies Entry 2 */}
        <div className="relative pl-6 border-l border-zinc-200 flex flex-col gap-2 group">
          <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors duration-300" />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
            <h3 className="text-base font-bold text-zinc-800">
              SMKN 1 BANTAENG
            </h3>
            <span className="text-xs text-zinc-400 font-medium">
              2020 - 2023
            </span>
          </div>
          <span className="text-xs font-semibold text-blue-600">
            Computer and Network Engineering (TKJ)
          </span>
          <p className="mt-1 text-xs md:text-sm text-zinc-500 leading-relaxed">
            This department implements the Independent Curriculum (Computer
            Network and Telecommunication Engineering Expertise Program).
          </p>
        </div>
      </div>
    </section>
  );
}