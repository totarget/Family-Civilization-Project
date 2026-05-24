import Link from 'next/link';
import { getVolumeItems, getSpecialMarkdown } from '@/lib/content';

export default function VolumeOnePage() {
  const items = getVolumeItems();
  const prefaceCn = getSpecialMarkdown('preface-volume-01-relationships-cn.md');
  const prefaceEn = getSpecialMarkdown('preface-volume-01-relationships-en.md');
  return (
    <main className="container">
      <div className="kicker">Volume I</div>
      <h1>Relationships / 关系篇</h1>
      <p className="lead">The first volume of the Family Civilization Project: a complete first draft on the reconstruction of family relationships, self-relationship, relational repair, and the practical entrance into family civilization.</p>
      <div className="actions">
        {prefaceCn && <Link className="button" href={`/books/volume-01-relationships/${prefaceCn.slug}`}>中文序言</Link>}
        {prefaceEn && <Link className="button secondary" href={`/books/volume-01-relationships/${prefaceEn.slug}`}>English Preface</Link>}
      </div>
      <h2>Table of Contents</h2>
      <ul className="list">
        {items.map((item) => (
          <li key={item.slug}>
            <Link className="chapter-row" href={`/books/volume-01-relationships/${item.slug}`}>
              <span className="chapter-number">{item.number}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
