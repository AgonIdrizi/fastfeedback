import Head from 'next/head';
import { useAuth } from '@/lib/auth';

import Logo from '@/components/Icons/Logo';

import styles from '@/styles/Home.module.css';

export default function Home() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <main>
        <Logo />
        <h1 className="m-0 text-5xl">Fast feedback</h1>
        <p className="text-2xl">
          Current user: <code>{auth.user ? auth.user.email : null}</code>
        </p>
        {auth.user ? (
          <button
            className="bg-red-300 rounded-md p-2"
            onClick={(e) => auth.signout()}
          >
            Sign out
          </button>
        ) : (
          <button
            className="bg-red-300 rounded-md p-2"
            onClick={(e) => auth.signinWithGithub()}
          >
            Sign In
          </button>
        )}
      </main>
    </div>
  );
}
