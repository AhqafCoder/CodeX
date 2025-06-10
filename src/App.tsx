import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

// Temporary placeholder components until we create the full pages
const Events = () => <div className="container py-12"><h1 className="text-4xl font-bold">Events</h1><p className="mt-4">Upcoming events will be displayed here soon.</p></div>
const Resources = () => <div className="container py-12"><h1 className="text-4xl font-bold">Resources</h1><p className="mt-4">Resources will be available here soon.</p></div>

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/events" element={<Events />} /> 
          <Route path="/resources" element={<Resources />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Layout>
    </Router>
  )
}

export default App