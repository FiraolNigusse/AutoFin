import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JavaScript
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      ecmaVersion: "latest"
    },
    rules: {
      "no-console": "warn"
    }
  },

  // JSON
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"]
  },

  // Markdown
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    processor: markdown.processor
  }
]);