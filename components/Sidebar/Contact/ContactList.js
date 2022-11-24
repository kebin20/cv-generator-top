import React from 'react';

export default function ContactList(props) {
  return (
    <div className="display-contact-text">
      <div className="contact-row">
        <h3>Contact</h3>
        <button className="edit-button" onClick={props.onHandleContactEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      <p>Phone:{props.contactDetails.phoneNumber}</p>
      <p>Email:{props.contactDetails.email}</p>
      <p>LinkedIn:{props.contactDetails.linkedIn}</p>
    </div>
  );
}
