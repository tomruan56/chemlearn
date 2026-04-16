import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { T } from '../i18n/translations'

export default function Navbar() {
  const { user, logout } = useAuth()
  const { lang, toggle } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const t = k => T[lang]?.[k] ?? T.en[k] ?? k

  const navLinks = [
    { to: '/',                label: t('nav_home'),       icon: '🏠' },
    { to: '/periodic-table', label: t('nav_periodic'),   icon: '⚛️' },
    { to: '/lessons',         label: t('nav_lessons'),    icon: '📚' },
    { to: '/quiz',            label: t('nav_quiz'),       icon: '✏️' },
    { to: '/balancer',        label: t('nav_balancer'),   icon: '⚖️' },
    { to: '/reactions',       label: t('nav_reactions'),  icon: '🔬' },
    { to: '/reaction-graph', label: t('nav_graph'),      icon: '🔗' },
  ]

  function handleLogout() {
    logout()
    navigate('/')
    setOpen(false)
  }

  function handleNav() {
    setOpen(false)
  }

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
          <Link to="/" className="font-bold text-base sm:text-lg text-blue-400 flex items-center gap-1.5" onClick={handleNav}>
            <span>⚗️</span> ChemLearn
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {link.icon} {link.label}
              </Link>
            ))}
            {/* Language toggle — desktop */}
            <button
              onClick={toggle}
              className="ml-2 px-3 py-1.5 rounded-lg text-sm font-bold border border-gray-700 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-gray-800 transition-colors"
              title="Switch language"
            >
              {lang === 'en' ? '🇻🇳 VI' : '🇬🇧 EN'}
            </button>
          </div>

          {/* Mobile right side: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="text-xs font-bold px-2 py-1 rounded border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              title="Switch language"
            >
              {lang === 'en' ? '🇻🇳' : '🇬🇧'}
            </button>
            <button
              className="flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-gray-800 transition-colors gap-1.5"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-300 transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-300 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-300 transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 z-50 bg-gray-900 border-l border-gray-800 shadow-2xl
        transition-transform duration-250 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-4 h-12 border-b border-gray-800">
          <span className="font-bold text-blue-400">⚗️ ChemLearn</span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white text-2xl leading-none"
            aria-label="Close menu"
          >×</button>
        </div>
        <div className="overflow-y-auto py-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleNav}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-500'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <span className="text-base">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
