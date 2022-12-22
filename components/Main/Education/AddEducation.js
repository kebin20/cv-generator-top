import React from 'react';

export default function AddEducation(props) {
  const [enteredDegreeName, setEnteredDegreeName] = React.useState('');
  const [enteredUniName, setEnteredUniName] = React.useState('');
  const [enteredUniLocationName, setEnteredLocationName] = React.useState('');
  const [enteredGradDate, setEnteredGradDate] = React.useState('');

  function degreeNameChangeHandler(e) {
    setEnteredDegreeName(e.target.value);
  }

  function uniNameChangeHandler(e) {
    setEnteredUniName(e.target.value);
  }

  function uniNameChangeHandler(e) {
    setEnteredLocationName(e.target.value);
  }

  function gradDateChangeHandler(e) {
    setEnteredGradDate(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const educationData = {
      degreeName: enteredDegreeName,
      uniName: enteredUniName,
      uniLocation: enteredUniLocationName,
      gradDate: enteredGradDate,
    };

    props.onHandleEdu();
    props.onSaveEducationData(educationData);
    setEnteredDegreeName('');
    setEnteredUniName('');
    setEnteredLocationName('');
    setEnteredGradDate('');
  }

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

        <label htmlFor="uni-name">University:</label>
        <input
          type="text"
          name="uni-name"
          className="uni__input__name"
          placeholder="Harvard University"
          aria-label="uni name input field"
          value={enteredUniName}
          onChange={uniNameChangeHandler}
          required
        />
        <label htmlFor="uni-location">Location:</label>
        <input
          type="text"
          name="uni-location"
          className="uni__input__location"
          placeholder="ABC Street"
          aria-label="uni input location"
          value={enteredUniLocationName}
          onChange={uniNameChangeHandler}
          required
        />
        <label htmlFor="grad-date">Start Date:</label>
        <input
          type="date"
          name="grad-date"
          className="grad__start-date"
          placeholder="20-03-2020"
          aria-label="graduation date input field"
          value={enteredGradDate}
          onChange={gradDateChangeHandler}
          required
        />
        <button type="submit" className="save-btn">Save</button>
        <button type="button" className="cancel-btn" onClick={props.onHandleExp}>
          Cancel
        </button>
      </div>
    </form>
  );
}
