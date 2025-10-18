import { Shield, Users, Rocket } from "lucide-react"
import "./WhyChooseUs.css"

export default function WhyChooseUs({ lang }) {
  const translations = {
    en: {
      title: "Why Choose Us?",
      reasons: [
        { icon: <Users size={32} strokeWidth={1.5} />, title: "Client-Centric", desc: "We prioritize your vision, ensuring solutions tailored to your needs." },
        { icon: <Shield size={32} strokeWidth={1.5} />, title: "Trusted Expertise", desc: "Years of experience delivering secure and reliable web solutions." },
        { icon: <Rocket size={32} strokeWidth={1.5} />, title: "Innovative Solutions", desc: "Cutting-edge technologies that help your business scale efficiently." }
      ]
    },
    fr: {
      title: "Pourquoi Nous Choisir ?",
      reasons: [
        { icon: <Users size={32} strokeWidth={1.5} />, title: "Orienté Client", desc: "Nous priorisons votre vision pour des solutions adaptées à vos besoins." },
        { icon: <Shield size={32} strokeWidth={1.5} />, title: "Expertise Fiable", desc: "Des années d'expérience à fournir des solutions web sécurisées et fiables." },
        { icon: <Rocket size={32} strokeWidth={1.5} />, title: "Solutions Innovantes", desc: "Des technologies de pointe qui aident votre entreprise à évoluer efficacement." }
      ]
    },
    ar: {
      title: "لماذا تختارنا؟",
      reasons: [
        { icon: <Users size={32} strokeWidth={1.5} />, title: "نهج يركز على العميل", desc: "نضع رؤيتك أولاً لضمان حلول تناسب احتياجاتك." },
        { icon: <Shield size={32} strokeWidth={1.5} />, title: "خبرة موثوقة", desc: "سنوات من الخبرة في تقديم حلول ويب آمنة وموثوقة." },
        { icon: <Rocket size={32} strokeWidth={1.5} />, title: "حلول مبتكرة", desc: "تقنيات متطورة تساعد عملك على النمو بكفاءة." }
      ]
    }
  }

  const t = translations[lang] || translations.en

  return (
    <section className={`why-wrapper ${lang === "ar" ? "rtl" : ""}`} id="why">
      <img src="/why.jpg" alt="Desert Stamp" className="desert-stamp" />
      <div className="why-inner">
        <h2 className="why-title">{t.title}</h2>

        <div className="why-grid">
          {t.reasons.map((reason, i) => (
            <div key={i} className="why-card">
              <div className="why-icon">{reason.icon}</div>
              <h3 className="why-card-title">{reason.title}</h3>
              <p className="why-card-desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
