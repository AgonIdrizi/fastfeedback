import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import Button, { BUTTON_CLASS_TYPES } from '@/components/UI/Button/Button';

import Logo from '@/components/UI/Icons/Logo';

export default function Home() {
  const auth = useAuth();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Logo />
      {auth.user ? (
        <Button
          btnType={BUTTON_CLASS_TYPES.secondaryButton}
          onClick={(e) => auth.signout()}
        >
          Sign out
        </Button>
      ) : (
        <Button
          btnType={BUTTON_CLASS_TYPES.secondaryButton}
          onClick={(e) => auth.signinWithGithub()}
        >
          Sign In
        </Button>
      )}
    </main>
  );
}
