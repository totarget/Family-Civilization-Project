import fs from "fs";
import path from "path";

const candidates = [
  path.join(process.cwd(), "content", "volume-01-relationships"),
  path.join(process.cwd(), "..", "books", "volume-01-relationships"),
  path.join(process.cwd(), "..", "content", "volume-01-relationships"),
  path.join(process.cwd(), "..", "volume-01-relationships"),
];

let found = false;

for (const dir of candidates) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    console.log(`Found ${files.length} Markdown files in: ${dir}`);
    found = true;
  }
}

if (!found) {
  console.log("No volume Markdown directory found yet.");
  console.log("Put files in site/content/volume-01-relationships/ or ../books/volume-01-relationships/");
}
