import React from 'react';

export default function Social(props) {
  const [enteredSocialName, setEnteredSocialName] = React.useState('');
  const [enteredSocialUrl, setEnteredSocialUrl] = React.useState('');

  function socialNameChangeHandler(e) {
    setEnteredSocialName(e.target.value);
  }

  function socialUrlChangeHandler(e) {
    setEnteredSocialUrl(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const socialsData = {
      socialsName: enteredSocialName,
      socialsUrl: enteredSocialUrl,
    };

    props.onHandleSocials();
    props.onSaveSocialsData(socialsData);
    setEnteredSocialName('');
    setEnteredSocialUrl('');
  }

  console.log(enteredSocialName, enteredSocialUrl);

  return (
    <form onSubmit={submitHandler} action="#">
      <div className="social-form">
        <label htmlFor="social-form-name">Social Media/Website:</label>
        <input
          type="text"
          name="social-name"
          className="social-name"
          placeholder="instagram"
          aria-label="website for social media"
          value={enteredSocialName}
          onChange={socialNameChangeHandler}
          required
        />
        <label htmlFor="social-form-url">URL:</label>
        <input
          type="text"
          name="social-url"
          className="social-url"
          placeholder="@imaginarygram"
          aria-label="url link for socials"
          value={enteredSocialUrl}
          onChange={socialUrlChangeHandler}
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={props.onHandleSocials}>
          Cancel
        </button>
      </div>
    </form>
  );
}
