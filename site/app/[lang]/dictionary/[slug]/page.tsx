import Link from "next/link";
import { getDictionaryItem, getDictionaryItems, markdownToHtml } from "@/lib/content";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  for (const lang of ["zh", "en"] as const) {
    const entries = getDictionaryItems(lang);
    for (const entry of entries) params.push({ lang, slug: entry.slug });
  }
  return params;
}

export default async function EntryPage({ params }: { params: { lang: string; slug: string } }) {
  const { lang, slug } = params;
  if (!isLang(lang)) notFound();
  const entry = getDictionaryItem(slug, lang);
  if (!entry) notFound();
  const html = await markdownToHtml(entry.body);
  return <article className="prose"><p><Link href={`/${lang}/dictionary`}>← {lang === "zh" ? "返回词典" : "Back to dictionary"}</Link></p><h1>{entry.title}</h1><div dangerouslySetInnerHTML={{ __html: html }} /></article>;
}
