import globals from "globals";
import pluginJs from "@eslint/js";
import path from "path";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import stylisticJs from '@stylistic/eslint-plugin-js'

//npm i eslint-config-airbnb
// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...compat.extends("airbnb-base"),
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  {
  plugins: {
    '@stylistic/js': stylisticJs
  },
  rules: {
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/indent': ['error', 2],
      "import/extensions": ['off'],
      "no-console": ['off'],
      "comma-dangle": ["error", "never"],
      "eol-last": ["error", "always"],
      "no-trailing-spaces": ["error"]
    }
  }
];