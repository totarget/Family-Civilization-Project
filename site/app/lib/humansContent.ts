import fs from 'fs';
import path from 'path';

export type HumansArticle = {
  slug: string;
  title: string;
  content: string;
};

const root = process.cwd();

function stripFrontmatter(raw: string) {
  if (raw.startsWith('---')) {
    const end = raw.indexOf('---', 3);
    if (end !== -1) return raw.slice(end + 3).trim();
  }
  return raw.trim();
}

function extractTitle(raw: string, fallback: string) {
  const yamlTitle = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  if (yamlTitle) return yamlTitle[1].replace(/^"|"$/g, '');
  const h1 = raw.match(/^#\s+(.+)$/m);
  return h1 ? h1[1] : fallback;
}

function contentDir(lang: string) {
  return path.join(root, 'site', 'content', lang, 'humans-are-ends');
}

export function getHumansArticles(lang: string): HumansArticle[] {
  const dir = contentDir(lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'README.md' && f !== 'resources.md')
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      return {
        slug: file.replace(/\.md$/, ''),
        title: extractTitle(raw, file.replace(/\.md$/, '')),
        content: stripFrontmatter(raw),
      };
    });
}

export function getHumansArticle(lang: string, slug: string): HumansArticle | null {
  const file = path.join(contentDir(lang), `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  return { slug, title: extractTitle(raw, slug), content: stripFrontmatter(raw) };
}

export function markdownToHtml(md: string) {
  let html = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  html = html
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/^---$/gm, '<hr />')
    .replace(/^> (.*)$/gm, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

  const blocks = html.split(/\n{2,}/).map((block) => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (/^<(h1|h2|h3|hr|blockquote)/.test(trimmed)) return trimmed;
    if (/^- /m.test(trimmed)) {
      const items = trimmed.split('\n').map((line) => line.replace(/^-\s+(.+)$/, '<li>$1</li>')).join('');
      return `<ul>${items}</ul>`;
    }
    return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`;
  }).join('\n');
  return blocks;
}
