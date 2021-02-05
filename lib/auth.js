import React, { useEffect, useState, useContext, createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import firebase from '@/lib/firebase';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      console.log('rawUser', rawUser);
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;
      createUser(user.uid, userWithoutToken);
      setUser(user);
      cookie.set('fast-feedback-auth', true, {
        expires: 1
      });

      return user;
    } else {
      Router.push('/');
      setUser(false);
      cookie.remove('fast-feedback-auth');

      return false;
    }
  };

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response);
        Router.push('/dashboard');
      });
  };

  const signinWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response);
        Router.push('/dashboard');
      });
  };

  const signout = () => {
    Router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signinWithGoogle,
    signout
  };
}

const formatUser = ({ user }) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.ya,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL
  };
};
