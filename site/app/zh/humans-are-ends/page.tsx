import Link from 'next/link';
import { getHumansArticles } from '../../lib/humansContent';

export default function HumansAreEndsZhPage() {
  const articles = getHumansArticles('zh');

  return (
    <main className="page-wrap">
      <Link className="back-link" href="/zh">← 返回首页</Link>

      <section className="hero small-hero">
        <p className="eyebrow">Philosophical Foundation</p>
        <h1>HUMANS ARE ENDS</h1>
        <p className="subtitle">人是目的，不是工具</p>
        <p className="lead">
          这是《家庭文明工程》的哲学基础栏目。它从古希腊开始，逐步梳理“人为什么不能被工具化”的思想史脉络，并把这一原则带回家庭、亲子关系、亲密关系与 AI 伦理。
        </p>
      </section>

      <section className="card-grid">
        {articles.map((article) => (
          <article className="card" key={article.slug}>
            <h2>{article.title}</h2>
            <Link href={`/zh/humans-are-ends/${article.slug}`}>阅读文章 →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
