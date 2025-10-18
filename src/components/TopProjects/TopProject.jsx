import "./TopProject.css";

export default function Projects({ lang, isAvailable = false }) {
  const translations = {
    en: {
      header: "Explore Projects From Small Apps To Big Solutions",
      subtitle: "Some of my most impactful and successful works",
      comingSoon: "🚧 Coming Soon — Exciting projects are on the way!",
      learnMore: "Learn More",
      projects: [
        {
          image: "/1.png",
          title: "Store Management App",
          description: "Manage inventory, sales, and clients efficiently.",
        },
        {
          image: "/2.png",
          title: "LEZZAM Education Platform",
          description: "Connects students and teachers with resources.",
        },
        {
          image: "/3.png",
          title: "Chat Application",
          description: "Real-time chat with images & secure communication.",
        },
        {
          image: "/4.png",
          title: "E-Commerce Platform",
          description: "Online store with payments & product management.",
        },
        {
          image: "/5.png",
          title: "Portfolio Website",
          description: "Showcase personal or business projects beautifully.",
        },
        {
          image: "/1.png",
          title: "AI Recognition System",
          description: "Digit recognition using deep learning models.",
        },
      ],
    },
    ar: {
      header: "استكشف المشاريع من تطبيقات صغيرة إلى حلول كبيرة",
      subtitle: "بعض من أبرز وأهم أعمالي الناجحة",
      comingSoon: "🚧 قريباً — مشاريع رائعة قيد التطوير!",
      learnMore: "اعرف المزيد",
      projects: [
        {
          image: "/1.png",
          title: "تطبيق إدارة المتاجر",
          description: "إدارة المخزون والمبيعات والعملاء بكفاءة.",
        },
        {
          image: "/2.png",
          title: "منصة التعليم LEZZAM",
          description: "تربط بين الطلاب والمعلمين مع الموارد.",
        },
        {
          image: "/3.png",
          title: "تطبيق المحادثة",
          description: "دردشة فورية مع الصور واتصال آمن.",
        },
        {
          image: "/4.png",
          title: "منصة التجارة الإلكترونية",
          description: "متجر إلكتروني مع الدفع وإدارة المنتجات.",
        },
        {
          image: "/5.png",
          title: "موقع بورتفوليو",
          description: "اعرض مشاريعك الشخصية أو التجارية بشكل جميل.",
        },
        {
          image: "/1.png",
          title: "نظام التعرف بالذكاء الاصطناعي",
          description: "التعرف على الأرقام باستخدام نماذج التعلم العميق.",
        },
      ],
    },
  };

  const t = translations[lang] || translations.en;

  return (
    <div className={`projects-section ${lang === "ar" ? "rtl" : ""}`}>
      <div className="projects-header">
        <h2>{t.header}</h2>
        <p>{t.subtitle}</p>
      </div>

      {isAvailable ? (
        <div className="projects-grid">
          {t.projects.map((project, i) => (
            <div className="project-card" key={i}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="learn-more-btn">{t.learnMore}</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="coming-soonn">
          <p>{t.comingSoon}</p>
        </div>
      )}
    </div>
  );
}
