"use client";

import Button from "@/components/button/button";
import Divider from "@/components/divider/divider";
import InputText from "@/components/input-text/input-text";
import Select from "@/components/select/select";
import Title from "@/components/title/title";
import { signIn } from "next-auth/react";
import classes from "@/features/auth/components/sign-in-form.module.scss";

export default function SignInForm() {
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = "example@mail.com";
    const password = "password";
    await signIn("credentials", { redirect: false, email, password });
  };

  const langs = {
    en: "English",
    ja: "Japanese",
  };

  return (
    <div className={classes.item_form}>
      <div className={classes.signin_head}>
        <div className={classes.title_line}>
          <Title title="Sign In" size="primary" />
          <div className={classes.select_lang}>
            <Select options={langs} />
          </div>
        </div>
        <div>
          Need an account?<span className={classes.signup_link}>Sign up here</span>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.mb_sm}>
          <InputText label="Email" placeholder="example@example.com" />
        </div>
        <div className={classes.mb_md}>
          <InputText label="Password" placeholder="Enter password" />
        </div>
        <div className={classes.mb_md}>
          <Divider />
        </div>
        <div className={classes.submit}>
          <Button label="Sign In" />
        </div>
      </form>
    </div>
  );
}
