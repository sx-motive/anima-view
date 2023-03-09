import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, 'build'),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html'),
      },
    },
  },
});
