import { useLang } from "../i18n/LanguageContext";
import SectionTitle from "./SectionTitle";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle title={a.title} />
        <div className="row g-4 align-items-start">
          <div className="col-lg-7" data-aos="fade-up">
            {a.paragraphs.map((p, i) => (
              <p key={i} className="about__p">
                {p}
              </p>
            ))}
          </div>
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
            <dl className="facts">
              {a.facts.map((f) => (
                <div key={f.label} className="facts__row">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
