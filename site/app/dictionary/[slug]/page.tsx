import { notFound } from 'next/navigation';
import Link from 'next/link';
import MarkdownView from '@/components/MarkdownView';
import { getDictionaryItems, getDictionaryItem } from '@/lib/content';

export function generateStaticParams() {
  return getDictionaryItems().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getDictionaryItem(params.slug);
  return { title: item ? `${item.title} | Dictionary` : 'Dictionary' };
}

export default function DictionaryEntryPage({ params }: { params: { slug: string } }) {
  const item = getDictionaryItem(params.slug);
  if (!item) notFound();
  return (
    <main className="container narrow">
      <div className="actions" style={{ marginTop: 0, marginBottom: 24 }}>
        <Link className="button secondary" href="/dictionary">← Dictionary</Link>
      </div>
      <MarkdownView content={item.content} />
    </main>
  );
}
