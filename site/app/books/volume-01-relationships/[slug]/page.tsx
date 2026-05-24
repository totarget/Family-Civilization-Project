import { notFound } from 'next/navigation';
import Link from 'next/link';
import MarkdownView from '@/components/MarkdownView';
import { getVolumeItems, getVolumeItem, getSpecialMarkdown } from '@/lib/content';

export function generateStaticParams() {
  const items = getVolumeItems();
  const special = ['README.md', 'preface-volume-01-relationships-cn.md', 'preface-volume-01-relationships-en.md']
    .map((name) => getSpecialMarkdown(name))
    .filter(Boolean) as { slug: string }[];
  return [...items, ...special].map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getVolumeItem(params.slug) ?? getSpecialMarkdown(`${params.slug}.md`);
  return { title: item ? `${item.title} | Volume I: Relationships` : 'Volume I: Relationships' };
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const items = getVolumeItems();
  const item = getVolumeItem(params.slug) ?? getSpecialMarkdown(`${params.slug}.md`);
  if (!item) notFound();

  const index = items.findIndex((chapter) => chapter.slug === params.slug);
  const previous = index > 0 ? items[index - 1] : null;
  const next = index >= 0 && index < items.length - 1 ? items[index + 1] : null;

  return (
    <main className="container narrow">
      <div className="actions" style={{ marginTop: 0, marginBottom: 24 }}>
        <Link className="button secondary" href="/books/volume-01-relationships">← Table of Contents</Link>
        {previous && <Link className="button secondary" href={`/books/volume-01-relationships/${previous.slug}`}>Previous</Link>}
        {next && <Link className="button secondary" href={`/books/volume-01-relationships/${next.slug}`}>Next</Link>}
      </div>
      <MarkdownView content={item.content} />
    </main>
  );
}
