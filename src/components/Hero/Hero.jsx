import "./Hero.css";

export default function Hero({ lang }) {
  const translations = {
    en: {
      title: "Welcome to FennDev",
      slogan: "“Agile Code, Clever Solutions”",
      subtitle: "Step by Step to the Peaks.",
      discover: "Discover Now",
    },
    fr: {
      title: "Bienvenue chez FennDev",
      slogan: "“Code Agile, Solutions Intelligentes”",
      subtitle: "Pas à pas vers les sommets.",
      discover: "Découvrir maintenant",
    },
    ar: {
      title: "مرحبًا بكم في FennDev",
      slogan: "«كود مرن، حلول ذكية»",
      subtitle: "خطوة بخطوة نحو القمم.",
      discover: "اكتشف الآن",
    },
  };

  const t = translations[lang] || translations.en;

  const handleDiscover = () => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className={`hero-wrapper ${lang === "ar" ? "rtl" : ""}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="hero-text">
        <h1 className="hero-title">{t.title}</h1>
        <div className="hero-slogan">{t.slogan}</div>
        <p className="hero-sub">{t.subtitle}</p>

        <div className="hero-cta">
          <button className="discover-btn1" onClick={handleDiscover}>
            {t.discover}
          </button>
        </div>
      </div>
    </section>
  );
}
