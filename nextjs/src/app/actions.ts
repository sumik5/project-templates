"use server";

interface FormState {
  message: string;
  success: boolean;
}

export async function sendMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // バリデーション
  if (!name || !email || !message) {
    return {
      message: "すべての項目を入力してください",
      success: false,
    };
  }

  // メール送信をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 実際のアプリケーションでは、ここでメール送信APIを呼び出す
  console.log("Message received:", { name, email, message });

  return {
    message: "メッセージを送信しました！",
    success: true,
  };
}