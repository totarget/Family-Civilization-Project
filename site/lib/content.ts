import fs from "fs";
import path from "path";

export type Chapter = {
  number: number;
  slug: string;
  filename: string;
  titleZh: string;
  titleEn: string;
  content: string;
  excerpt: string;
};

const VOLUME_01_CANDIDATE_DIRS = [
  path.join(process.cwd(), "content", "volume-01-relationships"),
  path.join(process.cwd(), "..", "books", "volume-01-relationships"),
  path.join(process.cwd(), "..", "content", "volume-01-relationships"),
  path.join(process.cwd(), "..", "volume-01-relationships"),
];

function getVolume01Dir(): string | null {
  for (const dir of VOLUME_01_CANDIDATE_DIRS) {
    if (fs.existsSync(dir)) return dir;
  }
  return null;
}

function normalizeSlug(filename: string): string {
  return filename.replace(/\.md$/, "");
}

function getNumber(filename: string): number {
  const match = filename.match(/^(\d{3})-/);
  return match ? Number(match[1]) : 999;
}

function cleanHeading(line: string): string {
  return line.replace(/^#+\s*/, "").trim();
}

function extractTitles(content: string, fallback: string): { titleZh: string; titleEn: string } {
  const headings = content
    .split(/\r?\n/)
    .filter((line) => /^#{1,2}\s+/.test(line))
    .map(cleanHeading)
    .filter((line) => !line.toLowerCase().includes("github"));

  const zh = headings.find((h) => /[\u4e00-\u9fff]/.test(h));
  const en = headings.find((h) => !/[\u4e00-\u9fff]/.test(h) && /[a-zA-Z]/.test(h));

  const fallbackTitle = fallback
    .replace(/\.md$/, "")
    .replace(/^\d{3}-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());

  return {
    titleZh: zh || fallbackTitle,
    titleEn: en || fallbackTitle,
  };
}

function extractExcerpt(content: string): string {
  const plain = content
    .replace(/^#+\s+.*$/gm, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[*_>`#-]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return plain.slice(0, 180);
}

export function getVolume01Chapters(): Chapter[] {
  const dir = getVolume01Dir();
  if (!dir) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => /^\d{3}-.*\.md$/.test(file))
    .sort((a, b) => getNumber(a) - getNumber(b))
    .map((filename) => {
      const fullPath = path.join(dir, filename);
      const content = fs.readFileSync(fullPath, "utf-8");
      const { titleZh, titleEn } = extractTitles(content, filename);
      return {
        number: getNumber(filename),
        slug: normalizeSlug(filename),
        filename,
        titleZh,
        titleEn,
        content,
        excerpt: extractExcerpt(content),
      };
    });
}

export function getChapterBySlug(slug: string): Chapter | null {
  return getVolume01Chapters().find((chapter) => chapter.slug === slug) || null;
}

export function getAdjacentChapters(slug: string): { previous: Chapter | null; next: Chapter | null } {
  const chapters = getVolume01Chapters();
  const index = chapters.findIndex((chapter) => chapter.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}
