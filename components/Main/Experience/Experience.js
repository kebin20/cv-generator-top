import React from 'react'

import AddExperience from './AddExperience'
import ExperienceList from './ExperienceList'

import './Experience.css'

export default function Experience(props) {
  const [experience,setExperience] = React.useState([
    {
      companyName: 'ABC Company',
      location: 'ABC Street',
      startDate: '25-07-2020',
      endDate: '30-08-2021',
      jobTitle: 'Software Developer',
      jobDescription: 'I did stuff to make sales',
    }
  ])

function addExpHandler(expData) {
  const {companyName, location, startDate, endDate, jobTitle,jobDescription} = expData
  setExperience(prevExperience => {
    return [
      ...prevExperience,
      {
        companyName: companyName,
        location: location,
        startDate: startDate,
        endDate: endDate,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        id: Math.random().toString(),
      }
    ]
  })
}

function deleteExp(event, expId) {
  event.stopPropagation();
  setExperience(oldExperience => oldExperience.filter(exp => exp.id !== expId) )
}

const [isExpEditing, setIsExpEditing] = React.useState(true)

function handleExpEdit() {
  setIsExpEditing(isExpEditing => !isExpEditing)
}

return (
  <div className="experience">
  <div className="experience-row">
    <h2>Experience</h2>
    <button className="edit-button" onClick={handleExpEdit}>
      <i className="fa-solid fa-pen-to-square"></i>
    </button>
  </div>
  {!isExpEditing && (
    <AddExperience
      onSaveExperienceData={addExpHandler}
      onHandleExp={handleExpEdit}
    />
  )}
  {isExpEditing && (
    <ExperienceList
      experience={experience}
      onDeleteExp={deleteExp}
    />
  )}
</div>
)

}

