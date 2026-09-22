import { useLang } from "../i18n/LanguageContext";
import { skillGroups } from "../data/content";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  const { lang, t } = useLang();

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionTitle title={t.skills.title} />
        <div className="row g-4">
          {skillGroups.map((g) => (
            <div key={g.title.en} className="col-md-6" data-aos="fade-up">
              <div className="skill-group">
                <h3>{g.title[lang]}</h3>
                <ul>
                  {g.items.map((s) => (
                    <li key={s.name}>
                      {s.logo && <img src={s.logo} alt="" className={s.invert ? "invert" : ""} width="20" height="20" />}
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
