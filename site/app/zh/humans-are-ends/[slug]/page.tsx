import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getHumansArticle, getHumansArticles, markdownToHtml } from '../../../lib/humansContent';

export function generateStaticParams() {
  return getHumansArticles('zh').map((a) => ({ slug: a.slug }));
}

export default function HumansArticleZhPage({ params }: { params: { slug: string } }) {
  const article = getHumansArticle('zh', params.slug);
  if (!article) notFound();
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 text-sm"><Link href="/zh/humans-are-ends">← HUMANS ARE ENDS</Link></div>
        <div className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }} />
      </article>
    </main>
  );
}
