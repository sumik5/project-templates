"use client";

export default function Error({
  _error,
  reset,
}: {
  _error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold mb-4">エラーが発生しました</h2>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
      >
        再試行
      </button>
    </div>
  );
}
