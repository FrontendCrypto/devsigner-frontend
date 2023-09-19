// import { defineConfig, loadEnv } from 'vite'
// import vue from '@vitejs/plugin-vue'
// process.env = {...process.env, ...loadEnv(mode, process.cwd())};
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
// })

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
