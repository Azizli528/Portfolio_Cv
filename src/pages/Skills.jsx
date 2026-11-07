import { certificates, skillGroups, tools } from '../data.js'

export default function Skills() {
  return (
    <>
      <section className="page-head">
        <p className="eyebrow">Bacariqlar</p>
        <h1>Nə bilirəm</h1>
        <p className="lead">Frontend və backend istiqamətində istifadə etdiyim texnologiyalar.</p>
      </section>

      <section className="grid two">
        {skillGroups.map((g) => (
          <article key={g.title} className="card">
            <h3>
              {g.title}
              {g.note && <span className="pill note">{g.note}</span>}
            </h3>
            <div className="skills">
              {g.items.map((s) => (
                <div key={s.name} className="skill">
                  <div className="skill-top">
                    <strong>{s.name}</strong>
                    <span>{s.level}%</span>
                  </div>
                  <div
                    className="bar"
                    role="progressbar"
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="bar-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="card">
        <h3>Alətlər</h3>
        <div className="chips">
          {tools.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </section>

      <section className="page-head small">
        <p className="eyebrow">Sertifikatlar</p>
        <h2>Təsdiqlənmiş biliklər</h2>
      </section>

      <section className="grid three">
        {certificates.map((c, i) => (
          <article key={i} className="card cert">
            <div className="cert-badge">★</div>
            <h3>{c.title}</h3>
            <p>{c.issuer}</p>
            <small>{c.date}</small>
            {c.link && (
              <a className="btn ghost sm" href={c.link} target="_blank" rel="noreferrer">
                Sertifikata bax ↗
              </a>
            )}
          </article>
        ))}
      </section>
    </>
  )
}