import Hero from "@/components/hero/hero";
import SignInForm from "@/features/auth/components/sign-in-form";
import classes from "@/features/auth/components/sign-in-template.module.scss";
import { LangProps } from "@/types/i18n";

export default function SignInTemplate(props: LangProps) {
  const { lang } = props;
  return (
    <div className={classes.container}>
      <Hero />
      <SignInForm lang={lang} />
    </div>
  );
}
