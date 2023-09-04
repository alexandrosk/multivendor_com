import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: 'https://multivendorshop.com',
    integrations: [tailwind(),  sitemap()],
    output: 'server',
    adapter: vercel({
        analytics: true,
    }),
});