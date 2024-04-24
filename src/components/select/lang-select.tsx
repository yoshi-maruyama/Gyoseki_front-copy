"use client";

import Select from "@/components/select/select";
import LangOptions from "@/constants/i18n/options";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function LangSelect() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const handleLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    const newpath = pathname.replace(/^\/(ja|en)/, `/${lang}`);
    router.push(`${newpath}?${searchParams}`);
  };

  return (
    <Select options={LangOptions} onChange={handleLang} defaultValue={params.lang.toString()} />
  );
}
