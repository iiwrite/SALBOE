import { defineCollection, z } from 'astro:content';

const contentSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date().optional(),
  image: z.string(),
  imageAlt: z.string(),
  imageCredit: z.string().optional(),
  imageCreditUrl: z.string().url().optional(),
  imageSourceUrl: z.string().url().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  type: 'content',
  schema: contentSchema.extend({
    pubDate: z.coerce.date(),
  }),
});

const poetry = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const stories = defineCollection({
  type: 'content',
  schema: contentSchema,
});

export const collections = { blog, poetry, stories };
