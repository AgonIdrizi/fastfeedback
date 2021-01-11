import React from 'react';
import { useAuth } from '@/lib/auth';

const Avatar = () => {
  const { user } = useAuth();
  return (
    <a href="#" className="block relative">
      <img
        alt="profil"
        src={user?.photoURL}
        className="mx-auto rounded-full h-8 w-8 "
      />
    </a>
  );
};

export default Avatar;
