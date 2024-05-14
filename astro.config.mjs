import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), tunnel()],
  site: "https://aniketnegi.vercel.app",
  trailingSlash: 'always'
});