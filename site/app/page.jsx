import Link from 'next/link';

export default function Page() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <div className="eyebrow">家庭文明工程 / Family Civilization Project</div>
          <h1 className="h1">HUMANS ARE ENDS</h1>
          <p className="lead">
            让每一个人，都能够获得真正的幸福。<br />
            Let every person have the true happiness.
          </p>
          <div className="buttonRow">
            <Link className="button" href="/zh/start-here">中文站</Link>
            <Link className="button secondaryButton" href="/en/start-here">English Site</Link>
          </div>
        </div>
        <div className="heroimg">
          <img src="/images/humans-are-ends-theme.jpg" alt="HUMANS ARE ENDS" />
        </div>
      </section>
    </main>
  );
}
