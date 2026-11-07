import { Link } from 'react-router-dom'
import { certificates, education, languages, profile, skillGroups, tools } from '../data.js'

export default function CV() {
  return (
    <>
      <div className="cv-toolbar no-print">
        <p className="muted">
          PDF kimi saxlamaq üçün düyməyə bas və çap pəncərəsində “PDF kimi saxla” seç.
        </p>
        <button className="btn primary" onClick={() => window.print()}>
          PDF kimi saxla / Çap et
        </button>
      </div>

      <article className="cv">
        <header className="cv-head">
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="cv-contact">
            {profile.city} · {profile.email} · github.com/{profile.github}
            {profile.phone && ` · ${profile.phone}`}
            {profile.linkedin && ` · ${profile.linkedin.replace('https://', '')}`}
          </p>
        </header>

        <section>
          <h3>Haqqımda</h3>
          <p>{profile.summary}</p>
        </section>

        <section>
          <h3>Təhsil</h3>
          {education.map((e) => (
            <div key={e.place} className="cv-row">
              <div>
                <strong>{e.place}</strong>
                <div>{e.degree}</div>
              </div>
              <span>{e.period}</span>
            </div>
          ))}
        </section>

        <section>
          <h3>Bacarıqlar</h3>
          <p>
            <strong>Frontend:</strong> {skillGroups[0].items.map((s) => s.name).join(', ')}
          </p>
          <p>
            <strong>Backend:</strong> Java (əsas), C#, Python
          </p>
          <p>
            <strong>Alətlər:</strong> {tools.join(', ')}
          </p>
        </section>

                <section>
          <h3>Sertifikatlar</h3>
          <ul>
            {certificates.map((c, i) => (
              <li key={i}>
                <strong>{c.title}</strong> — {c.issuer}, {c.date}
              </li>
            ))}
          </ul>
          <p className="cv-note">
            Sertifikatlara baxmaq üçün saytımda <Link to="/bacariqlar">Bacarıqlar</Link> səhifəsindəki
            “Təsdiqlənmiş biliklər” bölməsinə baxın.
          </p>
        </section>

        <section>
          <h3>Layihələr</h3>
          <p>
            Layihələrim GitHub hesabımda yerləşir: github.com/{profile.github}
          </p>
        </section>

        <section>
          <h3>Dillər</h3>
          <ul>
            {languages.map((l) => (
              <li key={l.name}>
                <strong>{l.name}</strong> — {l.level}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  )
}