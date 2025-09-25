import { Suspense } from "react";

import { ContactForm } from "@/components/ContactForm";
import { FeatureCard } from "@/components/FeatureCard";
import { InteractiveCounter } from "@/components/InteractiveCounter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <div className="before:bg-gradient-radial after:bg-gradient-conic relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
        <h1 className="text-center text-4xl md:text-6xl font-bold">
          Next.js 15 + React 19
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          最新機能を活用したモダンなテンプレート
        </p>
      </div>

      {/* 既存機能の紹介 */}
      <div className="mt-16 mb-16 grid gap-8 text-center lg:grid-cols-3 lg:text-left">
        <FeatureCard
          title="TypeScript"
          description="型安全な開発環境で、バグの少ないコードを書けます。"
        />
        <FeatureCard
          title="Tailwind CSS v4"
          description="最新のTailwind CSSで高速かつ美しいスタイリング。"
        />
        <FeatureCard
          title="Turbopack"
          description="Next.js 15のTurbopackで超高速な開発体験。"
        />
      </div>

      {/* React 19の新機能デモ */}
      <div className="w-full max-w-6xl space-y-16">
        <section className="flex flex-col items-center gap-8">
          <h2 className="text-2xl font-bold">React 19 新機能デモ</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Optimistic Updates デモ */}
            <Suspense fallback={<div>Loading...</div>}>
              <InteractiveCounter initialCount={0} />
            </Suspense>

            {/* Server Actions デモ */}
            <ContactForm />
          </div>
        </section>

        {/* 追加機能の紹介 */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Server Components"
            description="デフォルトでServer Componentsを活用し、クライアントJSを削減。"
          />
          <FeatureCard
            title="Server Actions"
            description="フォーム送信をServer Actionsで簡潔に実装。"
          />
          <FeatureCard
            title="Optimistic UI"
            description="useOptimisticで即座にUIを更新し、UXを向上。"
          />
        </section>
      </div>

      {/* APIヘルスチェック */}
      <div className="mt-16">
        <a
          href="/api/health"
          className="group inline-block rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <p className="m-0 text-sm">APIヘルスチェック →</p>
        </a>
      </div>
    </main>
  );
}
