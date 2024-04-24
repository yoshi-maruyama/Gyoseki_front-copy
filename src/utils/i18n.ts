import En from "@/constants/i18n/en";
import Ja from "@/constants/i18n/ja";

export function getTranslate(lang: string) {
  if (lang === "ja") {
    return Ja;
  } else {
    return En;
  }
}
