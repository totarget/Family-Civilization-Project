import { getDictionaryEntries } from "@/lib/content";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function DictionaryPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!isLang(lang)) notFound();

  const entries = await getDictionaryEntries(lang);
  const zh = lang === "zh";

  return (
    <>
      <h1 className="page-title">{zh ? "家庭文明词典" : "Human Civilization Dictionary"}</h1>
      <p className="page-subtitle">
        {zh
          ? "一个持续演化的家庭文明与人类文明概念系统。"
          : "An evolving conceptual system for family civilization and human civilization."}
      </p>
      {entries.length === 0 ? (
        <div className="card">
          <h3>{zh ? "没有找到词条文件" : "No dictionary entries found"}</h3>
          <p>{zh ? "请确认词条文件位于 dictionary/ 或 dictionary/entries/。" : "Please place entries in dictionary/ or dictionary/entries/."}</p>
        </div>
      ) : (
        <div className="chapter-list">
          {entries.map((entry) => (
            <div className="chapter-link" key={entry.slug}>
              <strong>{entry.title}</strong>
              <span>{entry.filename}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
