import React from 'react';

export default function NameForm(props) {
  const [enteredFirst, setEnteredFirst] = React.useState('John');
  const [enteredLast, setEnteredLast] = React.useState('Doe');

  function firstNameChangeHandler(e) {
    setEnteredFirst(e.target.value);
  }

  function lastNameChangeHandler(e) {
    setEnteredLast(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const nameData = {
      firstName: enteredFirst,
      lastName: enteredLast,
    };

    props.onSaveNameData(nameData);
    props.onHandleNameEdit();
    setEnteredFirst('');
    setEnteredLast('');
  }

  return (
    <form onSubmit={submitHandler} action="#">
      <div className="name-form">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="firstName"
          className="firstName"
          placeholder="First Name"
          value={enteredFirst}
          onChange={firstNameChangeHandler}
          required
        />
        <input
          type="text"
          name="lastName"
          className="lastName"
          placeholder="Last Name"
          value={enteredLast}
          onChange={lastNameChangeHandler}
          required
        />
        <button type="submit" className="save-btn">Save</button>
        <button type="button" className="cancel-btn" onClick={props.onHandleNameEdit}>
          Cancel
        </button>
      </div>
    </form>
  );
}
