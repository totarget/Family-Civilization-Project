import Link from 'next/link';

const articles = [
  ['001-why-humans-are-ends-matters-to-family-civilization', '为什么“人是目的”是家庭文明的第一原则'],
  ['002-socrates-the-examined-life-and-the-human-soul', '苏格拉底：一个人为什么必须审视自己的生活'],
  ['003-plato-justice-soul-and-the-danger-of-turning-people-into-functions', '柏拉图：正义、灵魂与把人变成功能的危险'],
  ['004-aristotle-flourishing-and-the-family-as-first-soil', '亚里士多德：幸福不是成功，而是人的充分展开'],
  ['005-stoicism-citizens-of-the-world-and-inner-dignity', '斯多葛：世界公民、内在尊严与不可被夺走的自由'],
  ['006-from-ancient-philosophy-to-family-civilization', '从古希腊到家庭文明：哲学最终要回到人的生活'],
];

export default function HumansAreEndsZhPage() {
  return (
    <main className="page-wrap">
      <Link className="back-link" href="/zh">← 返回首页</Link>
      <section className="hero small-hero">
        <p className="eyebrow">Philosophical Foundation</p>
        <h1>HUMANS ARE ENDS</h1>
        <p className="subtitle">人是目的，不是工具</p>
        <p className="lead">
          这是《家庭文明工程》的哲学基础栏目。它从古希腊开始，逐步梳理人为什么不能被工具化，并把这一原则带回家庭、亲子关系、亲密关系与 AI 伦理。
        </p>
      </section>
      <section className="card-grid">
        {articles.map(([slug, title]) => (
          <article className="card" key={slug}>
            <h2>{title}</h2>
            <Link href={`/zh/humans-are-ends/${slug}`}>阅读文章 →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
