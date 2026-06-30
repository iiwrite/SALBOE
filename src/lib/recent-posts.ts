import { getCollection } from 'astro:content';

export interface RecentPost {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
}

export async function getRecentPosts(limit = 4): Promise<RecentPost[]> {
  const [poetry, stories] = await Promise.all([
    getCollection('poetry'),
    getCollection('stories'),
  ]);

  const posts: RecentPost[] = [
    ...poetry.map((p) => ({
      title: p.data.title,
      href: `/poetry/${p.slug}`,
      image: p.data.image,
      imageAlt: p.data.imageAlt,
    })),
    ...stories.map((s) => ({
      title: s.data.title,
      href: `/short-stories/${s.slug}`,
      image: s.data.image,
      imageAlt: s.data.imageAlt,
    })),
  ];

  const featuredOrder = [
    '/poetry/longed-peace',
    '/short-stories/if-i-was-a-worm',
    '/poetry/alfred-and-spike',
    '/poetry/blinded-by-blood',
  ];

  const ordered = featuredOrder
    .map((href) => posts.find((p) => p.href === href))
    .filter((p): p is RecentPost => Boolean(p));

  const remaining = posts.filter((p) => !featuredOrder.includes(p.href));
  return [...ordered, ...remaining].slice(0, limit);
}
