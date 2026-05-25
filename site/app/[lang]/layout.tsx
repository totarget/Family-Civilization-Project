import SiteLayout from "@/components/SiteLayout";
import { isLang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }];
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const { lang } = params;
  if (!isLang(lang)) notFound();
  return <SiteLayout lang={lang}>{children}</SiteLayout>;
}
