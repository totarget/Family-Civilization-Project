import Link from "next/link";
import { getVolumeItems } from "@/lib/content";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function VolumePage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!isLang(lang)) notFound();
  const chapters = getVolumeItems(lang);
  const zh = lang === "zh";
  return (
    <>
      <p><Link href={`/${lang}/books`}>← {zh ? "返回书籍" : "Back to Books"}</Link></p>
      <h1 className="page-title">{zh ? "第一卷：关系篇" : "Volume I: Relationships"}</h1>
      <p className="page-subtitle">{zh ? "请把孩子当成一个人：家庭文明工程关系篇。" : "Please Treat the Child as a Person: A Family Civilization Manifesto for Wounded and Silenced Children."}</p>
      <div className="chapter-list">
        {chapters.map((chapter) => (
          <Link className="chapter-link" key={chapter.slug} href={`/${lang}/books/volume-01-relationships/${chapter.slug}`}>
            <strong>{chapter.title}</strong><span>{chapter.filename}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
