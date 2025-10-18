import "./Project.css";
import Navbar from "../../components/Navbar/Navbar"; // adjust path if needed

function Project({ lang, setLang }) {
  const translations = {
    en: {
      title: "Our Projects",
      subtitle: "Explore some of the amazing work we’ve done",
      view: "View Project",
      comingSoon: "🚧 Coming Soon...",
    },
    fr: {
      title: "Nos Projets",
      subtitle: "Découvrez quelques-unes de nos réalisations",
      view: "Voir le projet",
      comingSoon: "🚧 Bientôt disponible...",
    },
    ar: {
      title: "مشاريعنا",
      subtitle: "اكتشف بعض الأعمال الرائعة التي أنجزناها",
      view: "عرض المشروع",
      comingSoon: "🚧 قريباً...",
    },
  };

  const t = translations[lang] || translations.en;

  // 🔹 Toggle this variable to control visibility
  const isReady = false; // change to true to show projects

  const projects = [
    { id: 1, title: "E-commerce Platform", desc: "A modern store with full payment integration.", img: "/bg1.jpg" },
    { id: 2, title: "Education App", desc: "Connects students and teachers with real-time chat.", img: "/bg1.jpg" },
    { id: 3, title: "Healthcare System", desc: "Digital platform for managing patient sessions.", img: "/bg1.jpg" },
    { id: 4, title: "AI Recognition", desc: "System for handwriting digit recognition.", img: "/bg1.jpg" },
  ];

  return (
    <div className={`projects-page ${lang === "ar" ? "rtl" : ""}`}>
      {/* Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="projects-hero">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </section>

      {/* Projects or Coming Soon */}
      <section className="projects-grid">
        {isReady ? (
          projects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                <a href="#" className="view-btn">
                  {t.view}
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="coming-soon">
            <h2>{t.comingSoon}</h2>
          </div>
        )}
      </section>
    </div>
  );
}

export default Project;
