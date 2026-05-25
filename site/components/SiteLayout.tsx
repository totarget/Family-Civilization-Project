import Link from "next/link";
import { dict, Lang, otherLang } from "@/lib/i18n";

export default function SiteLayout({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const t = dict[lang];
  const alt = otherLang(lang);

  return (
    <div className="site-shell">
      <header className="header">
        <nav className="nav">
          <Link className="brand" href={`/${lang}`}>{t.brand}</Link>
          <div className="nav-links">
            <Link href={`/${lang}`}>{t.home}</Link>
            <Link href={`/${lang}/manifesto`}>{t.manifesto}</Link>
            <Link href={`/${lang}/books`}>{t.books}</Link>
            <Link href={`/${lang}/books/volume-01-relationships`}>{t.volumeI}</Link>
            <Link href={`/${lang}/humans-are-ends`}>{t.humans}</Link>
            <Link href={`/${lang}/start-here`}>{t.startHere}</Link>
            <Link href={`/${lang}/about`}>{t.about}</Link>
            <Link href={`/${lang}/videos`}>{t.videos}</Link>
            <Link href={`/${lang}/dictionary`}>{t.dictionary}</Link>
            <a href="https://github.com/totarget/Family-Civilization-Project" target="_blank" rel="noreferrer">
              {t.github}
            </a>
            <Link className="lang-switch" href={`/${alt}`}>{t.switchTo}</Link>
          </div>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="footer-inner">
          <span>{t.footer}</span>
          <span>{t.humans}</span>
        </div>
      </footer>
    </div>
  );
}
