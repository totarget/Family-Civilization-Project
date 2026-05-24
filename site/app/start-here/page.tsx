import Link from 'next/link';

export default function StartHerePage() {
  return (
    <main className="container narrow">
      <div className="kicker">Start Here</div>
      <h1>How to begin reading and practicing</h1>
      <div className="grid">
        <Link className="card" href="/books/volume-01-relationships">
          <h3>1. Read Volume I</h3>
          <p>Begin with Relationships, the first completed volume of the project.</p>
        </Link>
        <Link className="card" href="/dictionary">
          <h3>2. Learn the key concepts</h3>
          <p>Use the dictionary to understand the language of family civilization.</p>
        </Link>
        <Link className="card" href="/books/volume-01-relationships/096-ai-family-civilization-advisor">
          <h3>3. Move toward practice</h3>
          <p>Begin from small, low-conflict actions and AI-assisted family civilization practice.</p>
        </Link>
      </div>
    </main>
  );
}
