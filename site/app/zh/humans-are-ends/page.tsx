import Link from 'next/link';
import Nav from '@/app/lib/Nav';

export default function HumansAreEndsZhPage() {
  return (
    <>
      <Nav lang="zh" />

      <main className="container">
        <section>
          <p className="eyebrow">Philosophical Foundation</p>
          <h1 className="h1">HUMANS ARE ENDS</h1>
          <p className="lead">人是目的，不是工具。</p>
          <p className="muted">
            这是《家庭文明工程》的哲学基础栏目。它从古希腊开始，逐步梳理“人为什么不能被工具化”的思想史脉络，
            并把这一原则带回家庭、亲子关系、亲密关系与 AI 伦理。
          </p>
        </section>

        <section className="cards">
          <Link className="card" href="/zh/humans-are-ends/001-why-humans-are-ends-matters-to-family-civilization">
            <h3>为什么“人是目的”是家庭文明的第一原则</h3>
            <p>以故事方式进入哲学史，把人的尊严、自由与家庭文明连接起来。</p>
          </Link>
          <Link className="card" href="/zh/humans-are-ends/002-socrates-the-examined-life-and-the-human-soul">
            <h3>苏格拉底：一个人为什么必须审视自己的生活</h3>
            <p>以故事方式进入哲学史，把人的尊严、自由与家庭文明连接起来。</p>
          </Link>
          <Link className="card" href="/zh/humans-are-ends/003-plato-justice-soul-and-the-danger-of-turning-people-into-functions">
            <h3>柏拉图：正义、灵魂与把人变成功能的危险</h3>
            <p>以故事方式进入哲学史，把人的尊严、自由与家庭文明连接起来。</p>
          </Link>
          <Link className="card" href="/zh/humans-are-ends/004-aristotle-flourishing-and-the-family-as-first-soil">
            <h3>亚里士多德：幸福不是成功，而是人的充分展开</h3>
            <p>以故事方式进入哲学史，把人的尊严、自由与家庭文明连接起来。</p>
          </Link>
          <Link className="card" href="/zh/humans-are-ends/005-stoicism-citizens-of-the-world-and-inner-dignity">
            <h3>斯多葛：世界公民、内在尊严与不可被夺走的自由</h3>
            <p>以故事方式进入哲学史，把人的尊严、自由与家庭文明连接起来。</p>
          </Link>
          <Link className="card" href="/zh/humans-are-ends/006-from-ancient-philosophy-to-family-civilization">
            <h3>从古希腊到家庭文明：哲学最终要回到人的生活</h3>
            <p>以故事方式进入哲学史，把人的尊严、自由与家庭文明连接起来。</p>
          </Link>
        </section>
      </main>

      <footer className="footer">
        <Link href="/zh">返回中文首页</Link>
      </footer>
    </>
  );
}
