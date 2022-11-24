import React from 'react';

import AddQualifications from './AddQualifications';

export default function AddQualifications(props) {
  const [qualification, setQualification] = React.useState([
    {
      qualName: 'Tech Certificate',
      orgName: 'Tech Ltd',
      date: '2018-09-21',
      authNumber: '123NUM345',
      authUrl: 'www.techltd.com/qualno',
    },
  ]);

return (
  <div className="Qualifications">
    
  </div>
)

}