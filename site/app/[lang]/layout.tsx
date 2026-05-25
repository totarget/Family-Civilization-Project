import SiteLayout from "@/components/SiteLayout";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return <SiteLayout lang={lang}>{children}</SiteLayout>;
}
