import { useState } from "react"
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs"
import TopProject from "../components/TopProjects/TopProject"
import Startup from "../components/startup/Startup"
import AppMethodology from "../components/AppMethodology/AppMethodology" // ✅ import new section

function LandingPage() {
  const [lang, setLang] = useState("en") // global language state

  return (
    <div className="landingPage">
      {/* Navbar controls language */}
      <Navbar lang={lang} setLang={setLang} />
      
      {/* Hero reflects Navbar language */}
      <Hero lang={lang} />

      {/* Why Choose Us Section */}
      <WhyChooseUs lang={lang} />

      {/* App Methodology Section */}
      <AppMethodology lang={lang} />

      {/* Top Projects Section */}
      <TopProject lang={lang} />

      {/* Startup Section */}
      <Startup lang={lang} />

      {/* Footer Section */}
      <Footer lang={lang} />
    </div>
  )
}

export default LandingPage
