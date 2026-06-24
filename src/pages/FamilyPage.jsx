import React from 'react'
import FamilyEngagement from '../components/Family/FamilyEngagement'
import InclusiveStatement from '../components/Family/InclusiveStatement'

const FamilyPage = () => {
  return (
    <main className="py-8 sm:py-12 md:py-16">
      <div className="container-custom">
        <h2 className="section-title">Family Engagement</h2>
        
        <div className="mb-6 sm:mb-8 w-full h-40 sm:h-48 md:h-96 lg:h-150 rounded-xl overflow-hidden">
          <img 
            src="/images/family.jpg" 
            alt="Family Engagement"
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
          Families are children's <strong>first and most important teachers</strong>. We encourage
          participation through:
        </p>
        <FamilyEngagement />
        <div className="mt-10 sm:mt-12">
          <InclusiveStatement />
        </div>
      </div>
    </main>
  )
}

export default FamilyPage