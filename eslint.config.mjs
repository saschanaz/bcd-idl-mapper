import globals from "globals";
import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
      },

      parser: babelParser,
      ecmaVersion: 2024,
      sourceType: "module",
    },
  },
];
