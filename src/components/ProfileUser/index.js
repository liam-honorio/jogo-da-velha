import React from 'react';
import './styles.css'
import Profile from '../../img/profile.jpg'
import GitHub from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Instagram from '../../img/instagram.png'


import AvatarProfile from '../../objects/AvatarProfile';
import IconSocial from '../../objects/IconSocial';


const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="Avatar do William" />
    </dd>
    <dt className="title">William Honorio</dt>
    <dd className="description">Migrei de palhaço para Dev. Front-End/UX e agora eu trabalho como streamer de código, instrutor e dev na CollabCode</dd>
    <dd className="socials">
      <IconSocial action="https://github.com/liam-honorio/" src={GitHub} alt="Logo do GitHub" />
      <IconSocial action="https://www.linkedin.com/in/william-honorio-5b7984124/" src={Linkedin} alt="Logo do Linkedin" />
      <IconSocial action="https://www.facebook.com/liam.honorio" src={Facebook} alt="Logo do Facebook" />
      <IconSocial action="https://twitter.com/lost_box" src={Twitter} alt="Logo do Twitter" />
      <IconSocial action="https://www.instagram.com/lost_box/" src={Instagram} alt="Logo do Instagram" />
    </dd>
  </dl>
);

export default ProfileUser;