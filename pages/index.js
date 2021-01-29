import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import Button, { BUTTON_CLASS_TYPES } from '@/components/UI/Button/Button';

import Logo from '@/components/UI/Icons/Logo';

export default function Home() {
  const auth = useAuth();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
              window.location.href = "/dashboard"
            }
          `
          }}
        />
        <title>Fast Feedback</title>
      </Head>
      <Logo />
      {auth.user ? (
        <>
          <p className="text-gray-600 max-w-xs ">
            <span className="font-bold inline">Fast feedback</span>
            {` It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in. `}
          </p>
          <Link href="/dashboard" passHref>
            <Button btnClassType={BUTTON_CLASS_TYPES.secondaryButton}>
              View Dashboard
            </Button>
          </Link>
        </>
      ) : (
        <Button
          btnClassType={BUTTON_CLASS_TYPES.secondaryButton}
          onClick={(e) => auth.signinWithGithub()}
        >
          Sign In
        </Button>
      )}
    </main>
  );
}
