import Link from 'next/link';
import Nav from '@/app/lib/Nav';

export default function Page() {
  return (
    <>
      <Nav lang="en" />
      <main className="page">
        <section className="hero">
          <p className="eyebrow">Family Civilization Project</p>
          <h1>Please Treat the Child as a Person</h1>
          <p className="lead">
            An English-native edition for international readers, centered on dignity, freedom, love,
            and the rebuilding of family relationships.
          </p>
          <div className="actions">
            <Link className="button" href="/en/books/volume-01-relationships">Read Volume I: Relationships</Link>
            <Link className="button secondary" href="/en/humans-are-ends">Enter HUMANS ARE ENDS</Link>
          </div>
        </section>

        <section className="grid">
          <Link className="card feature-card" href="/en/humans-are-ends">
            <p className="eyebrow">Philosophical Foundation</p>
            <h2>HUMANS ARE ENDS</h2>
            <p>
              “Human beings are ends, not means” is the philosophical foundation of the project.
              This section traces the story of dignity, freedom, flourishing, family life, and AI ethics.
            </p>
          </Link>

          <Link className="card" href="/en/books">
            <h2>Books</h2>
            <p>Explore books and editions of the Family Civilization Project.</p>
          </Link>

          <Link className="card" href="/en/dictionary">
            <h2>Dictionary</h2>
            <p>Explore the core concepts of family civilization and human civilization.</p>
          </Link>
        </section>

        <footer className="footer">David / Liu Gang · Family Civilization Project</footer>
      </main>
    </>
  );
}
