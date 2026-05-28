import Link from 'next/link';
import { getHumansArticles } from '../../lib/humansContent';

export default function HumansAreEndsZhPage() {
  const articles = getHumansArticles('zh');
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 text-sm"><Link href="/zh">← 返回首页</Link></div>
        <p className="text-sm tracking-[0.24em] uppercase text-neutral-500">Philosophical Foundation</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">HUMANS ARE ENDS</h1>
        <p className="mt-4 text-2xl font-medium">人是目的，不是工具</p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
          这是《家庭文明工程》的哲学基础栏目。它从古希腊开始，逐步梳理“人为什么不能被工具化”的思想史脉络，并把这一原则带回家庭、亲子关系、亲密关系与 AI 伦理。
        </p>
        <div className="mt-12 grid gap-4">
          {articles.map((a) => (
            <Link key={a.slug} href={`/zh/humans-are-ends/${a.slug}`} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h2 className="text-xl font-semibold">{a.title}</h2>
              <p className="mt-2 text-sm text-neutral-500">阅读文章 →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
