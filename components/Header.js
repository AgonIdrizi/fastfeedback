import React from 'react';
import Logo from '@/components/UI/Icons/Logo';
import Avatar from '@/components/UI/Avatar/Avatar';

const Header = () => {
  return (
    <div className="w-full bg-white h-60px mb-20">
      <header className=" flex justify-between items-center max-w-1250px pl-8 pr-8 mr-auto ml-auto p-4  ">
        <div className="headers-logo-links flex gap-6">
          <Logo h="h-8" w="w-8" />
          <button>Sites</button>
          <button>Feedback</button>
        </div>
        <div className="avatar">
          <div>
            <Avatar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
