import React from 'react';
import Qualifications from './Main/Qualifications/Qualifications';
import Experience from './Main/Experience/Experience';
import Education from './Main/Education/Education';
import './Main.css';

export default function CV() {
  return (
    <div className="main">
      <Qualifications />
      <Experience />
      <Education />
    </div>
  );
}
