export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="scroll-mt-32 md:scroll-mt-36 flex flex-col gap-6"
    >
      {/* PERBAIKAN FINAL: Gunakan ! untuk memaksa warna putih di dark mode */}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">
        Certificate
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {/* Cert 1 */}
        <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
          <img src="/certificate/certi-1.png" alt="Certificate 1" className="aspect-video w-full transition duration-300 group-hover:scale-105" />
        </div>
        {/* Cert 2 */}
        <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
          <img src="/certificate/certi-2.png" alt="Certificate 2" className="aspect-video w-full transition duration-300 group-hover:scale-105" />
        </div>
        {/* Cert 3 */}
        <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
          <img src="/certificate/certi-3.png" alt="Certificate 3" className="aspect-video w-full transition duration-300 group-hover:scale-105" />
        </div>
        {/* Cert 4 */}
        <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
          <img src="/certificate/certi-4.jpg" alt="Certificate 4" className="aspect-video w-full transition duration-300 group-hover:scale-105" />
        </div>
        {/* Cert 5 */}
        <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
          <img src="/certificate/certi-5.jpg" alt="Certificate 5" className="aspect-video w-full transition duration-300 group-hover:scale-105" />
        </div>
        {/* Cert 6 */}
        <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
          <img src="/certificate/certi-6.jpg" alt="Certificate 6" className="aspect-video w-full transition duration-300 group-hover:scale-105" />
        </div>
      </div>
    </section>
  );
}