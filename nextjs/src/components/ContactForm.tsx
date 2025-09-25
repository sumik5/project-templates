"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { sendMessage } from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-primary px-6 py-2 text-primary-foreground transition-colors hover:bg-primary/80 disabled:opacity-50"
    >
      {pending ? "送信中..." : "送信"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendMessage, {
    message: "",
    success: false,
  });

  return (
    <form action={formAction} className="flex flex-col gap-4 w-full max-w-md">
      <h3 className="text-lg font-semibold">React 19 Server Actions</h3>

      <input
        type="text"
        name="name"
        placeholder="お名前"
        required
        className="rounded-lg border border-input bg-background px-4 py-2"
      />

      <input
        type="email"
        name="email"
        placeholder="メールアドレス"
        required
        className="rounded-lg border border-input bg-background px-4 py-2"
      />

      <textarea
        name="message"
        placeholder="メッセージ"
        required
        rows={4}
        className="rounded-lg border border-input bg-background px-4 py-2"
      />

      <SubmitButton />

      {state.message && (
        <p
          className={`text-sm ${
            state.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}