import React from 'react'

const ClassroomCard = ({ data, imageUrl }) => {
  return (
    <div className="card mb-6 sm:mb-8">
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        <div className="md:col-span-1">
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden">
            <img 
              src={imageUrl} 
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl sm:text-2xl font-bold text-primary-dark">
            {data.icon} {data.title} <span className="text-base font-normal text-gray-600">({data.age})</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-3 sm:mt-4">
            <div>
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Curriculum, Instruction & Activities</h4>
              <p className="text-gray-700 text-xs sm:text-sm">{data.curriculum}</p>

              <h4 className="font-semibold text-gray-800 mt-3 sm:mt-4 text-sm sm:text-base">Supporting Theories</h4>
              <ul className="list-disc pl-4 sm:pl-5 text-gray-700 text-xs sm:text-sm">
                {data.theories.map((theory, idx) => (
                  <li key={idx}><strong>{theory.name}</strong> – {theory.description}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-gray-800 mt-3 sm:mt-4 text-sm sm:text-base">Materials & Resources</h4>
              <ul className="list-disc pl-4 sm:pl-5 text-gray-700 text-xs sm:text-sm">
                {data.materials.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-gray-800 mt-3 sm:mt-4 text-sm sm:text-base">Parent Volunteer Opportunities</h4>
              <ul className="list-disc pl-4 sm:pl-5 text-gray-700 text-xs sm:text-sm">
                {data.volunteerOpportunities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">At-Home Activities</h4>
              <ul className="list-disc pl-4 sm:pl-5 text-gray-700 text-xs sm:text-sm">
                {data.atHomeActivities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-gray-800 mt-3 sm:mt-4 text-sm sm:text-base">What Families Will See and Hear</h4>
              <p className="text-gray-700 text-xs sm:text-sm">{data.seeAndHear}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassroomCard