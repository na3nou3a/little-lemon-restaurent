import React from 'react';
import { Main, ProfileSection } from '../components';

const ProfilePage = (props) => {
  return (
    <Main>
      <ProfileSection {...props} />
    </Main>
  );
};

export default ProfilePage;
