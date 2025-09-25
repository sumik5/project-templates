# Next.js Project Makefile
# よく使うコマンドのショートカット集

.DEFAULT_GOAL := help
.PHONY: help install dev build start test lint clean docker-build docker-run docker-compose-up docker-compose-down setup

# Colors for output
GREEN := \033[0;32m
YELLOW := \033[1;33m
RED := \033[0;31m
NC := \033[0m # No Color

## Help
help: ## このヘルプメッセージを表示
	@echo "$(GREEN)利用可能なコマンド:$(NC)"
	@awk 'BEGIN {FS = ":.*##"; printf "\n"} /^[a-zA-Z_-]+:.*##/ { printf "  $(YELLOW)%-20s$(NC) %s\n", $$1, $$2 } /^##@/ { printf "\n$(GREEN)%s$(NC)\n", substr($$0, 5) }' $(MAKEFILE_LIST)

##@ 開発環境
install: ## 依存関係をインストール
	@echo "$(GREEN)依存関係をインストール中...$(NC)"
	npm ci

setup: install ## 初回開発環境セットアップ
	@echo "$(GREEN)開発環境をセットアップ中...$(NC)"
	./scripts/dev-setup.sh
	npm run env:check
	@echo "$(GREEN)セットアップ完了！$(NC)"

dev: ## 開発サーバーを起動（Turbopack使用）
	@echo "$(GREEN)開発サーバーを起動中...$(NC)"
	npm run dev

dev-debug: ## デバッグモードで開発サーバーを起動
	@echo "$(GREEN)デバッグモードで開発サーバーを起動中...$(NC)"
	NODE_OPTIONS='--inspect' npm run dev

##@ ビルド・デプロイ
build: ## 本番用ビルド
	@echo "$(GREEN)本番用ビルドを実行中...$(NC)"
	npm run build

start: build ## 本番サーバーを起動
	@echo "$(GREEN)本番サーバーを起動中...$(NC)"
	npm run start

preview: build start ## ビルド後にプレビュー

##@ テスト・品質チェック
test: ## テストを実行
	@echo "$(GREEN)テストを実行中...$(NC)"
	npm run test

test-ui: ## テストUIを起動
	@echo "$(GREEN)テストUIを起動中...$(NC)"
	npm run test:ui

test-watch: ## テストをウォッチモードで実行
	@echo "$(GREEN)テストをウォッチモードで実行中...$(NC)"
	npm run test -- --watch

coverage: ## テストカバレッジを取得
	@echo "$(GREEN)テストカバレッジを取得中...$(NC)"
	npm run coverage

lint: ## リントを実行
	@echo "$(GREEN)リントを実行中...$(NC)"
	npm run lint

lint-fix: ## リントの自動修正
	@echo "$(GREEN)リントの自動修正を実行中...$(NC)"
	npm run lint -- --fix

format: lint-fix ## コードフォーマット（lint-fixのエイリアス）

typecheck: ## TypeScriptの型チェック
	@echo "$(GREEN)TypeScript型チェックを実行中...$(NC)"
	npx tsc --noEmit

quality: lint typecheck test ## 全品質チェック（lint + 型チェック + テスト）

##@ Storybook
storybook: ## Storybookを起動
	@echo "$(GREEN)Storybookを起動中...$(NC)"
	npm run storybook

storybook-build: ## Storybookをビルド
	@echo "$(GREEN)Storybookをビルド中...$(NC)"
	npm run build-storybook

##@ Docker操作
docker-build: ## Dockerイメージをビルド
	@echo "$(GREEN)Dockerイメージをビルド中...$(NC)"
	docker build -t nextjs-app .

docker-run: ## Dockerコンテナを起動
	@echo "$(GREEN)Dockerコンテナを起動中...$(NC)"
	docker run -p 3000:3000 --env-file .env.local nextjs-app

docker-dev: ## 開発用Dockerコンテナを起動
	@echo "$(GREEN)開発用Dockerコンテナを起動中...$(NC)"
	docker run -p 3000:3000 -v $(PWD):/app -v /app/node_modules --env-file .env.development nextjs-app npm run dev

docker-compose-up: ## Docker Composeでサービス起動
	@echo "$(GREEN)Docker Composeでサービスを起動中...$(NC)"
	docker compose up -d

docker-compose-down: ## Docker Composeでサービス停止
	@echo "$(GREEN)Docker Composeでサービスを停止中...$(NC)"
	docker compose down

docker-compose-logs: ## Docker Composeのログを表示
	docker compose logs -f

##@ データベース・初期化
db-seed: ## データベースに初期データを投入
	@echo "$(GREEN)データベースに初期データを投入中...$(NC)"
	node scripts/db-seed.js

db-reset: ## データベースをリセット
	@echo "$(YELLOW)データベースをリセットします...$(NC)"
	@read -p "本当に実行しますか？ (y/N): " confirm && [ "$$confirm" = "y" ]
	node scripts/db-reset.js

##@ パフォーマンス・解析
analyze: ## バンドルサイズを解析
	@echo "$(GREEN)バンドルサイズを解析中...$(NC)"
	ANALYZE=true npm run build

lighthouse: ## Lighthouse監査を実行
	@echo "$(GREEN)Lighthouse監査を実行中...$(NC)"
	npx lighthouse http://localhost:3000 --output html --output-path ./reports/lighthouse-report.html

perf: analyze lighthouse ## パフォーマンス解析を実行

##@ クリーンアップ
clean: ## 生成ファイルをクリーンアップ
	@echo "$(GREEN)クリーンアップを実行中...$(NC)"
	./scripts/clean.sh

clean-deps: clean ## 依存関係も含めてクリーンアップ
	@echo "$(YELLOW)依存関係も含めてクリーンアップ中...$(NC)"
	rm -rf node_modules package-lock.json

fresh: clean-deps install ## 完全リセット後に再インストール
	@echo "$(GREEN)完全リセット完了！$(NC)"

##@ CI/CD
ci: quality build ## CI用コマンド（品質チェック + ビルド）

pre-commit: lint-fix typecheck test ## pre-commit hook用コマンド

##@ 環境確認
env-check: ## 環境設定を確認
	@echo "$(GREEN)環境設定を確認中...$(NC)"
	npm run env:check

info: ## プロジェクト情報を表示
	@echo "$(GREEN)プロジェクト情報:$(NC)"
	@echo "Node.js: $$(node --version)"
	@echo "npm: $$(npm --version)"
	@echo "Next.js: $$(npm list next --depth=0 2>/dev/null | grep next || echo 'Next.js not found')"
	@echo "プロジェクト: $$(grep '"name"' package.json | cut -d'"' -f4)"
	@echo "バージョン: $$(grep '"version"' package.json | cut -d'"' -f4)"
