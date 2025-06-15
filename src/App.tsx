import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Events from "./pages/Events"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import Support from "./pages/Support"
import Founders from "./pages/Founders"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/events" element={<Events />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/founders" element={<Founders />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App