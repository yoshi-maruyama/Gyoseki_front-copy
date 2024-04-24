import SignInForm from "@/features/auth/components/sign-in-form";

const meta = {
  title: "Features/SignInForm",
  component: SignInForm,
  tags: ["autodocs"],
  args: { lang: "en" },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

export const BaseSignInForm = {};
