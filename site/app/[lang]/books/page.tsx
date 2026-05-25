import Link from "next/link";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function BooksPage({ params }: { params: { lang: string } }) {
  const { lang } = params;
  if (!isLang(lang)) notFound();
  const zh = lang === "zh";
  return (
    <>
      <h1 className="page-title">{zh ? "书籍" : "Books"}</h1>
      <p className="page-subtitle">{zh ? "家庭文明工程的书籍系统。第一卷《关系篇》是当前核心出版内容。" : "The book system of the Family Civilization Project. Volume I: Relationships is the current core publication."}</p>
      <section className="grid">
        <Link className="card" href={`/${lang}/books/volume-01-relationships`}>
          <img src={zh ? "/images/chinese-cover.jpg" : "/images/english-cover.jpg"} alt={zh ? "第一卷封面" : "Volume I cover"} />
          <div className="hero-kicker">{zh ? "第一卷" : "Volume I"}</div>
          <h3>{zh ? "关系篇" : "Relationships"}</h3>
          <p>{zh ? "《请把孩子当成一个人：家庭文明工程关系篇》。" : "Please Treat the Child as a Person: A Family Civilization Manifesto for Wounded and Silenced Children."}</p>
        </Link>
        <div className="card"><div className="hero-kicker">{zh ? "第二卷" : "Volume II"}</div><h3>{zh ? "能力篇" : "Ability"}</h3><p>{zh ? "人格、情绪、责任、自由、合作、创造与幸福能力。" : "Personhood, emotion, responsibility, freedom, cooperation, creativity, and the capacity for happiness."}</p></div>
        <div className="card"><div className="hero-kicker">{zh ? "第三卷" : "Volume III"}</div><h3>{zh ? "商业篇" : "Business"}</h3><p>{zh ? "契约、信任、价值创造、商业文明与人的尊严。" : "Contract, trust, value creation, business civilization, and human dignity."}</p></div>
      </section>
    </>
  );
}
