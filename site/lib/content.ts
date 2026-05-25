import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Lang } from "@/lib/i18n";

const root = process.cwd();

const possibleVolumeDirs = [
  path.join(root, "content", "volume-01-relationships"),
  path.join(root, "..", "books", "volume-01-relationships"),
  path.join(root, "..", "content", "volume-01-relationships"),
  path.join(root, "..", "volume-01-relationships"),
];

const possibleDictionaryDirs = [
  path.join(root, "..", "dictionary", "entries"),
  path.join(root, "..", "dictionary"),
  path.join(root, "content", "dictionary"),
];

function firstExistingDir(dirs: string[]) {
  return dirs.find((dir) => fs.existsSync(dir) && fs.statSync(dir).isDirectory());
}

function cleanTitle(line: string) {
  return line.replace(/^#+\s*/, "").trim();
}

function firstHeading(text: string) {
  const line = text.split(/\r?\n/).find((l) => /^#\s+/.test(l));
  return line ? cleanTitle(line) : "";
}

function stripMainHeadings(text: string) {
  return text
    .replace(/^#\s+.*$/gm, "")
    .replace(/^---\s*$/gm, "")
    .trim();
}

export function slugFromFilename(filename: string) {
  return filename.replace(/\.mdx?$/, "");
}

export function getVolumeFiles() {
  const dir = firstExistingDir(possibleVolumeDirs);
  if (!dir) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => /^\d{3}-.+\.mdx?$/.test(name))
    .sort()
    .map((name) => path.join(dir, name));
}

export function splitBilingual(raw: string, lang: Lang) {
  const parsed = matter(raw);
  const content = parsed.content.trim();

  const zhMarker = /##\s*中文正文\s*/i;
  const enMarker = /##\s*English Version\s*/i;

  if (zhMarker.test(content) && enMarker.test(content)) {
    const beforeZh = content.split(zhMarker)[0];
    const afterZh = content.split(zhMarker)[1];
    const zhPart = afterZh.split(enMarker)[0].trim();
    const enPart = content.split(enMarker)[1].trim();

    const headings = beforeZh
      .split(/\r?\n/)
      .filter((line) => /^#\s+/.test(line))
      .map(cleanTitle);

    const title = lang === "zh" ? headings[0] || firstHeading(zhPart) : headings[1] || firstHeading(enPart);
    return {
      title,
      body: lang === "zh" ? zhPart : enPart,
    };
  }

  const englishIndex = content.search(/(^|\n)##\s*English|(^|\n)#\s*English|(^|\n)##\s*英文/i);
  if (englishIndex >= 0) {
    const zhPart = content.slice(0, englishIndex).trim();
    const enPart = content.slice(englishIndex).replace(/^#+\s*(English|英文).*$/im, "").trim();
    return {
      title: lang === "zh" ? firstHeading(zhPart) : firstHeading(enPart) || firstHeading(content),
      body: lang === "zh" ? stripMainHeadings(zhPart) : stripMainHeadings(enPart),
    };
  }

  return {
    title: firstHeading(content),
    body: stripMainHeadings(content),
  };
}

export async function markdownToHtml(markdown: string) {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

export async function getVolumeChapters(lang: Lang) {
  const files = getVolumeFiles();
  return Promise.all(
    files.map(async (file) => {
      const raw = fs.readFileSync(file, "utf8");
      const split = splitBilingual(raw, lang);
      return {
        slug: slugFromFilename(path.basename(file)),
        filename: path.basename(file),
        title: split.title || slugFromFilename(path.basename(file)),
      };
    })
  );
}

export async function getVolumeChapter(slug: string, lang: Lang) {
  const file = getVolumeFiles().find((f) => slugFromFilename(path.basename(f)) === slug);
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const split = splitBilingual(raw, lang);
  return {
    slug,
    title: split.title || slug,
    html: await markdownToHtml(split.body),
  };
}

export function getDictionaryFiles() {
  const dir = firstExistingDir(possibleDictionaryDirs);
  if (!dir) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => /^\d{3}-.+\.mdx?$/.test(name))
    .sort()
    .map((name) => path.join(dir, name));
}

export async function getDictionaryEntries(lang: Lang) {
  const files = getDictionaryFiles();
  return Promise.all(
    files.map(async (file) => {
      const raw = fs.readFileSync(file, "utf8");
      const split = splitBilingual(raw, lang);
      return {
        slug: slugFromFilename(path.basename(file)),
        filename: path.basename(file),
        title: split.title || firstHeading(raw) || slugFromFilename(path.basename(file)),
      };
    })
  );
}
