import Nav from '../../../../lib/Nav';
import { getChapter, getChapters } from '../../../../lib/content';
export function generateStaticParams(){return getChapters('en').map(c=>({slug:c.slug}));}
export default function Page({ params }: { params: { slug: string } }){const ch=getChapter('en', params.slug); return <><Nav lang="en"/><article className="article"><h1>{ch.title}</h1><div dangerouslySetInnerHTML={{__html: ch.html}} /></article><footer className="footer"><a href="/en/books/volume-01-relationships">← Back to Volume I</a></footer></>}
