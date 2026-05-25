import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!isLang(lang)) notFound();
  const isZh = lang === "zh";
  return <article className="prose"><h1>{isZh ? "视频" : "Videos"}</h1><p>{isZh ? "这里将承接短视频、YouTube 长视频、访谈和公开演讲内容。" : "This page will host short videos, YouTube long-form videos, interviews, and public talks."}</p></article>;
}
