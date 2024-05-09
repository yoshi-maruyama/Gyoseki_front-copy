"use client";

import StatusCode from "@/constants/status-code";
import { signIn } from "next-auth/react";
import { SignInFormSchema } from "@/features/auth/schemas";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AppToast } from "@/hooks/toasts";

export const submitHandler = async (
  data: SignInFormSchema,
  router: AppRouterInstance,
  toast: AppToast
) => {
  const email = data.email;
  const password = data.password;
  const result = await signIn("credentials", { redirect: false, email, password });

  if (!result?.error) {
    // TODO: callback urlへ遷移させる
    router.replace(`${process.env.NEXT_PUBLIC_BACKEND_URL}/menus`);
  }

  if (result?.status === StatusCode.unauthorized) {
    toast.error("Invalid email or password");
  }
};
