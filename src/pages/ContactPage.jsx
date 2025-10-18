import { useState } from "react"
import "./Contact.css"
import Navbar from "../components/Navbar/Navbar"

export default function ContactPage({ lang, setLang }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "Ukraine",
    message: "",
    consent: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  // 🔹 Traductions
  const translations = {
    en: {
      title: "Contact",
      description:
        'OUR "ONE OFFICE" PHILOSOPHY MEANS OUR GLOBAL TEAM WORKS ACROSS LOCATIONS, BRINGING EXTENSIVE INTERNATIONAL EXPERIENCE TO OUR WORK.',
      name: "Name",
      company: "Company",
      email: "Email",
      message: "Message",
      consent:
        "By ticking this box, I consent to processing my personal data provided in this form.",
      submit: "Submit",
      success: "Thank you! Your request was sent ✅",
    },
    fr: {
      title: "Contact",
      description:
        'NOTRE PHILOSOPHIE "ONE OFFICE" SIGNIFIE QUE NOTRE ÉQUIPE MONDIALE TRAVAILLE À TRAVERS LES DIFFÉRENTS PAYS, APPORTANT UNE EXPÉRIENCE INTERNATIONALE ÉTENDUE À NOTRE TRAVAIL.',
      name: "Nom",
      company: "Entreprise",
      email: "E-mail",
      message: "Message",
      consent:
        "En cochant cette case, je consens au traitement de mes données personnelles fournies dans ce formulaire.",
      submit: "Envoyer",
      success: "Merci ! Votre demande a été envoyée ✅",
    },
    ar: {
      title: "اتصل بنا",
      description:
        'تعني فلسفتنا "مكتب واحد" أن فريقنا العالمي يعمل عبر المواقع، مما يجلب خبرة دولية واسعة إلى عملنا.',
      name: "الاسم",
      company: "الشركة",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      consent:
        "من خلال تحديد هذا المربع، أوافق على معالجة بياناتي الشخصية المقدمة في هذا النموذج.",
      submit: "إرسال",
      success: "شكراً لك! تم إرسال طلبك ✅",
    },
  }

  const t = translations[lang] || translations.en

  return (
    <div
      className="contact-wrapper"
      style={{ direction: lang === "ar" ? "rtl" : "ltr", textAlign: lang === "ar" ? "right" : "left" }}
    >
      <Navbar lang={lang} setLang={setLang} />
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h1>
            {t.title} <span className="heart">♥</span>
          </h1>
          <p>{t.description}</p>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder={t.name}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder={t.company}
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder={t.email}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option>Algeria</option>
  <option>Bahrain</option>
  <option>Comoros</option>
  <option>Djibouti</option>
  <option>Egypt</option>
  <option>Iraq</option>
  <option>Jordan</option>
  <option>Kuwait</option>
  <option>Lebanon</option>
  <option>Libya</option>
  <option>Mauritania</option>
  <option>Morocco</option>
  <option>Oman</option>
  <option>Palestine</option>
  <option>Qatar</option>
  <option>Saudi Arabia</option>
  <option>Somalia</option>
  <option>Sudan</option>
  <option>Syria</option>
  <option>Tunisia</option>
  <option>United Arab Emirates</option>
  <option>Yemen</option>
          </select>

          <textarea
            name="message"
            placeholder={t.message}
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className="consent">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <label>{t.consent}</label>
          </div>

          <button type="submit">{t.submit}</button>
        </form>
      </div>

      {/* Success Message */}
      {submitted && (
        <div className="success-message">
          {t.success}
          <button onClick={() => setSubmitted(false)}>×</button>
        </div>
      )}
    </div>
  )
}
