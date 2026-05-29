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
        substack: 'Substack',
        ai: 'AI顾问',
        about: '关于',
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
        substack: 'Substack',
        ai: 'AI Advisor',
        about: 'About',
        switch: '中文',
      };

  const links = [
    [home, t.home],
    [`${home}/start-here`, t.start],
    [`${home}/manifesto`, t.manifesto],
    [`${home}/books`, t.books],
    [`${home}/humans-are-ends`, t.humans],
    [`${home}/dictionary`, t.dictionary],
    [`${home}/video`, t.video],
    [`${home}/substack`, t.substack],
    [`${home}/ai-family-civilization-advisor`, t.ai],
    [`${home}/about`, t.about],
  ];

  return (
    <nav className="nav">
      <Link className="brand" href={home}>{t.brand}</Link>
      <div className="navlinks">
        {links.map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
        <Link href={other}>{t.switch}</Link>
      </div>
    </nav>
  );
}
