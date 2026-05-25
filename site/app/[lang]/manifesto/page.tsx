import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!isLang(lang)) notFound();

  const isZh = lang === "zh";
  return (
    <article className="prose">
      <h1>{isZh ? "家庭文明宣言" : "Family Civilization Manifesto"}</h1>
      <p>{isZh ? "家庭文明工程主张：人是目的，不是工具；孩子是人，不是父母的附属品；家庭应当成为尊严、自由、爱、边界和修复的起点。" : "The Family Civilization Project begins from one principle: human beings are ends, not tools. A child is a person, not an extension of parents. The family should become the first place of dignity, freedom, love, boundaries, and repair."}</p>
    </article>
  );
}
