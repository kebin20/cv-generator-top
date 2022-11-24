import React from 'react';

export default function SocialList(props) {
  return (
    <div>
      <ul className="social-list">
        {props.socials.map((social) => (
          <li key={social.id} className="social-item">
            {social.socialsName}: {social.socialsUrl}
            <button onClick={props.onDeleteSocials}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
