import Link from 'next/link';

export default function Nav({ lang }) {
  const isZh = lang === 'zh';
  const home = isZh ? '/zh' : '/en';
  const other = isZh ? '/en' : '/zh';

  const t = isZh
    ? {
        brand: '家庭文明工程 Family Civilization Project',
        home: '首页',
        start: '从这里开始',
        manifesto: '宣言',
        books: '书籍',
        humans: 'HUMANS ARE ENDS',
        dictionary: '词典',
        video: '视频',
        ai: 'AI顾问',
        about: '关于',
        github: 'GitHub',
        switch: 'English',
      }
    : {
        brand: 'Family Civilization Project',
        home: 'Home',
        start: 'Start Here',
        manifesto: 'Manifesto',
        books: 'Books',
        humans: 'HUMANS ARE ENDS',
        dictionary: 'Dictionary',
        video: 'Videos',
        ai: 'AI Advisor',
        about: 'About',
        github: 'GitHub',
        switch: '中文',
      };

  const links = [
    [home, t.home],
    [`${home}/start-here`, t.start],
    [`${home}/manifesto`, t.manifesto],
    [`${home}/books`, t.books],
    [`${home}/humans-are-ends`, t.humans],
    [`${home}/dictionary`, t.dictionary],
    [`${home}/videos`, t.video],
    [`${home}/ai-advisor`, t.ai],
    [`${home}/about`, t.about],
  ];

  return (
    <header className="site-nav">
      <Link className="brand" href={home}>{t.brand}</Link>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
        <a href="https://github.com/totarget/Family-Civilization-Project" target="_blank" rel="noreferrer">{t.github}</a>
        <Link className="language-switch" href={other}>{t.switch}</Link>
      </nav>
    </header>
  );
}
