import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!isLang(lang)) notFound();
  const isZh = lang === "zh";
  return <article className="prose"><h1>{isZh ? "关于家庭文明工程" : "About the Family Civilization Project"}</h1><p>{isZh ? "家庭文明工程由 David / 刘岗 发起。它是一个长期写作、出版、视频、网站、词典和未来 AI 助手共同构成的文明工程。" : "The Family Civilization Project was founded by David / Liu Gang. It is a long-term civilizational effort built through books, essays, videos, a public archive, a dictionary, and future AI assistants."}</p></article>;
}
