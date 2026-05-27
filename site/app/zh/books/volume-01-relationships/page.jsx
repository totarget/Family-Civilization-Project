import Nav from '@/app/lib/Nav';
import { getChapters } from '@/app/lib/content';
export default function Page(){const chapters=getChapters('zh'); return <><Nav lang="zh"/><main className="container"><div className="eyebrow">第一卷</div><h1 className="h1">关系篇</h1><p className="lead">中文出版修订版：面向中国家庭现实与出版场景。</p><div className="list">{chapters.map(c=><a key={c.slug} href={`/zh/books/volume-01-relationships/${c.slug}`}>{c.title}</a>)}</div></main><footer className="footer">Family Civilization Project</footer></>}
