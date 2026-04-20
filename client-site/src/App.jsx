import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home    from './subpages/Home'
import About   from './subpages/About'
import ASA from './subpages/ASA'
import PGA from './subpages/PGA'
import Socials from './subpages/Socials'
import JoinUs  from './subpages/JoinUs'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/asa"     element={<ASA />} />
          <Route path="/pga"     element={<PGA />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/join"    element={<JoinUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
