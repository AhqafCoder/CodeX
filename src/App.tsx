import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Events from "./pages/Events"
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
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App