import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import tunnel from "astro-tunnel";
import playformCompress from "@playform/compress";

import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';
import remarkObsidian from "remark-obsidian";
import rehypeExternalLinks from 'rehype-external-links';
import { remarkModifiedTime } from './remark-modified-time.mjs';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), tunnel(), playformCompress(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: "houston",
      defaultColor: false,

    },
    remarkPlugins: [remarkToc, remarkObsidian, remarkModifiedTime],
    rehypePlugins: [[
      rehypeExternalLinks,
      // {
      //   content: { type: 'svg', value: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>' }
      // }
    ],],
    gfm: false,
  }),],
  site: "https://aniketnegi.vercel.app/",
  trailingSlash: 'always'
});
