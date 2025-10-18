import { useState } from "react"
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs"


function AboutPage() {
  const [lang, setLang] = useState("en") // global language state

  return (
    <div className="landingPage">
      {/* Navbar controls language */}
      <Navbar lang={lang} setLang={setLang} />
      
      {/* Hero reflects Navbar language */}
      <Hero lang={lang} />
       {/* Why Choose Us Section */}
      <WhyChooseUs lang={lang} />
      {/* Footer stays static or can also use lang if you want */}
      <Footer lang={lang} />
    </div>
  )
}

export default AboutPage
