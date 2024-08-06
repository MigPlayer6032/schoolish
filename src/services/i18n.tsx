import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${window.location.origin}/locales/{{lng}}.json`,
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],

      lookupQuerystring: "lng",
      lookupCookie: "?",
      lookupLocalStorage: "schoolish-language",
      lookupSessionStorage: "schoolish-language",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      caches: ["localStorage", "cookie"],
      excludeCacheFor: ["cimode"],
      cookieMinutes: 60 * 24 * 7,
      cookieDomain: window.location.hostname,

      htmlTag: document.documentElement,
      cookieOptions: { path: "/", sameSite: "strict" },
    },
  });

export default i18n;
export const languages = [
  { label: "English", code: "en" },
  { label: "Português (Brasil)", code: "ptbr" },
  { label: "Italiano", code: "it" },
  { label: "हिंदी", code: "hi" },
  { label: "Español", code: "es" },
  { label: "Français", code: "fr" },
  { label: "বাংলা", code: "bn" },
  { label: "Русский", code: "ru" },
].sort((a, b) => {
  return a.label.localeCompare(b.label, undefined, { sensitivity: 'base' });
});