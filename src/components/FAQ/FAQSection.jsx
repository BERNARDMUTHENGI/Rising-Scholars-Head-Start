import React from 'react'
import { siteContent } from '../../data/content'

const FAQSection = () => {
  return (
    <div className="space-y-4">
      {siteContent.faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-5 sm:p-6">
          <h3 className="text-lg font-bold text-primary">{faq.question}</h3>
          <p className="text-gray-700 mt-2">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default FAQSection