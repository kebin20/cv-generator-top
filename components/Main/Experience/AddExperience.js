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

    props.onHandleExp();
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
        <label htmlFor="company-name">Company Name:</label>
        <input
          type="text"
          name="company-name"
          className="company__input__name"
          placeholder="ABC Ltd"
          aria-label="company name input field"
          value={enteredCompanyName}
          onChange={companyNameChangeHandler}
          required
        />
        <label htmlFor="company-location">Location:</label>
        <input
          type="text"
          name="company-location"
          className="company__input__location"
          placeholder="ABC Street"
          aria-label="company name input location"
          value={enteredLocation}
          onChange={locationChangeHandler}
          required
        />
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          name="start-date"
          className="company__input__start-date"
          placeholder="20-03-2020"
          aria-label="start date input field"
          value={enteredJobStartDate}
          onChange={jobStartDateChangeHandler}
          required
        />
        <label htmlFor="start-date">End Date:</label>
        <input
          type="date"
          name="end-date"
          className="company__input__end-date"
          placeholder="25-05-2021"
          aria-label="end date input field"
          value={enteredJobEndDate}
          onChange={jobEndDateChangeHandler}
          required
        />
        <label htmlFor="company-name">Job Title:</label>
        <input
          type="text"
          name="job-title"
          className="company__input__job-title"
          placeholder="Software Developer"
          aria-label="job title input field"
          value={enteredJobTitle}
          onChange={jobTitleChangeHandler}
          required
        />
        <label htmlFor="company-name">Job Description:</label>
        <textarea
          type="text"
          name="job-description"
          className="company__input__job-description"
          placeholder="Did random things, which increased sales"
          aria-label="job-description input field"
          value={enteredJobDesc}
          onChange={jobDescChangeHandler}
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={props.onHandleExp}>
          Cancel
        </button>
      </div>
    </form>
  );
}
