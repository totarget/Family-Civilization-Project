import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getHumansArticle, getHumansArticles, markdownToHtml } from '../../../lib/humansContent';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getHumansArticles('zh').map((article) => ({ slug: article.slug }));
}

export default function HumansArticleZhPage({ params }: PageProps) {
  const article = getHumansArticle('zh', params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="page-wrap article-wrap">
      <Link className="back-link" href="/zh/humans-are-ends">← HUMANS ARE ENDS</Link>
      <h1>{article.title}</h1>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }}
      />
    </main>
  );
}
