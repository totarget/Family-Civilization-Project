import Link from 'next/link';
import Nav from '@/app/lib/Nav';

export default function HumansAreEndsEnPage() {
  return (
    <>
      <Nav lang="en" />

      <main className="container">
        <section>
          <p className="eyebrow">Philosophical Foundation</p>
          <h1 className="h1">HUMANS ARE ENDS</h1>
          <p className="lead">Human beings are ends, not means.</p>
          <p className="muted">
            This section is the philosophical foundation of the Family Civilization Project.
            It begins with ancient Greek philosophy and moves toward dignity, freedom,
            Kant, family civilization, and AI ethics.
          </p>
        </section>

        <section className="cards">
          <Link className="card" href="/en/humans-are-ends/001-why-humans-are-ends-matters-to-family-civilization">
            <h3>Why “Humans Are Ends” Matters to Family Civilization</h3>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/002-socrates-the-examined-life-and-the-human-soul">
            <h3>Socrates: The Examined Life and the Human Soul</h3>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/003-plato-justice-soul-and-the-danger-of-turning-people-into-functions">
            <h3>Plato: Justice, the Soul, and the Danger of Turning People into Functions</h3>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/004-aristotle-flourishing-and-the-family-as-first-soil">
            <h3>Aristotle: Flourishing and the Family as the First Soil</h3>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/005-stoicism-citizens-of-the-world-and-inner-dignity">
            <h3>Stoicism: Citizens of the World and Inner Dignity</h3>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/006-from-ancient-philosophy-to-family-civilization">
            <h3>From Ancient Philosophy to Family Civilization</h3>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
        </section>
      </main>

      <footer className="footer">
        <Link href="/en">Back to English Home</Link>
      </footer>
    </>
  );
}
