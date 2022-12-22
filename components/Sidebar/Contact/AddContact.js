import React from 'react';

export default function ContactForm(props) {
  const [enteredPhoneNumber, setEnteredPhoneNumber] =
    React.useState('012-345-6789');
  const [enteredEmail, setEnteredEmail] = React.useState('johndoe@cv.com');
  const [enteredLinkedIn, setEnteredLinkedIn] = React.useState(
    'johnlinkedinprofile'
  );

  function phoneNumberChangeHandler(e) {
    setEnteredPhoneNumber(e.target.value);
  }

  function emailChangeHandler(e) {
    setEnteredEmail(e.target.value);
  }

  function linkedInChangeHandler(e) {
    setEnteredLinkedIn(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const contactData = {
      phoneNumber: enteredPhoneNumber,
      email: enteredEmail,
      linkedIn: enteredLinkedIn,
    };

    props.onHandleContactEdit();
    props.onSaveContactData(contactData);
    setEnteredPhoneNumber('');
    setEnteredEmail('');
    setEnteredLinkedIn('');
  }

  return (
    <form onSubmit={submitHandler} action="#">
      <div className="contact-form">
        <label htmlFor="contact-form">Contact details:</label>
        <input
          type="tel"
          name="phoneNumber"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="phone-number"
          placeholder="Phone number"
          value={enteredPhoneNumber}
          onChange={phoneNumberChangeHandler}
          aria-label="phone number"
          required
        />
        <input
          type="email"
          name="email"
          className="email"
          placeholder="Enter your email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          required
        />
        <input
          type="text"
          name="linkedIn"
          className="linkedin"
          placeholder="Enter your LinkedIn profile"
          value={enteredLinkedIn}
          onChange={linkedInChangeHandler}
          required
        />
        <button type="submit" className="save-btn">Save</button>
        <button type="button" className="cancel-btn" onClick={props.onHandleContactEdit}>
          Cancel
        </button>
      </div>
    </form>
  );
}
