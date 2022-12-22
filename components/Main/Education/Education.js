import React from 'react';

import AddEducation from './AddEducation';
import EducationList from './EducationList';

import './Education.css'

export default function Education(props) {
  const [education, setEducation] = React.useState([
    {
      degreeName: 'Bachelor of Science',
      uniName: 'Harvard University',
      uniLocation: 'Somewhere Fancy Street, Wow Grove',
      gradDate: 'September, 2012',
    },
  ]);

  function addEduHandler(eduData) {
    const { degreeName, uniName, uniLocation, gradDate } = eduData;
    setEducation((prevEdu) => {
      return [
        ...prevEdu,
        {
          degreeName: degreeName,
          uniName: uniName,
          uniLocation: uniLocation,
          gradDate: gradDate,
          id: Math.random().toString(),
        },
      ];
    });
  }

  function deleteEdu(event, eduId) {
    event.stopPropagation();
    setEducation((oldEducation) =>
      oldEducation.filter((edu) => edu.id !== eduId)
    );
  }

  const [isEduEditing, setIsEduEditing] = React.useState(true);

  function handleEduEdit() {
    setIsEduEditing((isEduEditing) => !isEduEditing);
  }

  return (
    <div className="education">
      <div className="education-row">
        <h2>Education</h2>
        <button className="edit-button" onClick={handleEduEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      {!isEduEditing && (
        <AddEducation
          onSaveEducationData={addEduHandler}
          onHandleEdu={handleEduEdit}
        />
      )}
      {isEduEditing && (
        <EducationList education={education} onDeleteEdu={deleteEdu} />
      )}
    </div>
  );
}
