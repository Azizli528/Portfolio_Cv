import { Link } from 'react-router-dom'
import { education, languages, profile } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Salam, mən</p>
        <h1>
          {profile.name}
          <span className="accent">.</span>
        </h1>
        <h2 className="role">{profile.role}</h2>
        <p className="lead">{profile.summary}</p>
        <div className="actions">
          <Link to="/layiheler" className="btn primary">Layihələrimə bax</Link>
          <Link to="/cv" className="btn">CV-yə bax</Link>
          <a className="btn ghost" href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </section>

      <section className="grid two">
        <article className="card">
          <h3>Təhsil</h3>
          {education.map((e) => (
            <div key={e.place} className="item">
              <strong>{e.place}</strong>
              <span>{e.degree}</span>
              <small>{e.period}</small>
            </div>
          ))}
        </article>

        <article className="card">
          <h3>Dillər</h3>
          {languages.map((l) => (
            <div key={l.name} className="item row">
              <strong>{l.name}</strong>
              <span className="pill">{l.level}</span>
            </div>
          ))}
        </article>
      </section>

      <section className="card contact" id="elaqe">
        <h3>Əlaqə</h3>
        <ul className="contact-list">
          <li>
            <span>E-poçt</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span>GitHub</span>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              github.com/{profile.github}
            </a>
          </li>
          {profile.linkedin && (
            <li>
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a>
            </li>
          )}
          {profile.phone && (
            <li>
              <span>Telefon</span>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </li>
          )}
          <li>
            <span>Şəhər</span>
            <b>{profile.city}</b>
          </li>
        </ul>
      </section>
    </>
  )
}
