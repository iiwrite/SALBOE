export const SITE_URL = 'https://subekshyadani.vercel.app';
export const SITE_NAME = 'Sprouting Through Resistance';
export const SITE_TAGLINE = 'Literally and Figuratively';
export const AUTHOR = 'Subekshya Dani';
export const AUTHOR_EMAIL = 'subekshya18in@gmail.com';

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/subekshya/',
  instagram: 'https://www.instagram.com/subek.shy.a/',
  email: `mailto:${AUTHOR_EMAIL}`,
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/poetry', label: 'Poetry' },
  { href: '/short-stories', label: 'Short Stories' },
  { href: '/blog', label: 'Blogs' },
  { href: '/about', label: 'About' },
] as const;

export const DEFAULT_DESCRIPTION =
  'Sprouting Through Resistance is the official literary website of Subekshya Dani featuring original poetry, personal essays, short stories and creative writing.';
