import path, {resolve} from 'path';

import react from '@vitejs/plugin-react-swc';
import {defineConfig, loadEnv} from 'vite';

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    base: process.env.PUBLIC_URL || '/',
    plugins: [react()],
    build: {
      outDir: 'build',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          manualChunks: {react: ['react'], antd: ['antd']},
        },
      },
    },
    resolve: {
      alias: {'@': path.resolve(__dirname, 'src')},
    },
  });
};
