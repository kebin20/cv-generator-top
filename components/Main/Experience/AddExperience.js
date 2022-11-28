import React from 'react';

export default function AddExperience(props) {
  const [enteredCompanyName, setEnteredCompanyName] = React.useState('');
  const [enteredLocation, setEnteredLocation] = React.useState('');
  const [enteredJobStartDate, setEnteredJobStartDate] = React.useState('');
  const [enteredJobEndDate, setEnteredJobEndDate] = React.useState('');
  const [enteredJobTitle, setEnteredJobTitle] = React.useState('');
  const [enteredJobDesc, setEnteredJobDesc] = React.useState('');

  function companyNameChangeHandler(e) {
    setEnteredCompanyName(e.target.value);
  }

  function locationChangeHandler(e) {
    setEnteredLocation(e.target.value);
  }

  function jobStartDateChangeHandler(e) {
    setEnteredJobStartDate(e.target.value);
  }

  function jobEndDateChangeHandler(e) {
    setEnteredJobEndDate(e.target.value);
  }

  function jobTitleChangeHandler(e) {
    setEnteredJobTitle(e.target.value);
  }

  function jobDescChangeHandler(e) {
    setEnteredJobDesc(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const experienceData = {
      companyName: enteredCompanyName,
      location: enteredLocation,
      startDate: enteredJobStartDate,
      endDate: enteredJobEndDate,
      jobTitle: enteredJobTitle,
      jobDescription: enteredJobDesc,
    };

    props.onHandleExperience();
    props.onSaveExperienceData(experienceData);
    setEnteredCompanyName('');
    setEnteredLocation('');
    setEnteredJobStartDate('');
    setEnteredJobEndDate('');
    setEnteredJobTitle('');
    setEnteredJobDesc('');
  }

  return (
    <form onSubmit={submitHandler} action="#">
      <div className="experience-form">
        <label htmlFor="experience__label">Experience</label>
      </div>
    </form>
  );
}
