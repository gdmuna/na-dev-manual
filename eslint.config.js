import { defineConfig } from 'eslint/config';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,vue}'] }, // Default options for all files
    { files: ['**/*.{js,mjs,cjs,vue}'], languageOptions: { globals: globals.browser } }, // Browser globals
    eslintPluginPrettierRecommended // Prettier configuration
]);
