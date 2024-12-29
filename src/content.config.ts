import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      pubDate: z.date(),
      description: z.string(),
      banner: z.object({ url: image(), alt: z.string() }).optional(),
      tags: z.array(z.string()),
      postOrder: z.number(),
    }),
});

const litCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/lit" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.date(),
  }),
});

const journalCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
});

const workCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    links: z.array(z.object({ name: z.string(), url: z.string().url() })),
  }),
});

export const collections = {
  blog: blogCollection,
  lit: litCollection,
  journal: journalCollection,
  work: workCollection,
};
