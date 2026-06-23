import React from 'react'
import InfantRoom from '../components/Classrooms/InfantRoom'
import ToddlerRoom from '../components/Classrooms/ToddlerRoom'
import PreschoolRoom from '../components/Classrooms/PreschoolRoom'

const ClassroomsPage = () => {
  return (
    <main className="py-12 sm:py-16">
      <div className="container-custom">
        <h2 className="section-title">Our Classrooms</h2>
        <InfantRoom />
        <ToddlerRoom />
        <PreschoolRoom />
      </div>
    </main>
  )
}

export default ClassroomsPage