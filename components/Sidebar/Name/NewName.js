import React from 'react';

export default function NewName(props) {
  return (
    <div className="display-name-text">
      <h2>
        {props.userName.firstName} {props.userName.lastName}
      </h2>
      <button className="edit-button" onClick={props.onHandleNameEdit}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
  );
}
