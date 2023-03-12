import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: normalizePath(resolve(__dirname, 'npm')),
    assetsDir: './',
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: {
        index: resolve(__dirname, 'src/animaview/index.ts'),
      },
      output: {
        format: 'es',
        entryFileNames: 'animaview.min.js',
        // assetFileNames: 'index.css',
      },
    },
  },

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(resolve(__dirname, './README.md')),
          dest: normalizePath(resolve(__dirname, 'npm')),
        },

        {
          src: normalizePath(resolve(__dirname, './package.npm.json')),
          dest: normalizePath(resolve(__dirname, 'npm')),
          rename: 'package.json',
        },
        // {
        //   src: normalizePath(resolve(__dirname, './src/animaview/index.ts')),
        //   dest: normalizePath(resolve(__dirname, 'npm')),
        // },
      ],
    }),
  ],
});
