/// <reference types="vitest" />
import { devtools } from '@tanstack/devtools-vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const isTest = process.env.VITEST;

export default defineConfig(async () => {
  const { tanstackStart } = !isTest
    ? await import('@tanstack/react-start/plugin/vite')
    : { tanstackStart: undefined };
  const { nitro } = !isTest
    ? await import('nitro/vite')
    : { nitro: undefined };

  return {
    plugins: [
      devtools(),
      nitro && nitro(),
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tanstackStart && tanstackStart(),
      viteReact(),
    ],
    test: {
      environment: 'happy-dom',
      globals: true,
      setupFiles: './vitest.setup.ts',
    },
  };
});
