import Link from 'next/link';
import Nav from '@/app/lib/Nav';

export default function Page() {
  return (
    <>
      <Nav lang="zh" />
      <main className="page">
        <section className="hero">
          <p className="eyebrow">家庭文明工程</p>
          <h1>请把孩子当成一个人</h1>
          <p className="lead">
            中文版面向中国读者与出版场景，聚焦控制、溺爱、边界、人格尊严与中国家庭现实。
          </p>
          <div className="actions">
            <Link className="button" href="/zh/books/volume-01-relationships">阅读第一卷：关系篇</Link>
            <Link className="button secondary" href="/zh/humans-are-ends">进入 HUMANS ARE ENDS 哲学栏目</Link>
          </div>
        </section>

        <section className="grid">
          <Link className="card feature-card" href="/zh/humans-are-ends">
            <p className="eyebrow">Philosophical Foundation</p>
            <h2>HUMANS ARE ENDS</h2>
            <p>
              “人是目的，不是工具”是家庭文明工程的哲学地基。本栏目从古希腊开始，
              以故事化方式梳理人格尊严、自由、幸福、家庭关系与 AI 伦理。
            </p>
          </Link>

          <Link className="card" href="/zh/books">
            <h2>书籍</h2>
            <p>查看家庭文明工程书籍与出版版本。</p>
          </Link>

          <Link className="card" href="/zh/dictionary">
            <h2>词典</h2>
            <p>进入家庭文明与人类文明核心概念系统。</p>
          </Link>
        </section>

        <footer className="footer">David / 刘岗 · Family Civilization Project</footer>
      </main>
    </>
  );
}
