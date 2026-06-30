import { SITE_NAME, SITE_URL, AUTHOR, DEFAULT_DESCRIPTION } from './constants';

export interface SeoProps {
  title?: string;
  description?: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  pubDate?: Date;
  tags?: string[];
}

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return `${SITE_NAME} | Poetry, Short Stories & Creative Writing by ${AUTHOR}`;
  }
  return `${pageTitle} | ${SITE_NAME}`;
}

export function buildCanonical(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const clean = normalized === '/' ? '' : normalized.replace(/\/$/, '');
  return `${SITE_URL}${clean}`;
}

export function buildOgImage(image?: string): string {
  if (!image) return `${SITE_URL}/images/poetry/1.jpg`;
  if (image.startsWith('http')) return image;
  return `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    author: { '@type': 'Person', name: AUTHOR },
  };
}

export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR,
    url: `${SITE_URL}/about`,
    sameAs: [
      'https://www.linkedin.com/in/suvekshya-dani-834a8b200/',
      'https://www.instagram.com/subek.shy.a/',
    ],
  };
}

export function buildArticleSchema(props: SeoProps & { title: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.title,
    description: props.description ?? DEFAULT_DESCRIPTION,
    url: buildCanonical(props.path),
    image: buildOgImage(props.image),
    author: { '@type': 'Person', name: AUTHOR },
    datePublished: props.pubDate?.toISOString(),
    publisher: { '@type': 'Person', name: AUTHOR },
  };
}

export function buildCreativeWorkSchema(props: SeoProps & { title: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: props.title,
    description: props.description ?? DEFAULT_DESCRIPTION,
    url: buildCanonical(props.path),
    author: { '@type': 'Person', name: AUTHOR },
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildCanonical(item.path),
    })),
  };
}
