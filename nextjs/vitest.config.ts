import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  test: {
    // 環境設定
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/__tests__/setup.ts"],

    // インクルード/エクスクルード
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", ".next", "dist", "coverage"],

    // カバレッジ設定
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      reportsDirectory: "./coverage",
      exclude: [
        "node_modules/**",
        ".next/**",
        "**/*.d.ts",
        "**/*.config.*",
        "**/mockServiceWorker.js",
        "src/__tests__/**",
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },

    // パフォーマンス設定
    pool: "threads",
    poolOptions: {
      threads: {
        singleThread: false,
      },
    },

    // レポート設定
    reporters: ["default", "html"],
    outputFile: {
      html: "./reports/test-results.html",
    },

    // タイムアウト設定
    testTimeout: 10000,
    hookTimeout: 10000,

    // モック設定
    mockReset: true,
    clearMocks: true,
    restoreMocks: true,

    // CSS処理
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
  },

  // 解決設定
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  // ビルド最適化
  optimizeDeps: {
    include: ["react", "react-dom"],
  },

});