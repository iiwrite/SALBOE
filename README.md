# Sprouting Through Resistance

Literary website of **Subekshya Dani** — poetry, short stories, and blog essays.

Built with [Astro](https://astro.build) + Markdown content collections, deployed on Vercel.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build
npm run preview  # preview production build
```

## Publish a new blog post (< 5 minutes)

1. Create a file in `src/content/blog/your-article-slug.md`
2. Add frontmatter and write your content in Markdown
3. Add a hero image to `public/images/blog/`
4. Run `npm run dev` to preview at `/blog/your-article-slug`
5. Commit and push — Vercel deploys automatically

### Blog post template

```markdown
---
title: "Your Article Title"
description: "A concise summary for search engines (150 chars or less)."
pubDate: 2026-06-30
image: /images/blog/your-image.jpg
imageAlt: "Descriptive alt text"
imageCredit: "Photographer Name"
imageCreditUrl: "https://example.com"
tags: ["essay", "topic"]
draft: false
---

Your article content here...
```

Set `draft: true` to hide a post from the site and sitemap.

## Project structure

```
src/
  components/     # Reusable UI (Header, Nav, Footer, grids)
  content/        # Markdown content (blog, poetry, stories)
  layouts/        # Page templates
  lib/            # SEO helpers, constants
  pages/          # Routes (auto-generated from content)
  styles/         # Global CSS
public/
  images/         # Static images
  robots.txt
  scripts/        # Minimal client JS (nav)
```

## Adding poetry or short stories

Same workflow as blog posts — create a `.md` file in `src/content/poetry/` or `src/content/stories/`. Pages and sitemap update automatically.

## SEO

- Metadata, Open Graph, and Twitter cards: `src/lib/seo.ts`
- Sitemap: auto-generated on build via `@astrojs/sitemap`
- Legacy URL redirects: `astro.config.mjs`
