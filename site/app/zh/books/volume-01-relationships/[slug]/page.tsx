import Nav from '../../../../lib/Nav';
import { getChapter, getChapters } from '../../../../lib/content';
export function generateStaticParams(){return getChapters('zh').map(c=>({slug:c.slug}));}
export default function Page({ params }: { params: { slug: string } }){const ch=getChapter('zh', params.slug); return <><Nav lang="zh"/><article className="article"><h1>{ch.title}</h1><div dangerouslySetInnerHTML={{__html: ch.html}} /></article><footer className="footer"><a href="/zh/books/volume-01-relationships">← Back to Volume I</a></footer></>}
