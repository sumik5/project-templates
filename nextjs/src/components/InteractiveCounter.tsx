"use client";

import { startTransition, useOptimistic, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InteractiveCounterProps {
  initialCount?: number;
}

export function InteractiveCounter({ initialCount = 0 }: InteractiveCounterProps) {
  const [count, setCount] = useState(initialCount);
  const [optimisticCount, addOptimisticCount] = useOptimistic(
    count,
    (state, amount: number) => state + amount,
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
    <div className="w-full max-w-md mx-auto">
      {/* Counter Display */}
      <Card className="relative overflow-hidden">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
            >
              React 19
            </Badge>
          </div>
          <CardTitle className="text-lg">Optimistic Updates</CardTitle>
          <CardDescription>リアルタイムUI更新のデモ</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Count Display */}
          <div className="relative">
            <div className="flex items-center justify-center">
              <div
                className={cn(
                  "relative flex items-center justify-center w-20 h-20 rounded-full",
                  "bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20",
                  "transition-all duration-300",
                  optimisticCount !== count && "scale-110 border-primary/40",
                )}
              >
                <span
                  className={cn(
                    "text-3xl font-bold tabular-nums transition-all duration-300",
                    optimisticCount !== count && "text-primary",
                  )}
                >
                  {optimisticCount}
                </span>

                {optimisticCount !== count && (
                  <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" />
                )}
              </div>
            </div>

            {optimisticCount !== count && (
              <div className="flex items-center justify-center mt-3">
                <Badge variant="outline" className="text-xs animate-pulse bg-primary/5">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                  更新中...
                </Badge>
              </div>
            )}
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handleDecrement}
              className={cn(
                "w-12 h-12 rounded-full text-xl font-bold",
                "hover:scale-110 active:scale-95 transition-all duration-200",
                "hover:bg-destructive/10 hover:border-destructive/30 hover:text-destructive",
              )}
              aria-label="Decrement counter"
            >
              −
            </Button>
            <div className="w-8" /> {/* Spacer */}
            <Button
              size="lg"
              onClick={handleIncrement}
              className={cn(
                "w-12 h-12 rounded-full text-xl font-bold",
                "hover:scale-110 active:scale-95 transition-all duration-200",
                "bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90",
              )}
              aria-label="Increment counter"
            >
              +
            </Button>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                optimisticCount !== count ? "bg-yellow-500 animate-pulse" : "bg-green-500",
              )}
            />
            <span>{optimisticCount !== count ? "同期中" : "同期済み"}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
