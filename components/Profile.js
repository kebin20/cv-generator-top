import React from 'react';

import Name from './Sidebar/Name/Name';
import Contact from './Sidebar/Contact/Contact';
import Socials from './Sidebar/Socials/Socials';

export default function Profile(props) {
  return (
    <div className="sidebar">
      <Name />
      <Contact />
      <Socials />
    </div>
  );
}
