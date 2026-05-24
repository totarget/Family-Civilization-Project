import fs from 'fs';
import path from 'path';

const root = process.cwd();
const volumeDir = path.join(root, 'content', 'volume-01-relationships');
const files = fs.readdirSync(volumeDir).filter((f) => f.endsWith('.md')).sort();
const chapters = files.filter((f) => /^\d{3}[a-z]?/.test(f));
console.log(`Volume I markdown files: ${files.length}`);
console.log(`Chapter files: ${chapters.length}`);
console.log(`First: ${chapters[0]}`);
console.log(`Last: ${chapters[chapters.length - 1]}`);
