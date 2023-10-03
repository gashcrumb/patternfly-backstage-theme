import { resolve } from "path";
import { defineConfig } from "vite";

import { name } from "./package.json";

import dts from "vite-plugin-dts";
import checker from "vite-plugin-checker";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: name,
      fileName: name,
    },
    rollupOptions: {
      external: [
        "@backstage/theme",
        "@mui/styles",
        "@mui/material",
        "@mui/material/styles",
        "@mui/lab/Alert",
        "react",
        "react-dom",
        "react-is",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-is": "ReactIs",
        },
      },
    },
  },
  plugins: [checker({ typescript: true }), dts()],
});
