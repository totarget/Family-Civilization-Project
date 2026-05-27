export default function Nav({ lang }) {
 const other = lang === 'zh' ? '/en' : '/zh';
 const t = lang === 'zh'
  ? { home:'首页', start:'从这里开始', manifesto:'宣言', books:'书籍', dictionary:'词典', video:'视频', ai:'AI顾问', about:'关于', github:'GitHub', switch:'English' }
  : { home:'Home', start:'Start Here', manifesto:'Manifesto', books:'Books', dictionary:'Dictionary', video:'Videos', ai:'AI Advisor', about:'About', github:'GitHub', switch:'中文' };
 return <div className="nav"><a className="brand" href={`/${lang}`}>{lang === 'zh' ? '家庭文明工程 Family Civilization Project' : 'Family Civilization Project'}</a><div className="navlinks"><a href={`/${lang}`}>{t.home}</a><a href={`/${lang}/start-here`}>{t.start}</a><a href={`/${lang}/manifesto`}>{t.manifesto}</a><a href={`/${lang}/books`}>{t.books}</a><a href={`/${lang}/dictionary`}>{t.dictionary}</a><a href={`/${lang}/video`}>{t.video}</a><a href={`/${lang}/ai-family-civilization-advisor`}>{t.ai}</a><a href={`/${lang}/about`}>{t.about}</a><a href={`/${lang}/github-archive`}>{t.github}</a><a href={other}>{t.switch}</a></div></div>
}
