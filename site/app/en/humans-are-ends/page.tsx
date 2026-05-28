import Link from 'next/link';

const articles = [
  ['001-why-humans-are-ends-matters-to-family-civilization', 'Why Humans Are Ends Matters to Family Civilization'],
  ['002-socrates-the-examined-life-and-the-human-soul', 'Socrates: The Examined Life and the Human Soul'],
  ['003-plato-justice-soul-and-the-danger-of-turning-people-into-functions', 'Plato: Justice, Soul, and the Danger of Turning People into Functions'],
  ['004-aristotle-flourishing-and-the-family-as-first-soil', 'Aristotle: Flourishing and the Family as the First Soil'],
  ['005-stoicism-citizens-of-the-world-and-inner-dignity', 'Stoicism: Citizens of the World and Inner Dignity'],
  ['006-from-ancient-philosophy-to-family-civilization', 'From Ancient Philosophy to Family Civilization'],
];

export default function HumansAreEndsEnPage() {
  return (
    <main className="page-wrap">
      <Link className="back-link" href="/en">← Back Home</Link>
      <section className="hero small-hero">
        <p className="eyebrow">Philosophical Foundation</p>
        <h1>HUMANS ARE ENDS</h1>
        <p className="subtitle">Human beings are ends, not tools.</p>
        <p className="lead">
          This section is the philosophical foundation of the Family Civilization Project. It begins with ancient Greek philosophy and moves toward Kant, human dignity, family civilization, and AI ethics.
        </p>
      </section>
      <section className="card-grid">
        {articles.map(([slug, title]) => (
          <article className="card" key={slug}>
            <h2>{title}</h2>
            <Link href={`/en/humans-are-ends/${slug}`}>Read article →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
