import { useLang } from "../i18n/LanguageContext";
import { profile } from "../data/content";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="home" className="hero">
      <div className="container hero__content">
        <span className="hero__badge">
          <span className="dot" /> {h.badge}
        </span>
        <h1>
          {h.hello} <span className="accent">Anas</span>
        </h1>
        <p className="hero__role">{h.role}</p>
        <p className="hero__text">{h.text}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            {h.ctaProjects}
          </a>
          <a href={profile.cv} className="btn btn--ghost" download>
            <i className="fa-solid fa-download" /> {h.ctaCv}
          </a>
          <a href="#contact" className="btn btn--ghost">
            {h.ctaContact}
          </a>
        </div>

        <div className="hero__social">
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href={profile.social.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <i className="fab fa-behance" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </section>
  );
}
