# FamilyCiv.com Bilingual Site Package

This package upgrades `familyciv.com` from mixed Chinese-English pages to separated Chinese and English versions.

## New URL Structure

```text
/
  Language landing page
/zh
  Chinese homepage
/en
  English homepage
/zh/books/volume-01-relationships
  Chinese Volume I
/en/books/volume-01-relationships
  English Volume I
/zh/books/volume-01-relationships/[slug]
  Chinese chapter page
/en/books/volume-01-relationships/[slug]
  English chapter page
```

## Important Changes

- Brand top-left:
  - Chinese: `家庭文明工程 Family Civilization Project`
  - English: `Family Civilization Project`
- The phrase `人是目的` is displayed as:
  - `HUMANS ARE ENDS`
- Bilingual Markdown is split automatically:
  - Chinese pages show `## 中文正文`
  - English pages show `## English Version`
- Existing book files can stay in:

```text
books/volume-01-relationships/
```

or be copied to:

```text
site/content/volume-01-relationships/
```

## Upload Instructions

Replace your existing GitHub `site/` directory with this new `site/` directory, then push to GitHub. Vercel should rebuild automatically.

## Local Development

```bash
cd site
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```
