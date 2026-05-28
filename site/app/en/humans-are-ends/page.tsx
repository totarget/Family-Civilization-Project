import Link from 'next/link';
import Nav from '@/app/lib/Nav';

export default function HumansAreEndsEnPage() {
  return (
    <>
      <Nav lang="en" />
      <main className="page">
        <section className="hero">
          <p className="eyebrow">Philosophical Foundation</p>
          <h1>HUMANS ARE ENDS</h1>
          <p className="lead">Human beings are ends, not means.</p>
          <p>
            This section is the philosophical foundation of the Family Civilization Project.
            It begins with ancient Greek philosophy and moves toward dignity, freedom,
            Kant, family civilization, and AI ethics.
          </p>
        </section>

        <section className="grid">
          <Link className="card" href="/en/humans-are-ends/001-why-humans-are-ends-matters-to-family-civilization">
            <h2>Why “Humans Are Ends” Matters to Family Civilization</h2>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/002-socrates-the-examined-life-and-the-human-soul">
            <h2>Socrates: The Examined Life and the Human Soul</h2>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/003-plato-justice-soul-and-the-danger-of-turning-people-into-functions">
            <h2>Plato: Justice, the Soul, and the Danger of Turning People into Functions</h2>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/004-aristotle-flourishing-and-the-family-as-first-soil">
            <h2>Aristotle: Flourishing and the Family as the First Soil</h2>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/005-stoicism-citizens-of-the-world-and-inner-dignity">
            <h2>Stoicism: Citizens of the World and Inner Dignity</h2>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
          <Link className="card" href="/en/humans-are-ends/006-from-ancient-philosophy-to-family-civilization">
            <h2>From Ancient Philosophy to Family Civilization</h2>
            <p>A story-based philosophical path connecting dignity, freedom, and family civilization.</p>
          </Link>
        </section>

        <footer className="footer">
          <Link href="/en">Back to English Home</Link>
        </footer>
      </main>
    </>
  );
}
