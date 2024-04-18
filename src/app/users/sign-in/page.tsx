import SignInTemplate from "@/features/auth/components/sign-in-template";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession();

  if (session != null) {
    redirect("/");
  }

  return <SignInTemplate />;
}
