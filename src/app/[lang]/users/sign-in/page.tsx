import SignInTemplate from "@/features/auth/components/sign-in-template";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignInPage({ params }: { params: { lang: string } }) {
  const session = await getServerSession();
  const { lang } = params;

  if (session?.user != null) {
    redirect("/");
  }

  return <SignInTemplate lang={lang} />;
}
