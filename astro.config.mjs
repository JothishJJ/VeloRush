import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: { theme: "min-light" },
  },
  site: "https://velorush.vercel.app",
  integrations: [mdx(), sitemap(), svelte(), tailwind()],
  output: "server",
  adapter: vercel(),
});
