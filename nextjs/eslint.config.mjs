/* eslint-disable import-x/no-named-as-default-member */

import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import react from "@eslint-react/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import eslintPluginImportX from "eslint-plugin-import-x";
import reactCompiler from "eslint-plugin-react-compiler";
import regexPlugin from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
// import tailwind from "eslint-plugin-tailwindcss"; // Temporarily disabled - compatibility issues with Tailwind v4
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const config = tseslint.config(
  {
    name: "ignore-files",
    ignores: [
      ".next/**",
      "node_modules/**",
      "next.config.ts",
      "postcss.config.cjs",
      "tailwind.config.ts",
      "eslint.config.mjs",
      "vitest.config.ts",
      "next-env.d.ts",
      "public/mockServiceWorker.js",
      "coverage/**",
      "reports/**",
      "dist/**",
      ".turbo/**",
    ],
  },

  // Base JavaScript and TypeScript configurations
  {
    name: "base-js-ts",
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
      },
    },
  },

  // Import/Export management
  {
    name: "import-rules",
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
    plugins: {
      "import-x": eslintPluginImportX,
    },
    rules: {
      ...eslintPluginImportX.flatConfigs.recommended.rules,
      ...eslintPluginImportX.flatConfigs.typescript.rules,
      "import-x/no-unresolved": [
        "error",
        {
          ignore: ["geist", "@/components/*", "@/app/*", "@/*"],
        },
      ],
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },

  // Comments and documentation
  {
    name: "comments",
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
    ...comments.recommended,
  },

  // Regex best practices
  {
    name: "regexp",
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
    ...regexPlugin.configs["flat/recommended"],
  },

  // Security best practices
  {
    name: "security",
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}"],
    ...security.configs.recommended,
  },

  // React and Next.js specific rules
  {
    name: "react-nextjs",
    files: ["**/*.{jsx,tsx}"],
    extends: [
      ...compat.extends("plugin:@next/next/recommended"),
      ...compat.extends("plugin:react-hooks/recommended"),
      react.configs["recommended-type-checked"],
    ],
    plugins: {
      "react-compiler": reactCompiler,
    },
    rules: {
      "react-compiler/react-compiler": "error",
    },
  },

  // TypeScript specific overrides
  {
    name: "typescript-overrides",
    files: ["**/*.{ts,tsx,mts,cts}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
          disallowTypeAnnotations: true,
        },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/no-unnecessary-condition": [
        "error",
        {
          allowConstantLoopConditions: true,
        },
      ],
      "@typescript-eslint/consistent-type-exports": [
        "error",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "off", // Temporarily disabled - too noisy for React components
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
      ],
    },
  },

  // Test files configuration
  {
    name: "test-files",
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}", "**/__tests__/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },

  // CommonJS files
  {
    name: "commonjs",
    files: ["**/*.cjs", "**/*.cts"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },

  // Configuration files
  {
    name: "config-files",
    files: ["*.config.{js,ts,mjs,mts}", "*.setup.{js,ts,mjs,mts}"],
    rules: {
      "import-x/no-default-export": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/naming-convention": "off",
    },
  },

  // Tailwind CSS - temporarily disabled due to v4 compatibility issues
  // Will be re-enabled when eslint-plugin-tailwindcss supports v4
  // {
  //   name: "tailwind",
  //   files: ["**/*.{jsx,tsx}"],
  //   ...tailwind.configs["flat/recommended"],
  //   settings: {
  //     tailwindcss: {
  //       callees: ["classnames", "clsx", "ctl", "cn", "cva"],
  //       config: "tailwind.config.ts",
  //     },
  //   },
  // },

  // Prettier must be last
  {
    name: "prettier",
    ...prettierConfig,
  },
);

export default config;
