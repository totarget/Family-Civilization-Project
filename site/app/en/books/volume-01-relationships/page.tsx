import Nav from '@/app/lib/Nav';
import { getChapters } from '@/app/lib/content';
export default function Page(){const chapters=getChapters('en'); return <><Nav lang="en"/><main className="container"><div className="eyebrow">Volume I</div><h1 className="h1">Relationships</h1><p className="lead">Independent English edition: prepared for international readers and English publishing channels.</p><div className="list">{chapters.map(c=><a key={c.slug} href={`/en/books/volume-01-relationships/${c.slug}`}>{c.title}</a>)}</div></main><footer className="footer">Family Civilization Project</footer></>}
