import Link from 'next/link';

export default function BooksPage() {
  return (
    <main className="container narrow">
      <div className="kicker">Books</div>
      <h1>Books of the Family Civilization Project</h1>
      <p className="lead">The book system begins with relationships and gradually expands into ability, business, AI civilization ethics, and future family civilization practice systems.</p>
      <div className="grid">
        <Link className="card" href="/books/volume-01-relationships">
          <h3>Volume I: Relationships</h3>
          <p>First draft completed. A full volume on family harm, repair, self-relationship, and the practical path of family civilization.</p>
        </Link>
      </div>
    </main>
  );
}
