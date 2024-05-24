import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content", schema: ({ image }) => z.object({
        title: z.string(),
        author: z.string(),
        pubDate: z.date(),
        description: z.string(),
        banner: z.object({ url: image(), alt: z.string() }).optional(),
        tags: z.array(z.string()),
        postOrder: z.number(),
    })
})

const litCollection = defineCollection({
    type: "content", schema: z.object({
        title: z.string(),
        author: z.string(),
        pubDate: z.date(),
    })
})

const gardenCollection = defineCollection({
    type: "content", schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        // banner: z.object({ url: image(), alt: z.string() }).optional(),
    })
})

export const collections = {
    'blog': blogCollection,
    'lit': litCollection,
    'garden': gardenCollection,
};
