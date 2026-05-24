import fs from 'fs';
import path from 'path';

export type ContentItem = {
  slug: string;
  filename: string;
  title: string;
  number?: string;
  content: string;
};

const contentRoot = path.join(process.cwd(), 'content');

function isMarkdown(filename: string) {
  return filename.endsWith('.md') && !filename.startsWith('.');
}

function readDirectory(dirName: string): ContentItem[] {
  const dir = path.join(contentRoot, dirName);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter(isMarkdown)
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
    .map((filename) => {
      const fullPath = path.join(dir, filename);
      const content = fs.readFileSync(fullPath, 'utf8');
      const slug = filename.replace(/\.md$/, '');
      const number = filename.match(/^(\d{3}[a-z]?)/)?.[1];
      const title = extractTitle(content, slug);
      return { slug, filename, title, number, content };
    });
}

export function getVolumeItems() {
  return readDirectory('volume-01-relationships').filter((item) => /^\d{3}[a-z]?/.test(item.filename));
}

export function getVolumeItem(slug: string) {
  return getVolumeItems().find((item) => item.slug === slug) ?? null;
}

export function getDictionaryItems() {
  return readDirectory('dictionary').filter((item) => /^\d{3}/.test(item.filename));
}

export function getDictionaryItem(slug: string) {
  return getDictionaryItems().find((item) => item.slug === slug) ?? null;
}

export function getSpecialMarkdown(filename: string) {
  const fullPath = path.join(contentRoot, 'volume-01-relationships', filename);
  if (!fs.existsSync(fullPath)) return null;
  const content = fs.readFileSync(fullPath, 'utf8');
  return { filename, slug: filename.replace(/\.md$/, ''), title: extractTitle(content, filename), content };
}

export function extractTitle(content: string, fallback: string) {
  const lines = content.split(/\r?\n/);
  const heading = lines.find((line) => /^#\s+/.test(line.trim()));
  if (heading) return heading.replace(/^#\s+/, '').trim();
  return fallback
    .replace(/\.md$/, '')
    .replace(/^\d{3}[a-z]?[-_]?/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
