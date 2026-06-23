import React from 'react'
import Hero from '../components/Home/Hero'
import WelcomeSection from '../components/Home/WelcomeSection'
import MissionVision from '../components/Home/MissionVision'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <section className="py-12 sm:py-16">
        <div className="container-custom space-y-8">
          <WelcomeSection />
          <MissionVision />
        </div>
      </section>
    </main>
  )
}

export default HomePage