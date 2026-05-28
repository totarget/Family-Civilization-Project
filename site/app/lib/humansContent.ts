import fs from 'fs';
import path from 'path';

export type HumansArticle = {
  slug: string;
  title: string;
  content: string;
};

const root = process.cwd();

function resolveContentDir(lang: 'zh' | 'en'): string {
  const candidates = [
    path.join(root, 'content', lang, 'humans-are-ends'),
    path.join(root, 'site', 'content', lang, 'humans-are-ends'),
  ];

  return candidates.find((dir) => fs.existsSync(dir)) ?? candidates[0];
}

function stripFrontmatter(raw: string): string {
  if (raw.startsWith('---')) {
    const end = raw.indexOf('---', 3);
    if (end !== -1) {
      return raw.slice(end + 3).trim();
    }
  }
  return raw.trim();
}

function extractTitle(raw: string, fallback: string): string {
  const yamlTitle = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  if (yamlTitle?.[1]) {
    return yamlTitle[1].replace(/^"|"$/g, '').trim();
  }

  const h1 = raw.match(/^#\s+(.+)$/m);
  return h1?.[1]?.trim() ?? fallback;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function inlineMarkdown(value: string): string {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

export function getHumansArticles(lang: 'zh' | 'en'): HumansArticle[] {
  const dir = resolveContentDir(lang);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') && file !== 'README.md' && file !== 'resources.md')
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const slug = file.replace(/\.md$/, '');

      return {
        slug,
        title: extractTitle(raw, slug),
        content: stripFrontmatter(raw),
      };
    });
}

export function getHumansArticle(lang: 'zh' | 'en', slug: string): HumansArticle | null {
  const file = path.join(resolveContentDir(lang), `${slug}.md`);

  if (!fs.existsSync(file)) {
    return null;
  }

  const raw = fs.readFileSync(file, 'utf8');

  return {
    slug,
    title: extractTitle(raw, slug),
    content: stripFrontmatter(raw),
  };
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];
  let listOpen = false;
  let skippedFirstH1 = false;

  function closeList(): void {
    if (listOpen) {
      html.push('</ul>');
      listOpen = false;
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      closeList();
      continue;
    }

    if (line === '---') {
      closeList();
      html.push('<hr />');
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      closeList();

      const level = Math.min(heading[1].length, 3);

      if (level === 1 && !skippedFirstH1) {
        skippedFirstH1 = true;
        continue;
      }

      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (line.startsWith('>')) {
      closeList();
      html.push(`<blockquote>${inlineMarkdown(line.replace(/^>\s?/, ''))}</blockquote>`);
      continue;
    }

    const listItem = line.match(/^[-*]\s+(.+)$/);
    if (listItem) {
      if (!listOpen) {
        html.push('<ul>');
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(listItem[1])}</li>`);
      continue;
    }

    closeList();
    html.push(`<p>${inlineMarkdown(line)}</p>`);
  }

  closeList();
  return html.join('\n');
}
