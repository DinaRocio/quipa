import { useRouter } from "next/router";
import { en } from "./en";
import { es } from "./es";
import { SiteContent } from "./types";

export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

const dictionaries: Record<Locale, SiteContent> = { en, es };

export const getContent = (locale?: string): SiteContent =>
  dictionaries[(locale as Locale) in dictionaries ? (locale as Locale) : defaultLocale];

export const useContent = (): SiteContent => {
  const { locale } = useRouter();
  return getContent(locale);
};

export type { SiteContent } from "./types";
