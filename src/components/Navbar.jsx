import { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { useTheme } from "../i18n/ThemeContext";

const LINKS = ["about", "experience", "projects", "skills", "contact"];

export default function Navbar() {
  const { lang, t, toggle } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" aria-label="Anas Alnagar – home">
          <img src="/AnasLogo.png" alt="Anas" width="88" height="32" />
        </a>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>

        <nav className={`nav__menu ${open ? "is-open" : ""}`}>
          {LINKS.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {t.nav[id]}
            </a>
          ))}
          <button
            className="lang-switch"
            onClick={toggle}
            aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
          >
            <span className={lang === "en" ? "active" : ""}>EN</span>
            <span className={lang === "es" ? "active" : ""}>ES</span>
          </button>
          <button
            className="theme-switch"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            <i className={theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"} />
          </button>
        </nav>
      </div>
    </header>
  );
}
