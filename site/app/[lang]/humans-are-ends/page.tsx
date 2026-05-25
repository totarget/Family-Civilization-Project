import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const isZh = lang === "zh";
  return (
    <article className="prose">
      <h1>{isZh ? "HUMANS ARE ENDS" : "HUMANS ARE ENDS"}</h1>
      <p>{isZh ? "人是目的，不是手段。人不是工具，不是成绩机器，不是家庭面子的载体，也不是任何系统的消耗品。这是家庭文明工程的最高原则。" : "Human beings are ends, not means. A human being is not a tool, not a success machine, not a vessel of family face, and not a consumable resource for any system. This is the highest principle of the Family Civilization Project."}</p>
    </article>
  );
}
