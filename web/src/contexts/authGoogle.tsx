import { useState, createContext, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../services/firebaseConfig';
import { Navigate } from 'react-router-dom';

import { User } from 'firebase/auth';

type AuthGoogleProps = {
  children: React.ReactNode;
};

export type AuthGoogleContextProps = {
  user: User;
  signed: boolean;
  signInGoogle: () => void;
  signOut: () => void;
};

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext<AuthGoogleContextProps>(
  {} as AuthGoogleContextProps
);

export const AuthGoogleProvider = ({ children }: AuthGoogleProps) => {
  const auth = getAuth(app);
  const [user, setUser] = useState<User | any>(null);

  useEffect(() => {
    function loadStoreAuth() {
      const sessionToken = sessionStorage.getItem('@AuthFirebase:token');
      const sessionUser = sessionStorage.getItem('@AuthFirebase:user');
      if (sessionToken && sessionUser) {
        setUser(sessionUser);
      }
    }
    loadStoreAuth();
  }, []);

  function signInGoogle() {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken || '';
        const user = result.user;
        setUser(user);
        sessionStorage.setItem('@AuthFirebase:token', token);
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user));
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
    return <Navigate to="/" />;
  }

  return (
    <AuthGoogleContext.Provider
      value={{
        signed: !!user,
        user,
        signInGoogle,
        signOut
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
