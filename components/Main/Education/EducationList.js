import React from 'react';

export default function EducationList(props) {
  return (
    <div>
      <ul className="education-list">
        {props.education.map((edu) => (
          <li key={edu.id} className="education-item">
            <div className="education-title">
              <h3>{edu.degreeName}</h3>
              <button
                className="trash-btn"
                onClick={(event) => props.onDeleteEdu(event, edu.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            <div className="education-content">
              <span>{edu.uniName}</span>
              <span>{edu.uniLocation}</span>
              <span>{edu.gradDate}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
