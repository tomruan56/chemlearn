import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PeriodicTable from './pages/PeriodicTable'
import Lessons from './pages/Lessons'
import AtomicStructure from './pages/lessons/AtomicStructure'
import ChemicalBonding from './pages/lessons/ChemicalBonding'
import Stoichiometry from './pages/lessons/Stoichiometry'
import AcidsAndBases from './pages/lessons/AcidsAndBases'
import ChemicalReactions from './pages/lessons/ChemicalReactions'
import Quiz from './pages/Quiz'
import EquationBalancer from './pages/EquationBalancer'
import Reactions from './pages/Reactions'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/periodic-table" element={<PeriodicTable />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lessons/atomic-structure" element={<AtomicStructure />} />
              <Route path="/lessons/chemical-bonding" element={<ChemicalBonding />} />
              <Route path="/lessons/stoichiometry" element={<Stoichiometry />} />
              <Route path="/lessons/acids-and-bases" element={<AcidsAndBases />} />
              <Route path="/lessons/chemical-reactions" element={<ChemicalReactions />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/balancer" element={<EquationBalancer />} />
              <Route path="/reactions" element={<Reactions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <footer className="text-center text-xs text-gray-600 py-4 border-t border-gray-800">
            ChemLearn — High School Chemistry © {new Date().getFullYear()}
          </footer>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
