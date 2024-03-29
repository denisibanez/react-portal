// @ts-nocheck
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import { fileURLToPath, URL } from 'url';
import path, { resolve, dirname } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        ['process.env.' + key]: `"${val}"`,
      };
    },
    {}
  );
  return {
    define: envWithProcessPrefix,
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
