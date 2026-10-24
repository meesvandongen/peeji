import { defineConfig } from "vite-plus";

// Keeps the file names the package published with Parcel:
// dist/main.js (CJS), dist/module.js (ESM) and dist/types.d.ts.
export default defineConfig({
  pack: [
    {
      entry: { main: "src/peeji.ts" },
      format: "cjs",
      sourcemap: true,
      dts: false,
      outExtensions: () => ({ js: ".js" }),
    },
    {
      entry: { module: "src/peeji.ts" },
      format: "esm",
      sourcemap: true,
      dts: false,
      outExtensions: () => ({ js: ".js" }),
    },
    {
      entry: { types: "src/peeji.ts" },
      format: "esm",
      dts: { emitDtsOnly: true, sourcemap: true },
      outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
    },
  ],
  test: {
    globals: true,
  },
});
