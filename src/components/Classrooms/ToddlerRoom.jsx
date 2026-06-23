import React from 'react'
import { siteContent } from '../../data/content'
import ClassroomCard from './ClassroomCard'

const ToddlerRoom = () => {
  return <ClassroomCard data={siteContent.classrooms.toddler} />
}

export default ToddlerRoom