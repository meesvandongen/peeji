import { defineConfig } from "vite-plus";

export default defineConfig({
  // Matches the existing code style; formatting is not enforced in CI.
  fmt: {
    printWidth: 80,
    trailingComma: "es5",
    sortPackageJson: false,
    ignorePatterns: ["**/dist/**", "**/build/**", "**/.docusaurus/**"],
  },
  lint: {
    ignorePatterns: ["**/dist/**", "**/build/**", "**/.docusaurus/**"],
    plugins: ["typescript", "oxc", "unicorn", "react"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    overrides: [{ files: ["**/*.spec.ts"], plugins: ["vitest"] }],
  },
  run: {
    cache: true,
  },
});
