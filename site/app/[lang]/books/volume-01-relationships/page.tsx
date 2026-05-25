import Link from "next/link";
import { getVolumeChapters } from "@/lib/content";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function VolumePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const chapters = await getVolumeChapters(lang);
  const zh = lang === "zh";

  return (
    <>
      <h1 className="page-title">{zh ? "第一卷：关系篇" : "Volume I: Relationships"}</h1>
      <p className="page-subtitle">
        {zh
          ? "请把孩子当成一个人：家庭文明工程关系篇。"
          : "Please Treat the Child as a Person: A Family Civilization Manifesto for Wounded and Silenced Children."}
      </p>

      {chapters.length === 0 ? (
        <div className="card">
          <h3>{zh ? "没有找到章节文件" : "No chapter files found"}</h3>
          <p>
            {zh
              ? "请确认 Markdown 文件位于 books/volume-01-relationships/ 或 site/content/volume-01-relationships/。"
              : "Please place Markdown files in books/volume-01-relationships/ or site/content/volume-01-relationships/."}
          </p>
        </div>
      ) : (
        <div className="chapter-list">
          {chapters.map((chapter) => (
            <Link className="chapter-link" key={chapter.slug} href={`/${lang}/books/volume-01-relationships/${chapter.slug}`}>
              <strong>{chapter.title}</strong>
              <span>{chapter.filename}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
