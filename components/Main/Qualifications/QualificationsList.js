import React from 'react';

export default function QualificationsList(props) {
  return (
    <div>
      <ul className="qualifications-list">
        {props.qualifications.map((qualification) => (
          <li key={qualification.id} className="qualification-item">
            <div className="qualification-title">
              <h3>{qualification.qualName}</h3>
              <button
                className="trash-btn"
                onClick={(event) => props.onDeleteQual(event, qualification.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            <div className="qualification-content">
              <span>{qualification.orgName}</span>
              <span> Date Issued: {qualification.date}</span>
              <span>{qualification.authNumber}</span>
              <span>{qualification.authUrl}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
