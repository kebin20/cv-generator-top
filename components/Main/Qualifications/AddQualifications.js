import React from 'react';

export default function AddQualifications(props) {
  const [enteredQualName, setEnteredQualName] = React.useState('');
  const [enteredOrgName, setEnteredOrgName] = React.useState('');
  const [enteredDate, setEnteredDate] = React.useState('');
  const [enteredAuthNo, setEnteredAuthNo] = React.useState('');
  const [enteredAuthUrl, setEnteredAuthUrl] = React.useState('');

  function qualNameChangeHandler(e) {
    setEnteredQualName(e.target.value);
  }

  function orgNameChangeHandler(e) {
    setEnteredOrgName(e.target.value);
  }

  function dateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }

  function authNoChangeHandler(e) {
    setEnteredAuthNo(e.target.value);
  }

  function authUrlChangeHandler(e) {
    setEnteredAuthUrl(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const qualificationData = {
      qualName: enteredQualName,
      orgName: enteredOrgName,
      date: enteredDate,
      authNumber: enteredAuthNo,
      authUrl: enteredAuthUrl,
    };

    props.onHandleQual();
    props.onSaveQualificationsData(qualificationData);
    setEnteredQualName('');
    setEnteredOrgName('');
    setEnteredDate('');
    setEnteredAuthNo('');
    setEnteredAuthUrl('');
  }

  return (
    <form onSubmit={submitHandler} action="#">
      <div className="qualifications-form">
        <label htmlFor="qualifications__label">Qualifications</label>
        <input
          type="text"
          name="qualification-name"
          className="qualifications__input__name"
          placeholder="Technology Certified Certificate"
          aria-label="certification name input field"
          value={enteredQualName}
          onChange={qualNameChangeHandler}
          required
        />
        <label htmlFor="qualifications__organization">Organization:</label>
        <input
          type="text"
          name="qualification-organization"
          className="qualifications__input__organization"
          placeholder="Technology Ltd"
          aria-label="organization name input field"
          value={enteredOrgName}
          onChange={orgNameChangeHandler}
          required
        />
        <label htmlFor="qualifications__date-issued">Date Issued:</label>
        <input
          type="date"
          name="qualification-issue-date"
          className="qualifications__input__issue-date"
          aria-label="issue date input field"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
        <label htmlFor="qualifications__authentication-number">
          Authentication Number:
        </label>
        <input
          type="text"
          name="qualification-authentication"
          className="qualifications__input__authentication-number"
          aria-label="authentication number input field"
          value={enteredAuthNo}
          onChange={authNoChangeHandler}
        />
        <label htmlFor="qualifications__url">URL:</label>
        <input
          type="text"
          name="qualification-authentication-url"
          className="qualifications__input__authentication-url"
          aria-label="authentication url input field"
          value={enteredAuthUrl}
          onChange={authUrlChangeHandler}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={props.onHandleQual}>
          Cancel
        </button>
      </div>
    </form>
  );
}
