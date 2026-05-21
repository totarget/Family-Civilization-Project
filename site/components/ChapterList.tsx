import Link from "next/link";
import type { Chapter } from "@/lib/content";

export function ChapterList({ chapters }: { chapters: Chapter[] }) {
  if (chapters.length === 0) {
    return (
      <div className="notice">
        <h3>No Markdown chapters found yet</h3>
        <p>
          Put your files in <code>site/content/volume-01-relationships/</code> or
          <code> books/volume-01-relationships/</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="chapter-grid">
      {chapters.map((chapter) => (
        <Link
          key={chapter.slug}
          href={`/books/volume-01-relationships/${chapter.slug}`}
          className="chapter-card"
        >
          <span className="chapter-number">{String(chapter.number).padStart(3, "0")}</span>
          <h3>{chapter.titleEn}</h3>
          <p>{chapter.titleZh}</p>
        </Link>
      ))}
    </div>
  );
}
