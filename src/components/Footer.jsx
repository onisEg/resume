import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} · {t.footer}
      </div>
    </footer>
  );
}
