import Link from 'next/link';
import { getHumansArticles } from '../../lib/humansContent';

export default function HumansAreEndsEnPage() {
  const articles = getHumansArticles('en');

  return (
    <main className="page-wrap">
      <Link className="back-link" href="/en">← Back Home</Link>

      <section className="hero small-hero">
        <p className="eyebrow">Philosophical Foundation</p>
        <h1>HUMANS ARE ENDS</h1>
        <p className="subtitle">Human beings are ends, not tools.</p>
        <p className="lead">
          This section is the philosophical foundation of the Family Civilization Project. It begins with ancient Greek philosophy and gradually moves toward Kant, human dignity, family civilization, and AI ethics.
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
