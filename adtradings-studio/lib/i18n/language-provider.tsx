'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { dictionaries, locales, type Locale } from '@/lib/i18n/dictionaries'

const STORAGE_KEY = 'adtradings-locale'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof dictionaries)['en']
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored && locales.includes(stored as Locale)) {
        setLocaleState(stored as Locale)
      }
    } catch {
      // Storage can be unavailable in restricted preview contexts.
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Keep locale switching functional when storage is unavailable.
    }
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLocale must be used within a LanguageProvider')
  }
  return ctx
}
