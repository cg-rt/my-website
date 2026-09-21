import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cosmin-ghinoiu.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
