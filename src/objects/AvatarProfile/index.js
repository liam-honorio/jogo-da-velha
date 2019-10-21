import React from 'react';
import './styles.css'

const AvatarProfile = ({ src, alt }) => (
  <img src={src} alt={alt} className="avatar-profile"/>
);

export default AvatarProfile;