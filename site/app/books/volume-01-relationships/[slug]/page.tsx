import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { getAdjacentChapters, getChapterBySlug, getVolume01Chapters } from "@/lib/content";

export function generateStaticParams() {
  return getVolume01Chapters().map((chapter) => ({
    slug: chapter.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const chapter = getChapterBySlug(params.slug);
  if (!chapter) return {};
  return {
    title: `${String(chapter.number).padStart(3, "0")} — ${chapter.titleEn}`,
    description: chapter.excerpt,
  };
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = getChapterBySlug(params.slug);
  if (!chapter) notFound();

  const { previous, next } = getAdjacentChapters(params.slug);

  return (
    <article className="article narrow">
      <div className="article-header">
        <Link href="/books/volume-01-relationships" className="eyebrow">
          ← Volume I: Relationships
        </Link>
        <p className="article-number">{String(chapter.number).padStart(3, "0")}</p>
        <h1>{chapter.titleEn}</h1>
        <p className="lead">{chapter.titleZh}</p>
      </div>

      <div className="markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{chapter.content}</ReactMarkdown>
      </div>

      <nav className="article-nav">
        {previous ? (
          <Link href={`/books/volume-01-relationships/${previous.slug}`}>
            ← {String(previous.number).padStart(3, "0")} {previous.titleEn}
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link href={`/books/volume-01-relationships/${next.slug}`}>
            {String(next.number).padStart(3, "0")} {next.titleEn} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
