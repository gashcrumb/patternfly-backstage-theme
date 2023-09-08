import { resolve } from "path";
import { defineConfig } from "vite";

import { name } from './package.json';

import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: name,
      fileName: name,
    },
  },
  plugins: [dts()],
});
