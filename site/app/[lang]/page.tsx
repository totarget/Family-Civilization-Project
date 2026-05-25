import Link from "next/link";
import { isLang } from "@/lib/i18n";
import { getVolumeItems, getDictionaryItems } from "@/lib/content";
import { notFound } from "next/navigation";

export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!isLang(lang)) notFound();
  const chapters = getVolumeItems(lang);
  const dictionary = getDictionaryItems(lang);

  if (lang === "zh") {
    return (
      <>
        <section className="hero">
          <div className="home-logo-wrap"><img src="/assets/humans-are-ends-logo.png" alt="HUMANS ARE ENDS" className="home-logo" /></div>
          <div className="hero-kicker">家庭文明工程 · HUMANS ARE ENDS</div>
          <h1>让相爱的人，<br />不再相互伤害。</h1>
          <p>以人的尊严、自由、爱、边界、修复和 AI 时代的人本伦理，重建家庭关系。</p>
          <div className="button-row">
            <Link className="btn" href="/zh/books">进入书籍系统</Link>
            <Link className="btn secondary" href="/zh/humans-are-ends">理解核心哲学</Link>
            <Link className="btn secondary" href="/zh/dictionary">家庭文明词典</Link>
          </div>
        </section>
        <section className="grid">
          <Link className="card" href="/zh/books"><h3>Books / 书籍系统</h3><p>第一卷《关系篇》已完成。后续各卷将继续展开能力、商业、AI文明伦理与家庭文明实践系统。</p></Link>
          <Link className="card" href="/zh/dictionary"><h3>家庭文明词典</h3><p>{dictionary.length} 个当前词条，形成持续演化的家庭文明语言系统。</p></Link>
          <Link className="card" href="/zh/books/volume-01-relationships"><h3>第一卷：关系篇</h3><p>当前收录 {chapters.length} 个章节文件，围绕家庭伤害、亲子修复、与自己的关系和关系文明展开。</p></Link>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="hero">
        <div className="home-logo-wrap"><img src="/assets/humans-are-ends-logo.png" alt="HUMANS ARE ENDS" className="home-logo" /></div>
        <div className="hero-kicker">Family Civilization Project · HUMANS ARE ENDS</div>
        <h1>Let those who love one another stop hurting one another.</h1>
        <p>A long-term civilization project to rebuild family relationships through dignity, freedom, love, boundaries, repair, and human-centered AI.</p>
        <div className="button-row">
          <Link className="btn" href="/en/books">Enter Books</Link>
          <Link className="btn secondary" href="/en/humans-are-ends">Core Philosophy</Link>
          <Link className="btn secondary" href="/en/dictionary">Dictionary</Link>
        </div>
      </section>
      <section className="grid">
        <Link className="card" href="/en/books"><h3>Books</h3><p>Volume I has been completed. Future volumes will expand ability, business, AI civilization ethics, and practice systems.</p></Link>
        <Link className="card" href="/en/dictionary"><h3>Human Civilization Dictionary</h3><p>{dictionary.length} current entries forming an evolving language system for family civilization.</p></Link>
        <Link className="card" href="/en/books/volume-01-relationships"><h3>Volume I: Relationships</h3><p>{chapters.length} chapter files covering family harm, parent-child repair, self-relationship, and relational civilization.</p></Link>
      </section>
    </>
  );
}
