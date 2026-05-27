export default function Nav({ lang }: { lang: 'zh' | 'en' }) {
 const other = lang === 'zh' ? '/en' : '/zh';
 return <div className="nav"><a className="brand" href={`/${lang}`}>{lang === 'zh' ? '家庭文明工程 Family Civilization Project' : 'Family Civilization Project'}</a><div className="navlinks"><a href={`/${lang}/books`}>{lang === 'zh' ? '书籍' : 'Books'}</a><a href={`/${lang}/books/volume-01-relationships`}>{lang === 'zh' ? '关系篇' : 'Relationships'}</a><a href={other}>{lang === 'zh' ? 'English' : '中文'}</a></div></div>
}
