import React from 'react';

import AddQualifications from './AddQualifications';
import QualificationsList from './QualificationsList';

export default function AddQualifications(props) {
  const [qualifications, setQualifications] = React.useState([
    {
      qualName: 'Tech Certificate',
      orgName: 'Tech Ltd',
      date: '2018-09-21',
      authNumber: '123NUM345',
      authUrl: 'www.techltd.com/qualno',
    },
  ]);

  function addQualHandler(qualData) {
    const { qualName, orgName, date, authNumber, authUrl } = qualData;
    setQualifications((prevQual) => {
      return [
        ...prevQual,
        {
          qualName: qualName,
          orgName: orgName,
          date: date,
          authNumber: authNumber,
          authUrl: authUrl,
          id: Math.random().toString(),
        },
      ];
    });
  }

  function deleteQual(event, qualId) {
    event.stopPropagation();
    setQualifications((oldQualifications) =>
      oldQualifications.filter((qual) => qual.id !== qualId)
    );
  }

  const [isQualEditing, setIsQualEditing] = React.useState(true);

  function handleQualEdit() {
    setIsQualEditing((isQualEditing) => !isQualEditing);
  }

  return (
    <div className="Qualifications">
      <div className="qualifications-row">
        <h3>Qualifications</h3>
        <button className="edit-button" onClick={handleQualEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      {!isQualEditing && (
        <AddQualifications
          onSaveQualificationsData={addQualHandler}
          onHandleQual={handleQualEdit}
        />
      )}
      {isQualEditing && (
        <QualificationsList
          qualifications={qualifications}
          onDeleteQual={deleteQual}
        />
      )}
    </div>
  );
}
