import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content", schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        image: z.object({ url: z.string().url(), alt: z.string() }),
        pubDate: z.date(),
        tags: z.array(z.string()),
    })
})

export const collections = {
    'blog': blogCollection,
};
