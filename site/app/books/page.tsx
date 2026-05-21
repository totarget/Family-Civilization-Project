import Link from "next/link";
import { getVolume01Chapters } from "@/lib/content";

export default function BooksPage() {
  const chapters = getVolume01Chapters();

  return (
    <section className="section container">
      <p className="eyebrow">Books</p>
      <h1>The Family Civilization Trilogy</h1>

      <div className="grid-3">
        <Link className="card" href="/books/volume-01-relationships">
          <h3>Volume I: Relationships</h3>
          <p>Completed — {chapters.length || 80} sections. Parent-child relationships, boundaries, repair, and love.</p>
        </Link>
        <div className="card">
          <h3>Volume II: Ability</h3>
          <p>Coming next. Personality, agency, creativity, free will, and the capacity for happiness.</p>
        </div>
        <div className="card">
          <h3>Volume III: Business</h3>
          <p>Coming later. Contract, cooperation, value creation, wealth, and business ethics.</p>
        </div>
      </div>
    </section>
  );
}
