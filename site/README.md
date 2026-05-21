# FamilyCiv.com Site Starter

This is the starter website for **Family Civilization Project**.

It is designed for this repository:

```text
totarget/Family-Civilization-Project
```

Recommended deployment:

```text
GitHub → Vercel → familyciv.com
```

---

## 1. Where to put this folder

Upload this entire `site/` folder into the root of your GitHub repository:

```text
Family-Civilization-Project/
├── README.md
├── books/
│   └── volume-01-relationships/
│       ├── 001-...
│       └── 080-...
└── site/
    ├── app/
    ├── components/
    ├── content/
    ├── lib/
    └── package.json
```

---

## 2. Markdown content source

The website will automatically look for Volume I Markdown files in these locations, in this order:

```text
site/content/volume-01-relationships/
../books/volume-01-relationships/
../content/volume-01-relationships/
../volume-01-relationships/
```

So you can either:

1. Keep book files in `books/volume-01-relationships/`, or
2. Copy them into `site/content/volume-01-relationships/`.

The files should use this style:

```text
001-why-humanity-must-rebuild-family-civilization.md
080-volume-one-conclusion-from-family-relationships-to-human-civilization.md
```

---

## 3. Local development

```bash
cd site
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## 4. Deploy to Vercel

1. Go to Vercel.
2. Import GitHub repository: `totarget/Family-Civilization-Project`.
3. Set **Root Directory** to:

```text
site
```

4. Framework Preset: `Next.js`.
5. Deploy.
6. Add domains:

```text
familyciv.com
www.familyciv.com
```

7. Follow the DNS instructions shown by Vercel.

---

## 5. Update workflow

After deployment:

```text
Write or revise Markdown
↓
Push to GitHub
↓
Vercel automatically rebuilds website
↓
familyciv.com updates
```

---

## 6. First version pages

- Home
- Manifesto
- Books
- Volume I: Relationships
- Chapter pages generated from Markdown
- Start Here
- About
- Videos
- GitHub

---

## 7. Future upgrades

- Search
- Chinese / English separated reading mode
- PDF / EPUB download
- Newsletter
- YouTube embedding
- Ask Family Civilization AI
- Multi-volume book system
