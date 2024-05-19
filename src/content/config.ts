import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content", schema: z.object({
        title: z.string(),
        author: z.string(),
        pubDate: z.date(),
        description: z.string(),
        banner: z.object({ url: z.string().url(), alt: z.string() }).optional(),
        tags: z.array(z.string()),
    })
})

export const collections = {
    'blog': blogCollection,
};
