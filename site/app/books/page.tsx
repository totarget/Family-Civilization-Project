import Link from 'next/link';

export default function BooksPage() {
  return (
    <main className="container narrow">
      <div className="kicker">Books / 书籍系统</div>
      <h1>Books of the Family Civilization Project</h1>
      <p className="lead">家庭文明工程的书籍系统从第一卷《关系篇》开始，逐步展开能力、商业、AI文明伦理与未来家庭文明实践系统。</p>

      <div className="grid">
        <Link className="card" href="/books/volume-01-relationships">
          <div className="kicker">Volume I / 第一卷</div>
          <h3>Relationships / 关系篇</h3>
          <p>First draft completed. A full volume on family harm, parent-child repair, self-relationship, relational repair, and the practical path of family civilization.</p>
          <p className="muted">《家庭文明工程》第一卷，已完成第一稿。书稿围绕家庭伤害、亲子修复、与自己的关系、关系修复与AI家庭文明顾问展开。</p>
        </Link>
      </div>

      <h2>Planned Volumes / 后续卷册</h2>
      <div className="grid">
        <div className="card">
          <h3>Volume II: Ability / 能力篇</h3>
          <p>人格、情绪、责任、自由、合作、创造与幸福能力。</p>
        </div>
        <div className="card">
          <h3>Volume III: Business / 商业篇</h3>
          <p>契约、信任、价值创造、商业文明与人的尊严。</p>
        </div>
      </div>
    </main>
  );
}
