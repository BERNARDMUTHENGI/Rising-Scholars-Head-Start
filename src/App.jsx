import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ClassroomsPage from './pages/ClassroomsPage'
import FamilyPage from './pages/FamilyPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classrooms" element={<ClassroomsPage />} />
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App