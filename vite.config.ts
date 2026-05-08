import { defineConfig } from 'vite';

// Set VITE_BASE_PATH=/repo-name/ when deploying to GitHub Pages under a project site.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
});
