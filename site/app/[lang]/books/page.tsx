import Link from "next/link";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function BooksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const zh = lang === "zh";
  return (
    <>
      <h1 className="page-title">{zh ? "书籍" : "Books"}</h1>
      <p className="page-subtitle">
        {zh
          ? "家庭文明工程的书籍系统。当前重点：第一卷《关系篇》。"
          : "The book system of the Family Civilization Project. Current focus: Volume I, Relationships."}
      </p>
      <section className="grid">
        <Link className="card" href={`/${lang}/books/volume-01-relationships`}>
          <h3>{zh ? "第一卷：关系篇" : "Volume I: Relationships"}</h3>
          <p>{zh ? "请把孩子当成一个人。" : "Please Treat the Child as a Person."}</p>
        </Link>
      </section>
    </>
  );
}
