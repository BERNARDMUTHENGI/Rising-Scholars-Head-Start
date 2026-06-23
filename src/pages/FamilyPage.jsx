import React from 'react'
import FamilyEngagement from '../components/Family/FamilyEngagement'
import InclusiveStatement from '../components/Family/InclusiveStatement'

const FamilyPage = () => {
  return (
    <main className="py-12 sm:py-16">
      <div className="container-custom">
        <h2 className="section-title">Family Engagement</h2>
        <p className="text-lg text-gray-700 mb-8">
          Families are children's <strong>first and most important teachers</strong>. We encourage
          participation through:
        </p>
        <FamilyEngagement />
        <div className="mt-12">
          <InclusiveStatement />
        </div>
      </div>
    </main>
  )
}

export default FamilyPage