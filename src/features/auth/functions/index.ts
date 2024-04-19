"use client";

import StatusCode from "@/constants/status-code";
import useToast from "@/hooks/toasts";
import { signIn } from "next-auth/react";
import { SignInFormSchema } from "@/features/auth/schemas";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const submitHandler = async (data: SignInFormSchema, router: AppRouterInstance) => {
  const toaster = useToast();

  const email = data.email;
  const password = data.password;
  const result = await signIn("credentials", { redirect: false, email, password });

  if (!result?.error) {
    router.replace("/");
  }

  if (result?.status === StatusCode.unauthorized) {
    toaster.error("Invalid email or password");
  }
};
