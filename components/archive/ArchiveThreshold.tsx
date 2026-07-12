export default function ArchiveThreshold() {
  return (
    <section className="min-h-screen bg-[#090909] text-[#F5F5F2]">
      <div className="mx-auto flex h-screen max-w-5xl flex-col justify-center px-8">
        <header className="flex flex-col items-center text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.6em] text-white/60">
            House Eleven
          </p>

          <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
            ARCHIVE
          </h1>

          <hr
            aria-hidden="true"
            className="my-10 w-32 border-white/15"
          />

          <p className="max-w-md text-lg leading-relaxed text-white/70">
            Every chapter begins
            <br />
            long before it is seen.
          </p>
        </header>
      </div>
    </section>
  );
}