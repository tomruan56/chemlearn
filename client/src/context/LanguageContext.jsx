import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('chemlearn_lang') || 'en' } catch { return 'en' }
  })

  function toggle() {
    const next = lang === 'en' ? 'vi' : 'en'
    setLang(next)
    try { localStorage.setItem('chemlearn_lang', next) } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
