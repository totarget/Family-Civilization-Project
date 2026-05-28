import Link from 'next/link';
import Nav from '@/app/lib/Nav';

export default function ZhHomePage() {
  return (
    <>
      <Nav lang="zh" />

      <main className="container">
        <section className="hero">
          <div>
            <p className="eyebrow">家庭文明工程 Family Civilization Project</p>
            <h1 className="h1">请把孩子当成一个人</h1>
            <p className="lead">
              以“人是目的，不是工具”为最高原则，重建家庭关系、人格尊严、亲子边界与未来 AI 家庭文明基础设施。
            </p>
            <Link className="button" href="/zh/books/volume-01-relationships">
              阅读第一卷：关系篇
            </Link>
          </div>

          <div className="heroimg" aria-hidden="true">
            <img src="/logo.png" alt="" />
          </div>
        </section>

        <section className="cards">
          <Link className="card" href="/zh/humans-are-ends">
            <p className="eyebrow">Philosophical Foundation</p>
            <h3>HUMANS ARE ENDS</h3>
            <p>
              “人是目的，不是工具”是家庭文明工程的哲学地基。从古希腊开始，以故事化方式梳理人格尊严、自由、幸福、家庭关系与 AI 伦理。
            </p>
          </Link>

          <Link className="card" href="/zh/books">
            <h3>书籍</h3>
            <p>查看《家庭文明工程》各卷书籍与出版版本。</p>
          </Link>

          <Link className="card" href="/zh/dictionary">
            <h3>词典</h3>
            <p>进入家庭文明与人类文明核心概念系统。</p>
          </Link>

          <Link className="card" href="/zh/videos">
            <h3>视频</h3>
            <p>查看短视频与 YouTube 长视频内容档案。</p>
          </Link>

          <Link className="card" href="/zh/ai-advisor">
            <h3>AI 家庭文明顾问</h3>
            <p>进入本地优先、隐私保护、面向家庭关系理解的 AI 文明顾问系统。</p>
          </Link>

          <Link className="card" href="/zh/about">
            <h3>关于</h3>
            <p>了解发起人 David / 刘岗 与家庭文明工程的长期使命。</p>
          </Link>
        </section>
      </main>

      <footer className="footer">David / 刘岗 · Family Civilization Project</footer>
    </>
  );
}
