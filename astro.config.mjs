import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import tunnel from "astro-tunnel";
import playformCompress from "@playform/compress";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), tunnel(), playformCompress(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        dark: 'vitesse-dark',
        light: 'light-plus', // site color is incompatible with any theme
      },
      defaultColor: false,

    },
    remarkPlugins: [],
    rehypePlugins: [],
    gfm: false,
  }),],
  site: "https://aniketnegi.vercel.app/",
  trailingSlash: 'always'
});
