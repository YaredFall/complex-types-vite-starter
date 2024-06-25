import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueComplexTypes from "@vue.ts/complex-types/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueComplexTypes(),
  ],
})