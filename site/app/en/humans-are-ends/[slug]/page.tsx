import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getHumansArticle, getHumansArticles, markdownToHtml } from '../../../lib/humansContent';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getHumansArticles('en').map((article) => ({ slug: article.slug }));
}

export default function HumansArticleEnPage({ params }: PageProps) {
  const article = getHumansArticle('en', params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="page-wrap article-wrap">
      <Link className="back-link" href="/en/humans-are-ends">← HUMANS ARE ENDS</Link>
      <h1>{article.title}</h1>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }}
      />
    </main>
  );
}
