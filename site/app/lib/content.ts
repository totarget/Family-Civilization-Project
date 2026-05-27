import fs from 'fs';
import path from 'path';

export type Lang = 'zh' | 'en';
export type Chapter = { slug: string; title: string };
const root = process.cwd();

export function getChapters(lang: Lang): Chapter[] {
  const p = path.join(root, 'content', lang, 'volume-01-relationships', '_index.json');
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

export function getChapter(lang: Lang, slug: string) {
  const p = path.join(root, 'content', lang, 'volume-01-relationships', `${slug}.md`);
  const raw = fs.readFileSync(p, 'utf8');
  const title = (raw.split('\n').find(l => l.startsWith('# ')) || slug).replace(/^#\s*/, '').trim();
  return { title, html: markdownToHtml(raw) };
}

function inline(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]*)`/g, '<code>$1</code>');
}

export function markdownToHtml(md: string) {
  const lines = md.split(/\r?\n/);
  let html = '';
  let listOpen = false;
  function closeList(){ if(listOpen){ html += '</ul>'; listOpen = false; } }
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { closeList(); continue; }
    if (line === '---') { closeList(); html += '<hr/>'; continue; }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) { closeList(); const level = Math.min(h[1].length, 3); html += `<h${level}>${inline(h[2])}</h${level}>`; continue; }
    if (line.startsWith('>')) { closeList(); html += `<blockquote>${inline(line.replace(/^>\s?/, ''))}</blockquote>`; continue; }
    const li = line.match(/^[-*]\s+(.*)$/);
    if (li) { if(!listOpen){ html += '<ul>'; listOpen = true; } html += `<li>${inline(li[1])}</li>`; continue; }
    closeList(); html += `<p>${inline(line)}</p>`;
  }
  closeList();
  return html;
}
