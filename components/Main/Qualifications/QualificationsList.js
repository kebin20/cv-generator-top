import React from 'react';

export default function QualificationsList(props) {
  return (
    <div>
      <ul>
        {props.qualifications.map((qualification) => (
          <li key={qualification.id} className="qualification-item">
            {qualification.qualName}
            <button
              className="trash-btn"
              onClick={(event) => props.onDeleteQual(event, qualification.id)}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
            {qualification.orgName}
            Date Issued: {qualification.date}
            {qualification.authNumber}
            {qualification.authUrl}
          </li>
        ))}
      </ul>
    </div>
  );
}
