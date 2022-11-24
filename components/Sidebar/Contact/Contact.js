import React from 'react';

import AddContact from './AddContact';
import ContactList from './ContactList';

export default function Contact(props) {
  const [contactDetails, setContactDetails] = React.useState({
    phoneNumber: '01658789',
    email: 'johndoe@cv.com',
    linkedIn: 'johnlinkedinprofile',
  });

  const saveContactDataHandler = (enteredContactData) => {
    setContactDetails(enteredContactData);
  };

  const [isContactEditing, setIsContactEditing] = React.useState(true);

  function handleContactEdit() {
    setIsContactEditing((isContactEditing) => !isContactEditing);
  }

  return (
    <div className="Contact">
      {!isContactEditing && (
        <AddContact
          onSaveContactData={saveContactDataHandler}
          onHandleContactEdit={handleContactEdit}
        />
      )}
      {isContactEditing && (
        <ContactList
          contactDetails={contactDetails}
          onHandleContactEdit={handleContactEdit}
        />
      )}
    </div>
  );
}
