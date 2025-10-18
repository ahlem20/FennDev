import "./Footer.css"

export default function Footer({ lang }) {
  const translations = {
    en: {
      title: "Ready to bring your ideas to life?\nLet's build the future together!",
      watch: "▶ Watch our story",
      button: "Get a Quote",
      language: "English",
      sections: {
        services: "Services",
        about: "About FennDev",
        resources: "Resources",
        legal: "Legal"
      },
      links: {
        services: ["Web Development", "Mobile Applications", "UI/UX Design", "Cloud & Hosting"],
        about: ["Who We Are", "Our Team", "Careers"],
        resources: ["Blog", "Case Studies", "FAQs"],
        legal: ["Terms & Conditions", "Privacy Policy"]
      }
    },
    fr: {
      title: "Prêt à concrétiser vos idées ?\nConstruisons l'avenir ensemble !",
      watch: "▶ Regardez notre histoire",
      button: "Demander un devis",
      language: "Français",
      sections: {
        services: "Services",
        about: "À propos de FennDev",
        resources: "Ressources",
        legal: "Mentions légales"
      },
      links: {
        services: ["Développement Web", "Applications Mobiles", "Conception UI/UX", "Cloud & Hébergement"],
        about: ["Qui sommes-nous ?", "Notre équipe", "Carrières"],
        resources: ["Blog", "Études de cas", "FAQs"],
        legal: ["Conditions générales", "Politique de confidentialité"]
      }
    },
    ar: {
      title: "هل أنت مستعد لتحويل أفكارك إلى واقع؟\nلنصنع المستقبل معًا!",
      watch: "▶ شاهد قصتنا",
      button: "احصل على عرض",
      language: "العربية",
      sections: {
        services: "الخدمات",
        about: "عن FennDev",
        resources: "المصادر",
        legal: "الشروط القانونية"
      },
      links: {
        services: ["تطوير المواقع", "تطبيقات الجوال", "تصميم واجهة المستخدم", "السحابة والاستضافة"],
        about: ["من نحن", "فريقنا", "الوظائف"],
        resources: ["المدونة", "دراسات الحالة", "الأسئلة الشائعة"],
        legal: ["الشروط والأحكام", "سياسة الخصوصية"]
      }
    }
  }

  const t = translations[lang] || translations.en

  return (
    <footer className={`footer ${lang === "ar" ? "rtl" : ""}`}>
      <div className="footer-top">
        <div className="footer-left">
          <h2>
            {t.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        </div>
          <div className="footer-actions">
            <a href="#" className="watch-video">{t.watch}</a>
            <button className="choose-forest">{t.button}</button>
          </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="FenncodeLogoW.png" alt="FennDev Logo" />
          <p>{t.language}</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>{t.sections.services}</h4>
            <ul>
              {t.links.services.map((item, i) => (
                <li key={i}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.sections.about}</h4>
            <ul>
              {t.links.about.map((item, i) => (
                <li key={i}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.sections.resources}</h4>
            <ul>
              {t.links.resources.map((item, i) => (
                <li key={i}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.sections.legal}</h4>
            <ul>
              {t.links.legal.map((item, i) => (
                <li key={i}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
