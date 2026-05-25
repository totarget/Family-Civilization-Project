import Link from "next/link";

export default function LanguageLanding() {
  return (
    <div className="site-shell">
      <main className="main">
        <section className="hero">
          <div className="home-logo-wrap">
            <img src="/assets/humans-are-ends-logo.png" alt="HUMANS ARE ENDS" className="home-logo" />
          </div>
          <div className="hero-kicker">HUMANS ARE ENDS</div>
          <h1>请选择语言<br />Choose Your Language</h1>
          <p>中文站与英文站已经分离。请选择进入对应版本。<br />The Chinese and English sites are separated. Please choose a version.</p>
          <div className="button-row">
            <Link className="btn" href="/zh">进入中文版</Link>
            <Link className="btn secondary" href="/en">Enter English Site</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
