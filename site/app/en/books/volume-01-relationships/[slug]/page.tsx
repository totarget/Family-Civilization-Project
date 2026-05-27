import Nav from '@/app/lib/Nav';
import { getChapter, getChapters } from '@/app/lib/content';
export function generateStaticParams(){return getChapters('en').map(c=>({slug:c.slug}));}
export default async function Page({ params }: { params: Promise<{ slug: string }> | { slug: string } }){const resolvedParams = await params; const ch=getChapter('en', resolvedParams.slug); return <><Nav lang="en"/><article className="article"><h1>{ch.title}</h1><div dangerouslySetInnerHTML={{__html: ch.html}} /></article><footer className="footer"><a href="/en/books/volume-01-relationships">← Back to Volume I</a></footer></>}
