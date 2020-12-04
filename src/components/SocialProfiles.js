import React from 'react';
import SOCIAL_PROFILES from '../screens/socialProfiles';

const SocialProfile = (props) => {
  const { link, image } = props.socialProfile;

  return (
    <span>
      <a href={link}>
        <img
          className="Social-icons"
          src={image}
          alt='social-profile'
        />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div>
    <h2 className="Connect">Connect with me</h2>
    <div>
      {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => (
        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
      ))}
    </div>
  </div>
);

export default SocialProfiles;
