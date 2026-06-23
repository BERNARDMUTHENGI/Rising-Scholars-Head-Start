import React from 'react'
import FAQSection from '../components/FAQ/FAQSection'

const FAQPage = () => {
  return (
    <main className="py-12 sm:py-16">
      <div className="container-custom">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <FAQSection />
      </div>
    </main>
  )
}

export default FAQPage