import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPages"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import FAQPage from "./pages/FAQPage"
import WhatToExpects from "./pages/WhatToExpect/WhatToExpects"
import Blog from "./pages/blog/Blog"
import Project from "./pages/Project/Project"

function App() {
  const [lang, setLang] = useState("en") // global

  return (
    <Routes>
      <Route path="/" element={<LandingPage lang={lang} setLang={setLang} />} />
      <Route path="/about" element={<AboutPage lang={lang} setLang={setLang} />} />
      <Route path="/contact" element={<ContactPage lang={lang} setLang={setLang} />} />
      <Route path="/faq" element={<FAQPage lang={lang} setLang={setLang} />} />
      <Route path="/what" element={<WhatToExpects lang={lang} setLang={setLang} />} />
      <Route path="/blog" element={<Blog lang={lang} setLang={setLang} />} />
      <Route path="/project" element={<Project lang={lang} setLang={setLang} />} />
  </Routes>
  )
}

export default App
