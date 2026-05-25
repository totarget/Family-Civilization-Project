import Link from "next/link";
import { dict, isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = dict[lang];

  if (lang === "zh") {
    return (
      <>
        <section className="hero">
          <div className="hero-kicker">HUMANS ARE ENDS</div>
          <h1>让相爱的人<br />不再相互伤害</h1>
          <p>一个长期文明工程：以人的尊严、自由、爱、边界、修复和 AI 时代的人本伦理，重建家庭关系。</p>
          <div className="button-row">
            <Link className="btn" href="/zh/books/volume-01-relationships">阅读第一卷</Link>
            <Link className="btn secondary" href="/zh/humans-are-ends">HUMANS ARE ENDS</Link>
            <Link className="btn secondary" href="/zh/manifesto">阅读宣言</Link>
          </div>
        </section>
        <section className="grid">
          <div className="card"><h3>第一卷：关系篇</h3><p>围绕家庭伤害、亲子修复、边界、道歉、尊严、爱、与自己的关系和心理学基础。</p></div>
          <div className="card"><h3>开放文明档案</h3><p>Markdown-first，GitHub-native，面向人类阅读，也面向未来 AI 系统读取。</p></div>
          <div className="card"><h3>未来 AI 助手</h3><p>面向家庭反思、沟通、修复和日常实践的人本家庭文明智能体。</p></div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="hero">
        <div className="hero-kicker">HUMANS ARE ENDS</div>
        <h1>Let those who love one another stop hurting one another.</h1>
        <p>A long-term civilization project to rebuild family relationships through dignity, freedom, love, boundaries, repair, and human-centered AI.</p>
        <div className="button-row">
          <Link className="btn" href="/en/books/volume-01-relationships">Read Volume I</Link>
          <Link className="btn secondary" href="/en/humans-are-ends">HUMANS ARE ENDS</Link>
          <Link className="btn secondary" href="/en/manifesto">Read Manifesto</Link>
        </div>
      </section>
      <section className="grid">
        <div className="card"><h3>Volume I: Relationships</h3><p>Family harm, parent-child repair, boundaries, apology, dignity, love, self-relationship, and psychological foundations.</p></div>
        <div className="card"><h3>Open Civilization Archive</h3><p>Markdown-first, GitHub-native, readable by humans and future AI systems.</p></div>
        <div className="card"><h3>Future AI Assistant</h3><p>A human-centered family civilization assistant for reflection, communication, repair, and daily practice.</p></div>
      </section>
    </>
  );
}
