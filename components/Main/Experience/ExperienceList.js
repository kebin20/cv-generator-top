import React from 'react';

export default function ExperienceList(props) {
  return (
    <div>
      <ul className="experience-list">
        {props.experience.map((exp) => (
          <li key={exp.id} className="experience-item">
            <div className="experience-title">
              <h3>{exp.companyName}</h3>
              <button
                className="trash-btn"
                onClick={(event) => props.onDeleteExp(event, exp.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            <div className="experience-content">
              <span>{exp.location}</span>
              <span>
                {' '}
                Date: {exp.startDate} - {exp.endDate}{' '}
              </span>
              <span>{exp.jobTitle}</span>
              <p>{exp.jobDescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
