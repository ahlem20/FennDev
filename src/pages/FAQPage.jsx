// src/pages/FAQPage.jsx
import { useState } from "react"
import Navbar from '../components/Navbar/Navbar'

export default function FAQPage({ lang, setLang }) {
  const [openIndex, setOpenIndex] = useState(null)

  const translations = {
    en: {
      subtitle: "TRUSTED BY",
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: "What is Fenncode?",
          answer:
            "Fenncode is a software development company focused on building modern, scalable, and user-friendly applications.",
        },
        {
          question: "Do you provide custom software solutions?",
          answer:
            "Yes, we specialize in creating tailor-made applications according to client needs, including web, mobile, and cloud solutions.",
        },
        {
          question: "Where are you located?",
          answer:
            "We are based in Algeria but work with clients worldwide through remote collaboration tools.",
        },
        {
          question: "How can I contact you?",
          answer:
            "You can reach us via our contact page, email, or social media platforms.",
        },
      ],
    },
    fr: {
      subtitle: "FIABLE PAR",
      title: "Questions Fréquemment Posées",
      faqs: [
        {
          question: "Qu'est-ce que Fenncode ?",
          answer:
            "Fenncode est une société de développement logiciel spécialisée dans la création d'applications modernes, évolutives et conviviales.",
        },
        {
          question: "Fournissez-vous des solutions logicielles personnalisées ?",
          answer:
            "Oui, nous créons des applications sur mesure selon les besoins du client, y compris web, mobile et cloud.",
        },
        {
          question: "Où êtes-vous situés ?",
          answer:
            "Nous sommes basés en Algérie mais nous travaillons avec des clients partout dans le monde grâce aux outils de collaboration à distance.",
        },
        {
          question: "Comment puis-je vous contacter ?",
          answer:
            "Vous pouvez nous joindre via notre page de contact, par e-mail ou sur les réseaux sociaux.",
        },
      ],
    },
    ar: {
      subtitle: "موثوق من",
      title: "الأسئلة الشائعة",
      faqs: [
        {
          question: "ما هي Fenncode؟",
          answer:
            "Fenncode هي شركة تطوير برمجيات تركز على بناء تطبيقات حديثة وقابلة للتطوير وسهلة الاستخدام.",
        },
        {
          question: "هل تقدمون حلول برمجية مخصصة؟",
          answer:
            "نعم، نحن متخصصون في إنشاء تطبيقات مصممة خصيصًا وفقًا لاحتياجات العميل، بما في ذلك تطبيقات الويب والجوال والحوسبة السحابية.",
        },
        {
          question: "أين يقع مقرّكم؟",
          answer:
            "نحن مقرّنا في الجزائر ونعمل مع عملاء من جميع أنحاء العالم عبر أدوات التعاون عن بُعد.",
        },
        {
          question: "كيف يمكنني التواصل معكم؟",
          answer:
            "يمكنك التواصل معنا عبر صفحة الاتصال الخاصة بنا أو البريد الإلكتروني أو وسائل التواصل الاجتماعي.",
        },
      ],
    },
  }

  const { subtitle, title, faqs } = translations[lang] || translations.en

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div
      style={{
        ...styles.wrapper,
        direction: lang === "ar" ? "rtl" : "ltr",
        textAlign: lang === "ar" ? "right" : "center",
      }}
    >
      <Navbar lang={lang} setLang={setLang} />

      <div style={styles.overlay}>
        <h4 style={styles.subtitle}>{subtitle}</h4>
        <h1 style={styles.title}>{title}</h1>

        <div style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <button
                style={{
                  ...styles.question,
                  ...(openIndex === index ? styles.activeQuestion : {}),
                }}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span style={styles.icon}>
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p style={styles.answer}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    padding: "60px 20px",
    minHeight: "100vh",
    backgroundImage: "url('/bg1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Impact, Arial, sans-serif", // ✅ Impact applied globally
  },
  overlay: {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    width: "100%",
  },
  subtitle: {
    fontSize: "0.9rem",
    color: "#209EBB",
    letterSpacing: "2px",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    color: "#002F46",
  },
  faqContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  faqItem: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    background: "#f9f9f9",
    textAlign: "left",
  },
  question: {
    width: "100%",
    padding: "16px 20px",
    fontSize: "1rem",
    fontWeight: "500",
    background: "transparent",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  activeQuestion: {
    background: "#fff",
    borderBottom: "1px solid #eee",
  },
  icon: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#209EBB",
  },
  answer: {
    padding: "16px 20px",
    fontSize: "0.95rem",
    color: "#444",
    background: "#fff",
  },
}
