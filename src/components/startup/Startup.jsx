import React from "react";
import {
  FaBuilding,
  FaGlobe,
  FaBolt,
  FaChartLine,
} from "react-icons/fa";
import "./Startup.css";

const translations = {
  en: {
    title: "🚀 Startup Package",
    subtitle: "Launch Your Startup with Confidence",
    description:
      "Turn your big idea into reality with our all-in-one startup package. From legal setup to modern platforms — we help you move fast and impress investors.",
    cards: [
      {
        icon: <FaBuilding className="icon" />,
        title: "Admin & Legal Setup",
        text: "Forget the paperwork stress — we’ll handle it so you can focus on your vision.",
      },
      {
        icon: <FaGlobe className="icon" />,
        title: "Modern Website",
        text: "A sleek, mobile-ready website to showcase your idea and attract early customers.",
      },
      {
        icon: <FaBolt className="icon" />,
        title: "POC / MVP Platform",
        text: "Build, test, and launch your product fast with expert support and modern tools.",
      },
      {
        icon: <FaChartLine className="icon" />,
        title: "Investor-Ready Docs",
        text: "Pitch decks and materials designed to win investor trust and secure funding.",
      },
    ],
    more: "Learn More",
  },

  ar: {
    title: "🚀 حزمة الشركات الناشئة",
    subtitle: "أطلق شركتك بثقة واحترافية",
    description:
      "حوّل فكرتك الكبيرة إلى واقع مع حزمة الشركات الناشئة المتكاملة. من الجانب القانوني إلى التكنولوجيا — نحن معك خطوة بخطوة.",
    cards: [
      {
        icon: <FaBuilding className="icon" />,
        title: "الإعداد الإداري والقانوني",
        text: "نقوم بكل المعاملات الرسمية لتتفرغ أنت لبناء رؤيتك.",
      },
      {
        icon: <FaGlobe className="icon" />,
        title: "موقع إلكتروني عصري",
        text: "موقع حديث ومتجاوب يعرض فكرتك ويجذب عملاءك الأوائل.",
      },
      {
        icon: <FaBolt className="icon" />,
        title: "منصة MVP / POC",
        text: "ابنِ واختبر وأطلق منتجك بسرعة مع دعم خبراء.",
      },
      {
        icon: <FaChartLine className="icon" />,
        title: "مستندات جاهزة للمستثمرين",
        text: "عروض تقديمية احترافية لجذب المستثمرين وكسب التمويل.",
      },
    ],
    more: "المزيد",
  },

  fr: {
    title: "🚀 Pack Startup",
    subtitle: "Lancez votre startup avec assurance",
    description:
      "Transformez votre idée en succès avec notre pack complet. Juridique, technique et business — tout pour accélérer votre POC.",
    cards: [
      {
        icon: <FaBuilding className="icon" />,
        title: "Mise en place Administrative",
        text: "On gère la paperasse, vous vous concentrez sur votre vision.",
      },
      {
        icon: <FaGlobe className="icon" />,
        title: "Site Web Moderne",
        text: "Un site élégant et mobile-friendly pour séduire vos premiers clients.",
      },
      {
        icon: <FaBolt className="icon" />,
        title: "Plateforme MVP / POC",
        text: "Créez et testez votre produit rapidement avec notre accompagnement.",
      },
      {
        icon: <FaChartLine className="icon" />,
        title: "Docs Investisseurs",
        text: "Des pitch decks percutants pour convaincre vos investisseurs.",
      },
    ],
    more: "Plus",
  },
};

const Startup = ({ lang = "en" }) => {
  const t = translations[lang] || translations.en;
  const rtl = lang === "ar";

  return (
    <section
      className={`startup-section ${rtl ? "rtl" : ""}`}
      dir={rtl ? "rtl" : "ltr"}
    >
      <div className="startup-header">
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
        <p className="description">{t.description}</p>
      </div>

      <div className="startup-cards">
        {t.cards.map((card, i) => (
          <div className="startup-card" key={i}>
            <div className="icon-wrapper">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="startup-footer">
        <button className="more-btn">{t.more}</button>
      </div>
    </section>
  );
};

export default Startup;
