import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), playformCompress(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: "ayu-dark",
      defaultColor: false
    },
    remarkPlugins: [],
    rehypePlugins: [],
    gfm: true
  }), sitemap()],
  site: "https://www.aniketnegi.com/",
  trailingSlash: 'always',
});
