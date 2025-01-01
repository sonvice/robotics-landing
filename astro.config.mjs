// @ts-check
import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
      defaultLocale: "en",
      locales: ["es", "en"],
    },
    vite: {
      css: {
        devSourcemap: true, // Habilita sourcemaps en modo de desarrollo para CSS
      },
    },
  integrations: [icon()]
});