import React from 'react'
import { siteContent } from '../../data/content'
import ClassroomCard from './ClassroomCard'

const PreschoolRoom = () => {
  return (
    <ClassroomCard 
      data={siteContent.classrooms.preschool} 
      imageUrl="/images/preschool-room.jpg"
    />
  )
}

export default PreschoolRoom