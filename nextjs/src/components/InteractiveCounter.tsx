"use client";

import { useState, useOptimistic, startTransition } from "react";

interface InteractiveCounterProps {
  initialCount?: number;
}

export function InteractiveCounter({ initialCount = 0 }: InteractiveCounterProps) {
  const [count, setCount] = useState(initialCount);
  const [optimisticCount, addOptimisticCount] = useOptimistic(
    count,
    (state, amount: number) => state + amount
  );

  const handleIncrement = () => {
    startTransition(() => {
      addOptimisticCount(1);
      // 実際のAPIコールをシミュレート
      setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 500);
    });
  };

  const handleDecrement = () => {
    startTransition(() => {
      addOptimisticCount(-1);
      // 実際のAPIコールをシミュレート
      setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 500);
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700">
      <h3 className="text-lg font-semibold">React 19 Optimistic Updates</h3>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={handleDecrement}
          className="rounded-lg bg-secondary px-4 py-2 text-secondary-foreground transition-colors hover:bg-secondary/80"
          aria-label="Decrement"
        >
          -
        </button>
        <span className="min-w-[3ch] text-center text-2xl font-bold tabular-nums">
          {optimisticCount}
        </span>
        <button
          type="button"
          onClick={handleIncrement}
          className="rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/80"
          aria-label="Increment"
        >
          +
        </button>
      </div>
      {optimisticCount !== count && (
        <span className="text-sm text-muted-foreground animate-pulse">
          更新中...
        </span>
      )}
    </div>
  );
}