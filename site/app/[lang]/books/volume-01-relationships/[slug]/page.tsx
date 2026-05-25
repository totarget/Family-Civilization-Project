import Link from "next/link";
import { getVolumeChapter, getVolumeChapters } from "@/lib/content";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  for (const lang of ["zh", "en"] as const) {
    const chapters = await getVolumeChapters(lang);
    for (const chapter of chapters) params.push({ lang, slug: chapter.slug });
  }
  return params;
}

export default async function ChapterPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const { lang, slug } = params;
  if (!isLang(lang)) notFound();

  const chapter = await getVolumeChapter(slug, lang);
  if (!chapter) notFound();

  return (
    <article className="prose">
      <p><Link href={`/${lang}/books/volume-01-relationships`}>← {lang === "zh" ? "返回目录" : "Back to contents"}</Link></p>
      <h1>{chapter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: chapter.html }} />
    </article>
  );
}
