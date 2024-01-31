import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginTailwind from 'vite-plugin-tailwind';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginTailwind()],
});

