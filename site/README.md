# FamilyCiv.com Bilingual Site Package — Fixed

This package fixes the Vercel build error:

```text
Module not found: Can't resolve '@/lib/i18n'
Module not found: Can't resolve '@/lib/content'
```

## Fixes

- Added `baseUrl` and `paths` to `tsconfig.json`.
- Added `next-env.d.ts`.
- Locked Next.js to `14.2.23` to match the current Vercel build environment.
- Replaced Next.js 15-style `params: Promise<...>` with Next.js 14-compatible `params` objects.
- Kept Chinese and English separated:

```text
/zh
/en
/zh/books/volume-01-relationships
/en/books/volume-01-relationships
```

## Upload

Replace your existing `site/` directory with this fixed `site/` directory and push to GitHub. Vercel should rebuild automatically.
