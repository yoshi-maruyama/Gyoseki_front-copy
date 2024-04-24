"use client";

import Button from "@/components/button/button";
import Divider from "@/components/divider/divider";
import InputText from "@/components/input-text/input-text";
import Select from "@/components/select/select";
import Title from "@/components/title/title";
import { useForm } from "react-hook-form";
import classes from "@/features/auth/components/sign-in-form.module.scss";
import { SignInFormSchema, signInFormSchema } from "@/features/auth/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { submitHandler } from "@/features/auth/functions";
import LangOptions from "@/constants/i18n/options";
import useToast from "@/hooks/toasts";
import { getTranslate } from "@/utils/i18n";
import { LangProps } from "@/types/i18n";

export default function SignInForm(props: LangProps) {
  const { lang } = props;
  const router = useRouter();
  const toast = useToast();
  const t = getTranslate(lang);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(signInFormSchema),
  });

  return (
    <div className={classes.item_form}>
      <div className={classes.signin_head}>
        <div className={classes.title_line}>
          <Title title={t.AUTH.SIGN_IN} size="primary" />
          <div className={classes.select_lang}>
            <Select options={LangOptions} />
          </div>
        </div>
        <div>
          Need an account?<span className={classes.signup_link}>Sign up here</span>
        </div>
      </div>
      <form onSubmit={handleSubmit((data) => submitHandler(data, router, toast))}>
        <div className={classes.mb_sm}>
          <InputText
            label="Email"
            placeholder="example@example.com"
            path="email"
            register={register}
            error={errors.email}
          />
        </div>
        <div className={classes.mb_md}>
          <InputText
            label="Password"
            placeholder="Enter password"
            path="password"
            register={register}
            error={errors.password}
          />
        </div>
        <div className={classes.mb_md}>
          <Divider />
        </div>
        <div className={classes.submit}>
          <Button label="Sign In" disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
}
