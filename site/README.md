# FamilyCiv.com Bilingual Site Package — Fixed from site0

This package is based on the uploaded `site0.zip`, preserving:

- Real 100-section Volume I content
- Dictionary content
- Existing public images, including `/assets/humans-are-ends-logo.png`
- Book cover images

## Main fixes

1. Chinese and English routes are separated:

```text
/zh
/en
/zh/books
/en/books
/zh/books/volume-01-relationships
/en/books/volume-01-relationships
```

2. Volume I is listed under Books, not as a parallel top-level navigation item.

3. The homepage displays the original uploaded logo image:

```text
/public/assets/humans-are-ends-logo.png
```

4. The sample chapter has been removed. The site reads real files from:

```text
site/content/volume-01-relationships/
```

5. Sections 081–090 have been replaced with the latest self-relationship psychology upgrade, integrating Freud, Jung, and Adler.

6. Dictionary entries 067–077 have been added.

## Upload

Replace the current GitHub `site/` directory with this `site/` directory, then push to `main`. Vercel should rebuild automatically.


## Apple-inspired typography update

This version uses a free/system font stack only. No font files are bundled:

```css
-apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB",
"Microsoft YaHei UI", "Noto Sans CJK SC", "Segoe UI", Roboto, Helvetica, Arial, sans-serif
```

The visual style is lighter and closer to Apple-style typography: smaller navigation, smaller article body, softer cards, neutral background, refined spacing, and less oversized headings.


## Dependency fix for Vercel

This version fixes the latest Vercel error by adding missing dependencies used by `components/MarkdownView.tsx`:

```json
"react-markdown": "^9.0.1",
"remark-gfm": "^4.0.0"
```

It also adds ESLint packages because Next.js 14 checks lint configuration during builds:

```json
"eslint": "^8.57.1",
"eslint-config-next": "14.2.23"
```
