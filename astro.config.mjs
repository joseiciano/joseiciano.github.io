import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import solidJs from "@astrojs/solid-js";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://joseiciano.github.io/",
  integrations: [mdx(), sitemap(), tailwind(), solidJs(), metaTags(), robotsTxt()],
});
