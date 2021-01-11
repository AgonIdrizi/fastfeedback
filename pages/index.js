import Head from 'next/head';
import { useAuth } from '@/lib/auth';

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
        <button
          className="w-22 mt-4 rounded-md text-base font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 px-4 py-2"
          onClick={(e) => auth.signout()}
        >
          Sign out
        </button>
      ) : (
        <button
          type="button"
          className="w-22 mt-4 rounded-md text-base font-medium  text-gray-500 bg-gray-100 hover:bg-gray-200 px-4 py-2"
          onClick={(e) => auth.signinWithGithub()}
        >
          Sign In
        </button>
      )}
    </main>
  );
}
