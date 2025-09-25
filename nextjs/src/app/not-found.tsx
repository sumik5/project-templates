import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-lg mb-8">ページが見つかりませんでした</p>
      <Link href="/" className="rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
        ホームに戻る
      </Link>
    </div>
  );
}
