import Link from 'next/link';

export default function HumansAreEndsEnPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 text-sm"><Link href="/en">← Back Home</Link></div>
        <p className="text-sm tracking-[0.24em] uppercase text-neutral-500">Philosophical Foundation</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">HUMANS ARE ENDS</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
          This section is the philosophical foundation of the Family Civilization Project. The first Chinese batch has been prepared, beginning with ancient Greek philosophy and moving toward Kant, human dignity, family civilization, and AI ethics. A native English edition will be expanded in later updates.
        </p>
      </section>
    </main>
  );
}
