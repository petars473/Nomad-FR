import { useMemo, useState, type ReactNode } from 'react'

import { LanguageContext, type Language } from './useLanguage.ts'

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('sr')

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
