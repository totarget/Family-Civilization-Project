
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Lang } from "@/lib/i18n";

export type ContentItem = {
  slug: string;
  filename: string;
  title: string;
  number?: string;
  body: string;
};

const contentRoot = path.join(process.cwd(), "content");

function isMarkdown(filename: string) {
  return filename.endsWith(".md") && !filename.startsWith(".");
}

function cleanTitle(line: string) {
  return line.replace(/^#+\s*/, "").trim();
}

function firstHeading(text: string) {
  const line = text.split(/\r?\n/).find((l) => /^#\s+/.test(l.trim()));
  return line ? cleanTitle(line) : "";
}

function headingsBeforeMarkers(content: string) {
  const marker = content.search(/^##\s*(中文版|中文正文|中文|Chinese Version|English Version|English|英文版|英文)\s*$/im);
  const head = marker >= 0 ? content.slice(0, marker) : content;
  return head.split(/\r?\n/).filter((l) => /^#\s+/.test(l.trim())).map(cleanTitle);
}

function stripHeadingsAndMarkers(text: string) {
  return text
    .replace(/^#\s+.*$/gm, "")
    .replace(/^##\s*(中文版|中文正文|中文|Chinese Version|English Version|English|英文版|英文)\s*$/gim, "")
    .replace(/^---\s*$/gm, "")
    .replace(/^English Version\s*$/gim, "")
    .replace(/^中文版\s*$/gim, "")
    .trim();
}

export function splitBilingual(raw: string, lang: Lang, fallback: string) {
  const parsed = matter(raw);
  const content = parsed.content.trim();
  const data = parsed.data as Record<string, string>;
  const headings = headingsBeforeMarkers(content);

  const enMatch = content.match(/^##\s*(English Version|English|英文版|英文)\s*$/im);
  const zhMatch = content.match(/^##\s*(中文版|中文正文|中文|Chinese Version)\s*$/im);
  const enIndex = enMatch && enMatch.index !== undefined ? enMatch.index : -1;
  const zhIndex = zhMatch && zhMatch.index !== undefined ? zhMatch.index : -1;

  let zhBody = content;
  let enBody = content;

  if (enIndex >= 0) {
    enBody = content.slice(enIndex).replace(/^##\s*(English Version|English|英文版|英文)\s*$/im, "");
    if (zhIndex >= 0 && zhIndex < enIndex) {
      zhBody = content.slice(zhIndex, enIndex).replace(/^##\s*(中文版|中文正文|中文|Chinese Version)\s*$/im, "");
    } else {
      zhBody = content.slice(0, enIndex);
    }
  } else if (zhIndex >= 0) {
    zhBody = content.slice(zhIndex).replace(/^##\s*(中文版|中文正文|中文|Chinese Version)\s*$/im, "");
    enBody = zhBody;
  }

  const zhTitle = data.title || headings[0] || firstHeading(zhBody) || fallback;
  const enTitle = data.english_title || data.en_title || headings[1] || firstHeading(enBody) || zhTitle;

  return {
    title: lang === "zh" ? zhTitle : enTitle,
    body: stripHeadingsAndMarkers(lang === "zh" ? zhBody : enBody),
  };
}

export function slugFromFilename(filename: string) {
  return filename.replace(/\.md$/, "");
}

function readDirectory(dirName: string, lang: Lang): ContentItem[] {
  const dir = path.join(contentRoot, dirName);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(isMarkdown)
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
    .map((filename) => {
      const fullPath = path.join(dir, filename);
      const raw = fs.readFileSync(fullPath, "utf8");
      const slug = slugFromFilename(filename);
      const number = filename.match(/^(\d{3}[a-z]?)/)?.[1];
      const split = splitBilingual(raw, lang, slug);
      return { slug, filename, title: split.title, number, body: split.body };
    });
}

export function getVolumeItems(lang: Lang) {
  return readDirectory("volume-01-relationships", lang).filter((item) => /^\d{3}[a-z]?/.test(item.filename));
}

export function getVolumeItem(slug: string, lang: Lang) {
  return getVolumeItems(lang).find((item) => item.slug === slug) ?? null;
}

export function getDictionaryItems(lang: Lang) {
  return readDirectory("dictionary", lang).filter((item) => /^\d{3}/.test(item.filename));
}

export function getDictionaryItem(slug: string, lang: Lang) {
  return getDictionaryItems(lang).find((item) => item.slug === slug) ?? null;
}

export function getSpecialMarkdown(filename: string, lang: Lang) {
  const fullPath = path.join(contentRoot, "volume-01-relationships", filename);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const split = splitBilingual(raw, lang, filename);
  return { filename, slug: filename.replace(/\.md$/, ""), title: split.title, body: split.body };
}

export async function markdownToHtml(markdown: string) {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}
