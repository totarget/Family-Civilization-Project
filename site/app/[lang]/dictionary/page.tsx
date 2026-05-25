import Link from "next/link";
import { getDictionaryItems } from "@/lib/content";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function DictionaryPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!isLang(lang)) notFound();
  const entries = getDictionaryItems(lang);
  const zh = lang === "zh";
  return (
    <>
      <h1 className="page-title">{zh ? "家庭文明词典" : "Human Civilization Dictionary"}</h1>
      <p className="page-subtitle">{zh ? "一个持续演化的家庭文明与人类文明概念系统。" : "An evolving conceptual system for family civilization and human civilization."}</p>
      <div className="chapter-list">
        {entries.map((entry) => <Link className="chapter-link" key={entry.slug} href={`/${lang}/dictionary/${entry.slug}`}><strong>{entry.title}</strong><span>{entry.filename}</span></Link>)}
      </div>
    </>
  );
}
