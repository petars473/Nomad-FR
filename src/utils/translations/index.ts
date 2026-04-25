import { useMemo } from 'react'
import srTranslations from './sr.json'
import enTranslations from './en.json'

type Language = 'sr' | 'en'
type Translations = typeof srTranslations

const translationsMap: Record<Language, Translations> = {
  sr: srTranslations,
  en: enTranslations,
}

export function useTranslations(language: Language): Translations {
  return useMemo(() => {
    return translationsMap[language] || translationsMap.sr
  }, [language])
}
