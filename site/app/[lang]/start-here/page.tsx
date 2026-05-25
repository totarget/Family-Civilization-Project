import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const isZh = lang === "zh";
  return (
    <article className="prose">
      <h1>{isZh ? "从这里开始" : "Start Here"}</h1>
      <p>{isZh ? "如果这是第一次来到这里，建议从《请把孩子当成一个人》第一卷《关系篇》开始，再阅读 HUMAN ARE ENDS、宣言和词典。" : "If this is your first time here, begin with Volume I, Please Treat the Child as a Person, then read HUMANS ARE ENDS, the manifesto, and the dictionary."}</p>
    </article>
  );
}
