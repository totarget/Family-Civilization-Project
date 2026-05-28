import Link from 'next/link';
import Nav from '@/app/lib/Nav';

export default function EnHomePage() {
  return (
    <>
      <Nav lang="en" />

      <main className="container">
        <section className="hero">
          <div>
            <p className="eyebrow">Family Civilization Project</p>
            <h1 className="h1">Please Treat the Child as a Person</h1>
            <p className="lead">
              A long-term civilization project to rebuild family relationships, human dignity, parent-child boundaries,
              and future AI-supported family civilization.
            </p>
            <Link className="button" href="/en/books/volume-01-relationships">
              Read Volume I: Relationships
            </Link>
          </div>

          <div className="heroimg" aria-hidden="true">
            <img src="/logo.png" alt="" />
          </div>
        </section>

        <section className="cards">
          <Link className="card" href="/en/humans-are-ends">
            <p className="eyebrow">Philosophical Foundation</p>
            <h3>HUMANS ARE ENDS</h3>
            <p>
              “Human beings are ends, not means” is the philosophical foundation of the project: dignity, freedom,
              flourishing, family life, and AI ethics.
            </p>
          </Link>

          <Link className="card" href="/en/books">
            <h3>Books</h3>
            <p>Explore books and editions of the Family Civilization Project.</p>
          </Link>

          <Link className="card" href="/en/dictionary">
            <h3>Dictionary</h3>
            <p>Explore the core concepts of family civilization and human civilization.</p>
          </Link>

          <Link className="card" href="/en/videos">
            <h3>Videos</h3>
            <p>Long-form YouTube videos and short-video archives.</p>
          </Link>

          <Link className="card" href="/en/ai-advisor">
            <h3>AI Family Civilization Advisor</h3>
            <p>A local-first, privacy-protecting AI system for family memory and relationship understanding.</p>
          </Link>

          <Link className="card" href="/en/about">
            <h3>About</h3>
            <p>Learn about David / Liu Gang and the long-term mission of the project.</p>
          </Link>
        </section>
      </main>

      <footer className="footer">David / Liu Gang · Family Civilization Project</footer>
    </>
  );
}
