import "./WhatToExpect.css"
import Navbar from "../../components/Navbar/Navbar"

function WhatToExpects({ lang }) {
  const translations = {
    en: {
      title: "What to Expect",
      intro: "At FennDev, we guide you from idea to launch with clarity and transparency.",
      steps: [
        { title: "Consultation", desc: "We discuss your needs and goals to shape the project scope." },
        { title: "Design", desc: "Our team creates user-friendly and modern designs." },
        { title: "Development", desc: "We build scalable and reliable applications." },
        { title: "Delivery", desc: "We deliver on time and ensure continuous support." },
      ],
    },
    fr: {
      title: "À quoi s’attendre",
      intro: "Chez FennDev, nous vous guidons de l’idée au lancement avec clarté et transparence.",
      steps: [
        { title: "Consultation", desc: "Nous discutons de vos besoins et objectifs pour définir le projet." },
        { title: "Conception", desc: "Notre équipe crée des designs modernes et intuitifs." },
        { title: "Développement", desc: "Nous développons des applications fiables et évolutives." },
        { title: "Livraison", desc: "Nous livrons à temps avec un suivi continu." },
      ],
    },
    ar: {
      title: "بماذا نعدك",
      intro: "في FennDev نرافقك من الفكرة حتى الإطلاق بوضوح وشفافية.",
      steps: [
        { title: "الاستشارة", desc: "نناقش احتياجاتك وأهدافك لرسم ملامح المشروع." },
        { title: "التصميم", desc: "نبدع تصاميم حديثة وسهلة الاستخدام." },
        { title: "التطوير", desc: "نبرمج تطبيقات موثوقة وقابلة للتطوير." },
        { title: "التسليم", desc: "نسلم في الوقت المحدد مع دعم مستمر." },
      ],
    },
  }

  const t = translations[lang]

  return (
    <>
      <Navbar lang={lang} setLang={() => {}} />

        <section className={`expect-wrapper ${lang === "ar" ? "rtl" : ""}`}>
        <div className="expect-container">
          <h1>{t.title}</h1>
          <p className="intro">{t.intro}</p>

          <div className="steps">
            {t.steps.map((step, idx) => (
              <div key={idx} className="step-card">
                <h2>{step.title}</h2>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatToExpects
