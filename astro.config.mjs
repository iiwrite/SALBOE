import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const site = 'https://subekshyadani.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [sitemap()],
  redirects: {
    '/blogs': '/blog',
    '/poetry/poetry': '/poetry',
    '/poetry/poetry.html': '/poetry',
    '/shortstories/short': '/short-stories',
    '/shortstories/short.html': '/short-stories',
    '/about.html': '/about',
    '/poetry/poems/poem1': '/poetry/longed-peace',
    '/poetry/poems/poem1.html': '/poetry/longed-peace',
    '/poetry/poems/poem2': '/poetry/blinded-by-blood',
    '/poetry/poems/poem2.html': '/poetry/blinded-by-blood',
    '/poetry/poems/poem3': '/poetry/alfred-and-spike',
    '/poetry/poems/poem3.html': '/poetry/alfred-and-spike',
    '/poetry/poems/poem4': '/poetry/reds-and-blues',
    '/poetry/poems/poem4.html': '/poetry/reds-and-blues',
    '/poetry/poems/poem5': '/poetry/escaping',
    '/poetry/poems/poem5.html': '/poetry/escaping',
    '/poetry/poems/poem6': '/poetry/cycle',
    '/poetry/poems/poem6.html': '/poetry/cycle',
    '/shortstories/stories/ifiwasaworm': '/short-stories/if-i-was-a-worm',
    '/shortstories/stories/ifiwasaworm.html': '/short-stories/if-i-was-a-worm',
    '/shortstories/stories/story1': '/short-stories/if-i-was-a-worm',
    '/blogs/blogs.html': '/blog',
    '/blogs/all blogs/blog1': '/blog/stop-letting-the-internet-define-you',
    '/blogs/all blogs/blog1.html': '/blog/stop-letting-the-internet-define-you',
  },
});
