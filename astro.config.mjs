import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";  
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://test2og.netlify.app/',
  integrations: [
    astroImageTools,
    icon(
      {
        iconDir: "static/images/icons",
        include: {
          mdi: ["*"]
        }
      }
    ), 
    react(), 
    sitemap(), 
  ],
  outDir: 'public',
  publicDir: 'static',
});

