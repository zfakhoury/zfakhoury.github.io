import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !routing.locales.includes(locale as "en" | "fr")) {
    return {
      locale: routing.defaultLocale,
      messages: (await import("./messages/en.json")).default,
    };
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
