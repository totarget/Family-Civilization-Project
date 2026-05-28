import Link from 'next/link';

const articles = [
  { slug: '001-why-humans-are-ends-matters-to-family-civilization', title: 'Why Humans Are Ends Matters to Family Civilization' },
  { slug: '002-socrates-the-examined-life-and-the-human-soul', title: 'Socrates: The Examined Life and the Human Soul' },
  { slug: '003-plato-justice-soul-and-the-danger-of-turning-people-into-functions', title: 'Plato: Justice, Soul, and the Danger of Turning People into Functions' },
  { slug: '004-aristotle-flourishing-and-the-family-as-first-soil', title: 'Aristotle: Flourishing and the Family as the First Soil' },
  { slug: '005-stoicism-citizens-of-the-world-and-inner-dignity', title: 'Stoicism: Citizens of the World and Inner Dignity' },
  { slug: '006-from-ancient-philosophy-to-family-civilization', title: 'From Ancient Philosophy to Family Civilization' },
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
        {articles.map((article) => (
          <article className="card" key={article.slug}>
            <h2>{article.title}</h2>
            <Link href={`/en/humans-are-ends/${article.slug}`}>Read article →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
