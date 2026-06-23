import React from 'react'
import { siteContent } from '../../data/content'
import ClassroomCard from './ClassroomCard'

const PreschoolRoom = () => {
  return <ClassroomCard data={siteContent.classrooms.preschool} />
}

export default PreschoolRoom