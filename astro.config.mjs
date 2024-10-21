import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import react from '@astrojs/react';
import { shield } from '@kindspells/astro-shield';
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";  
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://ekumenlabs.com',
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
    shield({}), 
    sitemap(), 
    compressor()
  ],
  outDir: 'public',
  publicDir: 'static',
});

