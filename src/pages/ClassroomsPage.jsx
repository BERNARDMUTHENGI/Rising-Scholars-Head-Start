import React from 'react'
import InfantRoom from '../components/Classrooms/InfantRoom'
import ToddlerRoom from '../components/Classrooms/ToddlerRoom'
import PreschoolRoom from '../components/Classrooms/PreschoolRoom'

const ClassroomsPage = () => {
  return (
    <main className="py-8 sm:py-12 md:py-16">
      <div className="container-custom">
        <h2 className="section-title">Our Classrooms</h2>
        
        {/* Banner images - hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-full h-32 sm:h-36 md:h-60 rounded-lg overflow-hidden">
            <img 
              src="/images/infant.jpeg" 
              alt="Infant Classroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-32 sm:h-36 md:h-60 rounded-lg overflow-hidden">
            <img 
              src="/images/toddler-room.jpg" 
              alt="Toddler Classroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-32 sm:h-36 md:h-60 rounded-lg overflow-hidden">
            <img 
              src="/images/preschool-room.jpg" 
              alt="Preschool Classroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <InfantRoom />
        <ToddlerRoom />
        <PreschoolRoom />
      </div>
    </main>
  )
}

export default ClassroomsPage