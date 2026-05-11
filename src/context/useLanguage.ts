import { createContext, useContext } from 'react'

type Language = 'sr' | 'en'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}

export { LanguageContext, useLanguage }
export type { Language, LanguageContextValue }