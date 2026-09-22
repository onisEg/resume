import { useLang } from "../i18n/LanguageContext";
import { profile } from "../data/content";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const items = [
    { icon: "fa-solid fa-envelope", label: c.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: "fa-solid fa-phone", label: c.phone, value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: "fab fa-linkedin-in", label: "LinkedIn", value: "in/anaseg", href: profile.social.linkedin },
    { icon: "fab fa-github", label: "GitHub", value: "onisEg", href: profile.social.github },
    { icon: "fab fa-behance", label: "Behance", value: "AnasEg", href: profile.social.behance },
    { icon: "fab fa-whatsapp", label: "WhatsApp", value: profile.phone, href: profile.social.whatsapp },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle title={c.title} subtitle={c.text} />
        <div className="row g-3 justify-content-center">
          {items.map((it) => (
            <div key={it.label} className="col-sm-6 col-lg-4" data-aos="fade-up">
              <a
                className="contact-card"
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <i className={it.icon} />
                <span>
                  <small>{it.label}</small>
                  {it.value}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
