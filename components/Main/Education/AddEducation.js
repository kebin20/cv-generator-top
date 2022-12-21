import React from 'react';

export default function AddEducation(props) {
  const [enteredDegreeName, setEnteredDegreeName] = React.useState('');
  const [enteredUniName, setEnteredUniName] = React.useState('');
  const [enteredUniLocationName, setEnteredLocationName] = React.useState('');
  const [enteredGradDate, setEnteredGradDate] = React.useState('');

  return (
    <form onSubmit={submitHandler} action="#">
      <div className="education-form">
      <label htmlFor="degree-name">Degree:</label>
        <input
          type="text"
          name="degree-name"
          className="degree__input__name"
          placeholder="Bachelor of Science"
          aria-label="degree name input field"
          value={enteredDegreeName}
          onChange={degreeNameChangeHandler}
          required
        />

<label htmlFor="university-name">University:</label>
        <input
          type="text"
          name="university-name"
          className="university__input__name"
          placeholder="Harvard University"
          aria-label="university name input field"
          value={enteredUniName}
          onChange={universityNameChangeHandler}
          required
        />
  )
}
