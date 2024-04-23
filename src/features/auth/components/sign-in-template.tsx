import Hero from "@/components/hero/hero";
import SignInForm from "@/features/auth/components/sign-in-form";
import classes from "@/features/auth/components/sign-in-template.module.scss";

export default function SignInTemplate() {
  return (
    <div className={classes.container}>
      <Hero />
      <SignInForm />
    </div>
  );
}
