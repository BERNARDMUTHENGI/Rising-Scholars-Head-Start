import React from 'react'
import ContactSection from '../components/Contact/ContactSection'

const ContactPage = () => {
  return (
    <main className="py-12 sm:py-16">
      <div className="container-custom">
        <h2 className="section-title">Contact Us</h2>
        <ContactSection />
      </div>
    </main>
  )
}

export default ContactPage