import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { T } from '../i18n/translations'

const lessonDefs = [
  { icon: '⚛️', titleKey: 'topic_atomic_title',    summaryKey: 'topic_atomic_summary',    tagsKey: 'topic_atomic_tags',    to: '/lessons/atomic-structure',   color: 'from-blue-900 to-blue-800',    border: 'border-blue-700' },
  { icon: '🔗', titleKey: 'topic_bonding_title',   summaryKey: 'topic_bonding_summary',   tagsKey: 'topic_bonding_tags',   to: '/lessons/chemical-bonding',   color: 'from-purple-900 to-purple-800', border: 'border-purple-700' },
  { icon: '⚗️', titleKey: 'topic_reactions_title', summaryKey: 'topic_reactions_summary', tagsKey: 'topic_reactions_tags', to: '/lessons/chemical-reactions', color: 'from-red-900 to-red-800',    border: 'border-red-700' },
  { icon: '⚖️', titleKey: 'topic_stoich_title',    summaryKey: 'topic_stoich_summary',    tagsKey: 'topic_stoich_tags',    to: '/lessons/stoichiometry',      color: 'from-green-900 to-green-800',  border: 'border-green-700' },
  { icon: '🧪', titleKey: 'topic_acids_title',     summaryKey: 'topic_acids_summary',     tagsKey: 'topic_acids_tags',     to: '/lessons/acids-and-bases',    color: 'from-yellow-900 to-yellow-800', border: 'border-yellow-700' },
  { icon: '🔥', titleKey: 'topic_thermo_title',    summaryKey: 'topic_thermo_summary',    tagsKey: 'topic_thermo_tags',    to: '/lessons/thermochemistry',    color: 'from-orange-900 to-orange-800', border: 'border-orange-700' },
  { icon: '💨', titleKey: 'topic_gases_title',     summaryKey: 'topic_gases_summary',     tagsKey: 'topic_gases_tags',     to: '/lessons/gases',              color: 'from-cyan-900 to-cyan-800',    border: 'border-cyan-700' },
  { icon: '🧬', titleKey: 'topic_organic_title',   summaryKey: 'topic_organic_summary',   tagsKey: 'topic_organic_tags',   to: '/lessons/organic-chemistry',  color: 'from-pink-900 to-pink-800',    border: 'border-pink-700' },
  { icon: '☢️', titleKey: 'topic_nuclear_title',   summaryKey: 'topic_nuclear_summary',   tagsKey: 'topic_nuclear_tags',   to: '/lessons/nuclear-chemistry',  color: 'from-violet-900 to-violet-800', border: 'border-violet-700' },
]

export default function Lessons() {
  const { lang } = useLanguage()
  const t = k => T[lang]?.[k] ?? T.en[k] ?? k

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{t('lessons_title')}</h1>
      <p className="text-gray-400 mb-8">{t('lessons_sub')}</p>

      <div className="space-y-5">
        {lessonDefs.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`block bg-gradient-to-r ${l.color} border ${l.border} rounded-xl p-6 hover:scale-[1.01] transition-transform duration-200 group`}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl sm:text-4xl">{l.icon}</span>
              <div className="flex-1 min-w-0">
                <h2 className="text-base sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors mb-1">
                  {t(l.titleKey)}
                </h2>
                <p className="text-gray-300 text-sm mb-3">{t(l.summaryKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {(t(l.tagsKey) || []).map((tag, i) => (
                    <span key={i} className="bg-black/30 rounded-full px-3 py-0.5 text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-gray-400 text-base sm:text-xl self-center flex-shrink-0">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
