import { FaSearch, FaPalette, FaCheckCircle, FaTools } from "react-icons/fa";
import "./AppMethodology.css";

export default function AppMethodology({ lang }) {
  const translations = {
    en: {
      title: "Our App Development Methodology in Algeria",
      description:
        "We follow an agile process to deliver scalable, secure, and user-friendly mobile applications.",
      steps: [
        {
          icon: <FaSearch className="icon" />,
          title: "Requirement Analysis",
          text: "Understand business needs & target audience to craft tailored solutions.",
        },
        {
          icon: <FaPalette className="icon" />,
          title: "UI/UX Design",
          text: "Create engaging, intuitive, and responsive interfaces.",
        },
        {
          icon: <FaCheckCircle className="icon" />,
          title: "Testing",
          text: "Ensure performance, security, and bug-free user experience.",
        },
        {
          icon: <FaTools className="icon" />,
          title: "Support & Maintenance",
          text: "Ongoing updates to keep your app secure, fast, and relevant.",
        },
      ],
    },
    fr: {
      title: "Notre méthodologie de développement d’applications en Algérie",
      description:
        "Nous suivons un processus agile pour livrer des applications mobiles évolutives, sécurisées et faciles à utiliser.",
      steps: [
        {
          icon: <FaSearch className="icon" />,
          title: "Analyse des besoins",
          text: "Comprendre les besoins métiers et le public cible pour proposer des solutions adaptées.",
        },
        {
          icon: <FaPalette className="icon" />,
          title: "Conception UI/UX",
          text: "Créer des interfaces engageantes, intuitives et réactives.",
        },
        {
          icon: <FaCheckCircle className="icon" />,
          title: "Tests",
          text: "Assurer la performance, la sécurité et une expérience fluide sans bugs.",
        },
        {
          icon: <FaTools className="icon" />,
          title: "Support & Maintenance",
          text: "Mises à jour continues pour garder votre application rapide, sécurisée et pertinente.",
        },
      ],
    },
    ar: {
      title: "منهجية تطوير التطبيقات لدينا في الجزائر",
      description:
        "نتبع عملية أجايل لتقديم تطبيقات جوال آمنة، قابلة للتطوير، وسهلة الاستخدام.",
      steps: [
        {
          icon: <FaSearch className="icon" />,
          title: "تحليل المتطلبات",
          text: "فهم احتياجات العمل والجمهور المستهدف لتصميم حلول مخصصة.",
        },
        {
          icon: <FaPalette className="icon" />,
          title: "تصميم واجهة المستخدم وتجربة المستخدم",
          text: "إنشاء واجهات تفاعلية، جذابة وسهلة الاستخدام.",
        },
        {
          icon: <FaCheckCircle className="icon" />,
          title: "الاختبارات",
          text: "ضمان الأداء، الأمان وتجربة خالية من الأخطاء.",
        },
        {
          icon: <FaTools className="icon" />,
          title: "الدعم والصيانة",
          text: "تحديثات مستمرة للحفاظ على أمان وسرعة التطبيق.",
        },
      ],
    },
  };

  const t = translations[lang] || translations.en;

  return (
    <section className={`methodology ${lang === "ar" ? "rtl" : ""}`}>
      <div className="methodology-container">
        {/* Left - Text */}
        <div className="methodology-text">
          <h2>{t.title}</h2>
          <p>{t.description}</p>

          <ul>
            {t.steps.map((step, index) => (
              <li key={index}>
                {step.icon}
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Illustration */}
        <div className="methodology-image">
          <img src="/method.png" alt="App Development Illustration" />
        </div>
      </div>
    </section>
  );
}
