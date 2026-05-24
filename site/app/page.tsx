import Link from 'next/link';
import { getVolumeItems, getDictionaryItems } from '@/lib/content';

export default function HomePage() {
  const chapters = getVolumeItems();
  const dictionary = getDictionaryItems();
  return (
    <main>
      <section className="container hero">
        <div className="kicker">Family Civilization Project</div>
        <h1>Let those who love one another stop hurting one another.</h1>
        <p className="lead">A long-term civilization project to rebuild family relationships through dignity, freedom, love, boundaries, repair, and human-centered AI.</p>
        <p className="cn">人是目的，不是手段。</p>
        <p className="muted">The human being is an end, not a means.</p>
        <div className="actions">
          <Link className="button" href="/books/volume-01-relationships">Read Volume I</Link>
          <Link className="button secondary" href="/dictionary">Human Civilization Dictionary</Link>
          <Link className="button secondary" href="/start-here">Start Here</Link>
        </div>
      </section>
      <section className="container">
        <div className="grid">
          <div className="card">
            <h3>Volume I: Relationships</h3>
            <p>Completed first draft: {chapters.length} chapter files, covering family harm, parent-child repair, self-relationship, relationship repair, and the AI Family Civilization Advisor.</p>
          </div>
          <div className="card">
            <h3>Human Civilization Dictionary</h3>
            <p>{dictionary.length} current entries available on this site, forming an evolving language system for family civilization.</p>
          </div>
          <div className="card">
            <h3>From Theory to Engineering</h3>
            <p>The project is designed to move from writing and reflection into daily practice, family meetings, repair tools, and AI-assisted relationship civilization.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
