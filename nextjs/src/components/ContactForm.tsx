"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { sendMessage } from "@/app/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className={cn("w-full transition-all duration-300", pending && "cursor-not-allowed")}
    >
      {pending ? (
        <>
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
          送信中...
        </>
      ) : (
        <>
          送信
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction, _isPending] = useActionState(sendMessage, {
    message: "",
    success: false,
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="relative overflow-hidden">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
            >
              Server Actions
            </Badge>
          </div>
          <CardTitle className="text-lg">Contact Form</CardTitle>
          <CardDescription>React 19 Server Actionsで実装</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form action={formAction} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                お名前
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="あなたのお名前を入力してください"
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                メールアドレス
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                メッセージ
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="こちらにメッセージを入力してください..."
                required
                rows={4}
                className="resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <Separator className="my-4" />

            {/* Submit Button */}
            <div className="group">
              <SubmitButton />
            </div>
          </form>

          {/* Status Message */}
          {state.message && (
            <div
              className={cn(
                "p-4 rounded-lg border transition-all duration-300 animate-in slide-in-from-top-2",
                state.success
                  ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
                  : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
              )}
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-2 h-2 rounded-full",
                    state.success ? "bg-green-500" : "bg-red-500",
                  )}
                />
                <p className="text-sm font-medium">{state.message}</p>
              </div>
            </div>
          )}

          {/* Form Info */}
          <div className="text-center text-xs text-muted-foreground">
            <p>🔒 Server Actionsで安全に送信されます</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
