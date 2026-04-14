import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { to: '/',                label: 'Home',             icon: '🏠' },
  { to: '/periodic-table', label: 'Periodic Table',   icon: '⚛️' },
  { to: '/lessons',         label: 'Lessons',          icon: '📚' },
  { to: '/quiz',            label: 'Quiz',             icon: '✏️' },
  { to: '/balancer',        label: 'Equation Balancer',icon: '⚖️' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <Link to="/" className="font-bold text-lg text-blue-400 flex items-center gap-2">
          <span>⚗️</span> ChemLearn
        </Link>

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
        </div>

        {/* Auth buttons hidden temporarily */}
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex overflow-x-auto gap-1 px-2 pb-2">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`whitespace-nowrap px-3 py-1 rounded-lg text-xs font-medium transition-colors flex-shrink-0 ${
              location.pathname === link.to
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {link.icon} {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
