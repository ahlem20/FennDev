import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar({ lang, setLang }) {
  const translations = {
    en: {
      FQ: "FAQ's",
      what: "What to expect",
      contact: "Contact Us",
      projects: "Projects",
      blog: "Blog",
      discover: "Discover Now",
      logo: "/FenncodeLogoW.png",
    },
    fr: {
      FQ: "FAQ's",
      what: "À quoi s'attendre",
      contact: "Contactez-nous",
      projects: "Projets",
      blog: "Blog",
      discover: "Découvrir maintenant",
      logo: "/FenncodeLogoW.png",
    },
    ar: {
      FQ: "س/ج",
      what: "بماذا نعدك",
      contact: "اتصل بنا",
      projects: "المشاريع",
      blog: "مدوّنة",
      discover: "اكتشف الآن",
      logo: "/FenncodeLogoW.png",
    },
  }

  const t = translations[lang]

  return (
    <header className={`navbar ${lang === "ar" ? "rtl" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src={t.logo} alt="Fenncode Logo" />
        </Link>
      </div>

      <nav>
        {lang === "ar" ? (
          <>
            <Link to="/blog">{t.blog}</Link>
            <Link to="/contact">{t.contact}</Link>
            <Link to="/what">{t.what}</Link>
            <Link to="/faq">{t.FQ}</Link>
            <Link to="/project">{t.projects}</Link>
          </>
        ) : (
          <>
            <Link to="/project">{t.projects}</Link>
            <Link to="/faq">{t.FQ}</Link>
            <Link to="/what">{t.what}</Link>
            <Link to="/contact">{t.contact}</Link>
            <Link to="/blog">{t.blog}</Link>
          </>
        )}
      </nav>

      <div className="controls">
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
        </select>
        <button className="discover-btn">{t.discover}</button>
      </div>
    </header>
  )
}

export default Navbar
