import { useLang } from "../i18n/LanguageContext";
import { experience, education, certifications } from "../data/content";
import SectionTitle from "./SectionTitle";

function period(item, lang, present) {
  if (!item.start) return present;
  const end = item.end ? item.end[lang] : present;
  return `${item.start[lang]} – ${end}`;
}

export default function Experience() {
  const { lang, t } = useLang();
  const e = t.experience;

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionTitle title={e.title} />
        <div className="row g-5">
          <div className="col-lg-7">
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.company + job.role.en} className="timeline__item" data-aos="fade-up">
                  <div className="timeline__head">
                    <h3>
                      {job.role[lang]} <span className="at">@ {job.company}</span>
                    </h3>
                    <span className="timeline__date">{period(job, lang, e.present)}</span>
                  </div>
                  <ul>
                    {job.points[lang].map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="col-lg-5">
            <h3 className="side-title" data-aos="fade-up">
              <i className="fa-solid fa-graduation-cap" /> {e.education}
            </h3>
            <ul className="edu">
              {education.map((ed) => (
                <li key={ed.title.en} data-aos="fade-up">
                  <strong>{ed.title[lang]}</strong>
                  <span>{ed.place}</span>
                  <small>{ed.period[lang]}</small>
                </li>
              ))}
            </ul>

            <h3 className="side-title" data-aos="fade-up">
              <i className="fa-solid fa-certificate" /> {e.certs}
            </h3>
            <ul className="edu">
              {certifications.map((c) => (
                <li key={c.title} data-aos="fade-up">
                  <a href={c.file} target="_blank" rel="noopener noreferrer">
                    <strong>{c.title}</strong>
                  </a>
                  <small>{c.issuer}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
