import Link from "next/link";

export default function LanguageLanding() {
  return (
    <div className="site-shell">
      <main className="main">
        <section className="hero">
          <div className="logo-box">
            <div>
              <div className="logo-mark">家庭文明工程</div>
              <div style={{ marginTop: 10, color: "var(--muted)", fontSize: 22 }}>
                Family Civilization Project
              </div>
            </div>
          </div>
          <div className="hero-kicker">HUMANS ARE ENDS</div>
          <h1>请选择语言<br />Choose Your Language</h1>
          <p>
            中文站与英文站已经分离。请选择进入对应版本。
            <br />
            The Chinese and English sites are now separated. Please choose a version.
          </p>
          <div className="button-row">
            <Link className="btn" href="/zh">进入中文版</Link>
            <Link className="btn secondary" href="/en">Enter English Site</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
