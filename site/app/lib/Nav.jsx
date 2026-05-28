import Link from 'next/link';

export default function Nav({ lang = 'zh' }) {
  const isZh = lang === 'zh';
  const home = isZh ? '/zh' : '/en';
  const other = isZh ? '/en' : '/zh';

  const labels = isZh
    ? {
        brand: '家庭文明工程 Family Civilization Project',
        home: '首页',
        start: '从这里开始',
        manifesto: '宣言',
        books: '书籍',
        humans: 'HUMANS ARE ENDS',
        dictionary: '词典',
        videos: '视频',
        ai: 'AI顾问',
        about: '关于',
        github: 'GitHub',
        switchLang: 'English',
      }
    : {
        brand: 'Family Civilization Project',
        home: 'Home',
        start: 'Start Here',
        manifesto: 'Manifesto',
        books: 'Books',
        humans: 'HUMANS ARE ENDS',
        dictionary: 'Dictionary',
        videos: 'Videos',
        ai: 'AI Advisor',
        about: 'About',
        github: 'GitHub',
        switchLang: '中文',
      };

  const links = [
    [home, labels.home],
    [`${home}/start-here`, labels.start],
    [`${home}/manifesto`, labels.manifesto],
    [`${home}/books`, labels.books],
    [`${home}/humans-are-ends`, labels.humans],
    [`${home}/dictionary`, labels.dictionary],
    [`${home}/videos`, labels.videos],
    [`${home}/ai-advisor`, labels.ai],
    [`${home}/about`, labels.about],
  ];

  return (
    <header className="nav">
      <Link className="brand" href={home}>
        {labels.brand}
      </Link>

      <nav className="navlinks" aria-label="Main navigation">
        {links.map(([href, text]) => (
          <Link key={href} href={href}>
            {text}
          </Link>
        ))}
        <a
          href="https://github.com/totarget/Family-Civilization-Project"
          target="_blank"
          rel="noreferrer"
        >
          {labels.github}
        </a>
        <Link href={other}>{labels.switchLang}</Link>
      </nav>
    </header>
  );
}
