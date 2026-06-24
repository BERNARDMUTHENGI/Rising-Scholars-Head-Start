import React from 'react'
import { siteContent } from '../../data/content'
import ClassroomCard from './ClassroomCard'

const InfantRoom = () => {
  return (
    <ClassroomCard 
      data={siteContent.classrooms.infant} 
      imageUrl="/images/infant.jpeg"
    />
  )
}

export default InfantRoom