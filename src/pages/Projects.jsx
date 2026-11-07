import { useEffect, useState } from 'react'
import { profile } from '../data.js'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading') // loading | ok | error

  useEffect(() => {
    let cancelled = false
    fetch(`https://api.github.com/users/${profile.github}/repos?per_page=100&sort=updated`)
      .then((r) => {
        if (!r.ok) throw new Error('GitHub cavab vermədi')
        return r.json()
      })
      .then((data) => {
        if (cancelled) return
        setRepos(data.filter((r) => !r.fork))
        setStatus('ok')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <section className="page-head">
        <p className="eyebrow">Layihələr</p>
        <h1>GitHub-dakı işlərim</h1>
        <p className="lead">Bu siyahı birbaşa GitHub hesabımdan avtomatik yüklənir.</p>
      </section>

      {status === 'loading' && <p className="muted">Yüklənir…</p>}

      {status === 'error' && (
        <div className="card">
          <p>Layihələri yükləmək alınmadı. Birbaşa GitHub-da baxa bilərsən:</p>
          <a className="btn primary" href={profile.githubUrl} target="_blank" rel="noreferrer">
            github.com/{profile.github} ↗
          </a>
        </div>
      )}

      {status === 'ok' && repos.length === 0 && (
        <p className="muted">Hələ ictimai layihə yoxdur.</p>
      )}

      <section className="grid three">
        {repos.map((r) => (
          <a key={r.id} className="card repo" href={r.html_url} target="_blank" rel="noreferrer">
            <h3>{r.name}</h3>
            <p>{r.description || 'Təsvir əlavə olunmayıb.'}</p>
            <div className="repo-meta">
              {r.language && <span className="pill">{r.language}</span>}
              <span>★ {r.stargazers_count}</span>
            </div>
          </a>
        ))}
      </section>
    </>
  )
}
