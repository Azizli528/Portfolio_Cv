import { useEffect, useState } from 'react'
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import CV from './pages/CV.jsx'
import { profile } from './data.js'

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark'
    } catch {
      return 'dark'
    }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
    }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <HashRouter>
      <header className="nav no-print">
        <NavLink to="/" className="brand">
          <span className="brand-dot" /> {profile.name.split(' ')[0]}
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end>Ana səhifə</NavLink>
          <NavLink to="/bacariqlar">Bacariqlar</NavLink>
          <NavLink to="/layiheler">Layihələr</NavLink>
          <NavLink to="/cv">CV</NavLink>
        </nav>
        <button className="theme-btn" onClick={toggleTheme} aria-label="Rejimi dəyiş">
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bacariqlar" element={<Skills />} />
          <Route path="/layiheler" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="footer no-print">
        © {new Date().getFullYear()} {profile.name} · React ve digər app-lər vasitəsi ilə hazırlanıb
      </footer>
    </HashRouter>
  )
}
