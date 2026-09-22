import { useLang } from "../i18n/LanguageContext";
import { featuredProjects, earlierProjects } from "../data/content";
import SectionTitle from "./SectionTitle";

function FeaturedCard({ p, t, lang, reverse }) {
  return (
    <article className={`project ${reverse ? "project--reverse" : ""}`} data-aos="fade-up">
      <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project__img">
        <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" width="960" height="600" />
      </a>
      <div className="project__body">
        <h3>
          {p.title}
          {p.team && <span className="tag">{t.team}</span>}
        </h3>
        <p>{p.text[lang]}</p>
        <ul className="chips">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="project__links">
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
            <i className="fa-solid fa-arrow-up-right-from-square" /> {t.demo}
          </a>
          <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
            <i className="fab fa-github" /> {t.code}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { lang, t } = useLang();
  const pr = t.projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle title={pr.title} subtitle={pr.subtitle} />
        <div className="projects">
          {featuredProjects.map((p, i) => (
            <FeaturedCard key={p.title} p={p} t={pr} lang={lang} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="earlier">
          <h3 className="side-title" data-aos="fade-up">{pr.earlier}</h3>
          <p className="muted" data-aos="fade-up">{pr.earlierText}</p>
          <div className="row g-3">
            {earlierProjects.map((p) => (
              <div key={p.title} className="col-6 col-md-4" data-aos="fade-up">
                <div className="mini">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer">
                    <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" width="960" height="600" />
                  </a>
                  <div className="mini__body">
                    <strong>{p.title}</strong>
                    <small>{p.stack}</small>
                    <div className="mini__links">
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} demo`}>
                        {pr.demo}
                      </a>
                      <a href={p.code} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} code`}>
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
