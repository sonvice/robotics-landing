// src/i18n/utils.ts
import { defaultLang, languages, translations } from './ui';

// Definir los tipos más específicos de cada idioma
type Translations = typeof translations;
type Lang = keyof Translations;
type Section<T extends Lang> = keyof Translations[T];
type Key<T extends Lang, S extends Section<T>> = keyof Translations[T][S];

// Obtener el idioma de la URL
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return Object.keys(languages).includes(lang) ? (lang as Lang) : defaultLang;
}

// Traducir rutas basadas en el idioma
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang) {
    // Ocultar el idioma por defecto si es necesario
    const isDefaultLang = targetLang === defaultLang;
    const translatedPath = isDefaultLang ? path : `/${targetLang}${path}`;
    return translatedPath.endsWith('/') ? translatedPath : `${translatedPath}/`;
  };
}

// Obtener la ruta actual de la URL excluyendo el idioma
export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean); // Filtrar para remover partes vacías
  return parts.length > 1 ? parts.slice(1).join('/') : undefined;
}

// Función de traducción optimizada
export function useTranslations(lang: Lang) {
  return function t<S extends keyof Translations[Lang]>(
    section: S,
    key: string,
    defaultValue: string = ""
  ): string | undefined {
    // Utiliza claves anidadas con dot notation
    const keys = key.split('.');
    let result: any = translations[lang]?.[section];

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Fallback al idioma por defecto
        result = translations[defaultLang]?.[section];
        for (const fallbackKey of keys) {
          if (result && typeof result === 'object' && fallbackKey in result) {
            result = result[fallbackKey];
          } else {
            return undefined; // Si no encuentra el valor, regresa undefined
          }
        }
        break;
      }
    }

    return typeof result === 'string' ? result : defaultValue;
  };
}

