import React from 'react';

import AddNewName from './AddNewName';
import NewName from './NewName';

export default function Name(props) {
  const [userName, setUserName] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
  });

  const saveNameDataHandler = (enteredNameData) => {
    setUserName(enteredNameData);
  };

  const [isNameEditing, setIsNameEditing] = React.useState(true);

  function handleNameEdit() {
    setIsNameEditing((isNameEditing) => !isNameEditing);
  }

  return (
    <div className="Name">
      {!isNameEditing && (
        <AddNewName
          onSaveNameData={saveNameDataHandler}
          onHandleNameEdit={handleNameEdit}
        />
      )}
      {isNameEditing && (
        <NewName userName={userName} onHandleNameEdit={handleNameEdit} />
      )}
    </div>
  );
}
