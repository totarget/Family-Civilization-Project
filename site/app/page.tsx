import Link from "next/link";
import { getVolume01Chapters } from "@/lib/content";

export default function HomePage() {
  const chapters = getVolume01Chapters();

  return (
    <>
      <section className="hero container">
        <p className="eyebrow">Family Civilization Project</p>
        <h1>Let those who love one another stop hurting one another.</h1>
        <p className="lead">
          A long-term civilization project to rebuild family relationships through dignity,
          freedom, love, boundaries, repair, and human-centered AI.
        </p>
        <div className="quote">
          人是目的，不是手段。<br />
          The human being is an end, not a means.
        </div>
        <div className="actions">
          <Link className="button" href="/books/volume-01-relationships">
            Read Volume I
          </Link>
          <Link className="button secondary" href="/start-here">
            Start Here
          </Link>
          <Link className="button secondary" href="/manifesto">
            Read Manifesto
          </Link>
        </div>
      </section>

      <section className="section container">
        <div className="grid-3">
          <div className="card">
            <h3>Volume I: Relationships</h3>
            <p>
              Completed. {chapters.length || 80} sections on family harm, parent-child repair,
              boundaries, apology, dignity, and love.
            </p>
          </div>
          <div className="card">
            <h3>Open Civilization Archive</h3>
            <p>
              Markdown-first, GitHub-native, bilingual, readable by humans and AI systems.
            </p>
          </div>
          <div className="card">
            <h3>Future AI Assistant</h3>
            <p>
              A human-centered family civilization assistant for reflection, communication,
              repair, and daily practice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
