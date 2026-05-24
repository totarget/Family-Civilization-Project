import Link from 'next/link';
import { getDictionaryItems } from '@/lib/content';

export default function DictionaryPage() {
  const items = getDictionaryItems();
  return (
    <main className="container">
      <div className="kicker">Human Civilization Dictionary</div>
      <h1>家庭文明词典 / Human Civilization Dictionary</h1>
      <p className="lead">An evolving concept system for family civilization, relationship civilization, self-repair, and AI-assisted civilization engineering.</p>
      <ul className="list">
        {items.map((item) => (
          <li key={item.slug}>
            <Link className="chapter-row" href={`/dictionary/${item.slug}`}>
              <span className="chapter-number">{item.number}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
