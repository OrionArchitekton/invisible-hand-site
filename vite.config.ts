import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { bodyBake } from './vite-plugin-bodybake';

export default defineConfig({
  // Served under the brand path https://www.danmercede.com/works/invisible-hand/
  // (the hub Vercel-rewrites that path to this project's .vercel.app). `base` makes the
  // emitted asset refs and favicon resolve under that path so the proxied page is self-consistent.
  base: '/works/invisible-hand/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), bodyBake()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
