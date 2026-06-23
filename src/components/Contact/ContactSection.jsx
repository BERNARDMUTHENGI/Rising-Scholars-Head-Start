import React from 'react'
import { siteContent } from '../../data/content'

const ContactSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card border-t-secondary">
        <h3 className="text-xl font-bold text-primary">📍 Visit Us</h3>
        <p className="text-lg font-semibold">{siteContent.name}</p>
        <p>{siteContent.address}</p>
        <p className="mt-4"><strong>🕐 Hours:</strong> {siteContent.hours}</p>
        <p><strong>📞 Phone:</strong> {siteContent.phone}</p>
        <p><strong>✉️ Email:</strong> {siteContent.email}</p>
        <p className="mt-4"><strong>👶 Ages Served:</strong> {siteContent.ages}</p>
      </div>

      <div className="card border-t-secondary">
        <h3 className="text-xl font-bold text-primary">📚 References</h3>
        <div className="space-y-3 text-sm">
          {siteContent.references.map((ref, index) => (
            <p key={index} className="text-gray-700">{ref}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactSection