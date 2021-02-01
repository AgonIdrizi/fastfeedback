import React from 'react';
import Link from 'next/link';
import Logo from '@/components/UI/Icons/Logo';
import Avatar from '@/components/UI/Avatar/Avatar';
import Button, { BUTTON_CLASS_TYPES } from './UI/Button/Button';
import { useAuth } from '@/lib/auth';

const Header = () => {
  const { user, signout } = useAuth();
  return (
    <div className="w-full bg-white h-60px mb-20">
      <header className=" flex justify-between items-center max-w-1250px pl-8 pr-8 mr-auto ml-auto p-4  ">
        <div className="headers-logo-links flex gap-6">
          <Link href="/" passHref>
            <Logo h="h-8" w="w-8" />
          </Link>
          <Link href="/dashboard" passHref>
            <span className="mt-2 cursor-pointer hover:underline">Sites</span>
          </Link>
          <Link href="/feedback" passHref>
            <span className="mt-2 cursor-pointer hover:underline">
              Feedback
            </span>
          </Link>
        </div>
        <div className="avatar flex">
          {user && (
            <Button
              btnClassType={BUTTON_CLASS_TYPES.primary}
              onClick={() => signout()}
            >
              Log Out
            </Button>
          )}
          <div>
            <Avatar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
