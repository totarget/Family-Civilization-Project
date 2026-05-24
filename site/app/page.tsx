import Link from 'next/link';
import { getVolumeItems, getDictionaryItems } from '@/lib/content';

export default function HomePage() {
  const chapters = getVolumeItems();
  const dictionary = getDictionaryItems();
  return (
    <main>
      <section className="container hero centered-hero">
        <div className="home-logo-wrap">
          <img src="/assets/humans-are-ends-logo.png" alt="人是目的，不是手段 / Humans are ends" className="home-logo" />
        </div>
        <div className="kicker">家庭文明工程 · Family Civilization Project</div>
        <h1>让相爱的人，不再相互伤害。</h1>
        <p className="lead center">A long-term civilization project to rebuild family relationships through dignity, freedom, love, boundaries, repair, and human-centered AI.</p>
        <p className="cn">人是目的，不是手段。</p>
        <p className="muted">The human being is an end, not a means.</p>
        <div className="actions center-actions">
          <Link className="button" href="/books">进入书籍系统</Link>
          <Link className="button secondary" href="/books/volume-01-relationships">阅读第一卷《关系篇》</Link>
          <Link className="button secondary" href="/humans-are-ends">理解核心哲学</Link>
        </div>
      </section>

      <section className="container philosophy-band">
        <div className="kicker">Core Philosophy</div>
        <h2>Humans Are Ends, Not Means</h2>
        <p className="lead">家庭文明工程的第一原则，是把每一个家庭成员重新作为真正的人来对待。孩子不是父母的工具，伴侣不是彼此的工具，父母也不是孩子的工具。任何人都不应成为另一个人的附属品、情绪出口、价值证明或人生延续。</p>
        <p>When a human being is treated as a tool, love becomes control, education becomes domestication, family becomes a power structure, and intimacy becomes harm. Family civilization begins when the family returns to one foundational principle: every person is first of all a person.</p>
        <div className="actions">
          <Link className="button secondary" href="/humans-are-ends">Read the Philosophy</Link>
        </div>
      </section>

      <section className="container">
        <div className="grid">
          <Link className="card" href="/books">
            <h3>Books / 书籍系统</h3>
            <p>第一卷《关系篇》已完成第一稿。后续各卷将继续展开能力、商业、AI文明伦理与家庭文明实践系统。</p>
          </Link>
          <Link className="card" href="/books/volume-01-relationships">
            <h3>Volume I: Relationships / 关系篇</h3>
            <p>Completed first draft: {chapters.length} chapter files, covering family harm, parent-child repair, self-relationship, relationship repair, and the AI Family Civilization Advisor.</p>
          </Link>
          <Link className="card" href="/dictionary">
            <h3>Human Civilization Dictionary</h3>
            <p>{dictionary.length} current entries available on this site, forming an evolving language system for family civilization.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
