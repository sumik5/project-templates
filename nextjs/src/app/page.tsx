import { Suspense } from "react";

import { ContactForm } from "@/components/ContactForm";
import { FeatureCard } from "@/components/FeatureCard";
import { InteractiveCounter } from "@/components/InteractiveCounter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            {/* Background gradient effects */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>

            {/* Hero content */}
            <div className="mx-auto max-w-4xl text-center">
              <div className="flex justify-center mb-6">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <span className="animate-pulse mr-2">✨</span>
                  Latest Technology Stack
                </Badge>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Next.js 15
                </span>
                <br />
                <span className="text-foreground">+</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  React 19
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                最新機能を活用したモダンなテンプレート。TypeScript、Tailwind CSS、shadcn/uiで構築された
                プロダクション対応のNext.jsアプリケーション。
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="px-8 py-3 text-base">
                  Get Started
                  <span className="ml-2 animate-bounce">→</span>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-base">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Bottom gradient effect */}
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-secondary to-primary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Modern Development Stack
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              最新のテクノロジーと開発者体験を重視した構成
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="group relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                    TS
                  </Badge>
                  <CardTitle className="text-xl">TypeScript</CardTitle>
                </div>
                <CardDescription className="text-base">
                  型安全な開発環境で、バグの少ないコードを書けます。エディターでの自動補完とリファクタリング支援。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800">
                    CSS
                  </Badge>
                  <CardTitle className="text-xl">Tailwind CSS v4</CardTitle>
                </div>
                <CardDescription className="text-base">
                  最新のTailwind CSSで高速かつ美しいスタイリング。ユーティリティファーストのアプローチ。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
                    ⚡
                  </Badge>
                  <CardTitle className="text-xl">Turbopack</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Next.js 15のTurbopackで超高速な開発体験。従来のWebpackより700倍高速。
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* React 19 Demo Section */}
      <section className="px-6 py-20 bg-muted/30 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              React 19 新機能デモ
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              最新のReact機能を実際に体験してみましょう
            </p>
            <Separator className="mt-8 max-w-xs mx-auto" />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">New</Badge>
                    Optimistic Updates
                  </CardTitle>
                </div>
                <CardDescription>
                  useOptimisticを使用したUX向上デモ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={
                  <div className="flex items-center justify-center p-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                  </div>
                }>
                  <InteractiveCounter initialCount={0} />
                </Suspense>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">New</Badge>
                    Server Actions
                  </CardTitle>
                </div>
                <CardDescription>
                  フォーム送信をServer Actionsで実装
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Advanced Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              パフォーマンスとDXを向上させる最新機能
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle>Server Components</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  デフォルトでServer Componentsを活用し、クライアントJSを削減。初期読み込み速度の向上。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <span className="text-2xl">🚀</span>
                </div>
                <CardTitle>Server Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  フォーム送信をServer Actionsで簡潔に実装。プログレッシブエンハンスメント対応。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <span className="text-2xl">✨</span>
                </div>
                <CardTitle>Optimistic UI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  useOptimisticで即座にUIを更新し、UXを向上。リアルタイムな操作感の実現。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-6 py-20 border-t lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              このテンプレートを使って、最新のNext.jsとReact 19の機能を活用した
              プロダクション対応のアプリケーションを構築しましょう。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <a href="/api/health" className="group">
                  API Health Check
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>System Online</span>
              </div>
            </div>

            <Separator className="mt-12 mb-8" />

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <Badge variant="outline">Next.js 15</Badge>
              <Badge variant="outline">React 19</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">shadcn/ui</Badge>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
