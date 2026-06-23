import React from 'react'
import AboutModel from '../components/About/AboutModel'
import TheoreticalFoundation from '../components/About/TheoreticalFoundation'
import WholeChild from '../components/About/WholeChild'

const AboutPage = () => {
  return (
    <main className="py-12 sm:py-16">
      <div className="container-custom">
        <h2 className="section-title">About the Head Start Model</h2>
        <AboutModel />

        <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Theoretical Foundation</h3>
        <TheoreticalFoundation />

        <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Supporting the Whole Child</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <WholeChild />
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-4">Why We Chose Head Start</h3>
            <p className="text-gray-700">
              The Head Start model was selected because it recognizes that children learn best when
              <strong> families, educators, and communities work together</strong>. The program provides
              comprehensive services that support children's academic, physical, social, and emotional
              development while empowering families to become active participants in their children's
              education.
            </p>
            <p className="text-sm text-gray-500 mt-2">(U.S. Department of Health and Human Services, 2024)</p>
            <p className="text-gray-700 mt-4">
              Many families in our community benefit from access to educational resources, health
              services, family engagement opportunities, and individualized support. Head Start's
              comprehensive approach ensures that children receive the services they need to thrive.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage