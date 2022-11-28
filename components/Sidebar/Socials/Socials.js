import React from 'react';

import AddSocials from './AddSocials';
import SocialList from './SocialList';

import './Socials.css';

export default function Socials(props) {
  const [socials, setSocials] = React.useState([
    {
      socialsName: 'Instagram',
      socialsUrl: '@mygramss',
      id: '',
    },
  ]);

  function addSocialsHandler(socialsData) {
    const { socialsName, socialsUrl } = socialsData;
    setSocials((prevSocials) => {
      return [
        ...prevSocials,
        {
          socialsName: socialsName,
          socialsUrl: socialsUrl,
          id: Math.random().toString(),
        },
      ];
    });
  }

  function deleteSocials(event, socialsId) {
    event.stopPropagation();
    setSocials((oldSocials) =>
      oldSocials.filter((social) => social.id !== socialsId)
    );
  }

  const [isSocialsEditing, setIsSocialsEditing] = React.useState(true);

  function handleSocialsEdit() {
    setIsSocialsEditing((isSocialsEditing) => !isSocialsEditing);
  }

  return (
    <div className="Socials">
      <div className="socials-row">
        <h3>Socials</h3>
        <button className="edit-button" onClick={handleSocialsEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      {!isSocialsEditing && (
        <AddSocials
          onSaveSocialsData={addSocialsHandler}
          onHandleSocials={handleSocialsEdit}
        />
      )}
      {isSocialsEditing && (
        <SocialList socials={socials} onDeleteSocials={deleteSocials} />
      )}
    </div>
  );
}
