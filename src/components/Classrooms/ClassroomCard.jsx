import React from 'react'

const ClassroomCard = ({ data }) => {
  return (
    <div className="card mb-8">
      <h3 className="text-2xl font-bold text-primary">
        {data.icon} {data.title} <span className="text-base font-normal text-gray-600">({data.age})</span>
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <h4 className="font-semibold text-gray-800">Curriculum, Instruction & Activities</h4>
          <p className="text-gray-700">{data.curriculum}</p>

          <h4 className="font-semibold text-gray-800 mt-4">Supporting Theories</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {data.theories.map((theory, idx) => (
              <li key={idx}><strong>{theory.name}</strong> – {theory.description}</li>
            ))}
          </ul>

          <h4 className="font-semibold text-gray-800 mt-4">Materials & Resources</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {data.materials.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h4 className="font-semibold text-gray-800 mt-4">Parent Volunteer Opportunities</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {data.volunteerOpportunities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800">At-Home Activities</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {data.atHomeActivities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h4 className="font-semibold text-gray-800 mt-4">What Families Will See and Hear</h4>
          <p className="text-gray-700">{data.seeAndHear}</p>
        </div>
      </div>
    </div>
  )
}

export default ClassroomCard