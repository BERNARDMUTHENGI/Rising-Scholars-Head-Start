import React from 'react'
import { siteContent } from '../../data/content'
import ClassroomCard from './ClassroomCard'

const InfantRoom = () => {
  return <ClassroomCard data={siteContent.classrooms.infant} />
}

export default InfantRoom