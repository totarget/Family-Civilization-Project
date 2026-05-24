# FamilyCiv.com Site Updated Package

This `site/` directory is an updated Next.js website package for **familyciv.com**.

It updates the website from the earlier 80-section version to the latest completed Volume I: Relationships first-draft structure, including:

- Volume I chapter files through Section 100
- Chinese and English prefaces
- Dynamic chapter pages
- Dictionary pages for current entries 024–066
- Updated Home, Books, Volume I, About, Start Here, Videos, GitHub, and Manifesto pages
- Redirects from `/volume-01`, `/volume-i`, and `/relationships` to `/books/volume-01-relationships`

## Deployment

In Vercel, the project settings should remain:

```txt
Root Directory: site
Framework Preset: Next.js
Build Command: npm run build
Install Command: npm install
Output Directory: leave blank / no override
```

## Upload

Replace the existing repository `site/` folder with this `site/` folder, commit, and push to GitHub. Vercel will rebuild automatically.

## Important Routes

- `/`
- `/manifesto`
- `/books`
- `/books/volume-01-relationships`
- `/books/volume-01-relationships/096-ai-family-civilization-advisor`
- `/dictionary`
- `/start-here`
- `/about`
- `/videos`
- `/github`
