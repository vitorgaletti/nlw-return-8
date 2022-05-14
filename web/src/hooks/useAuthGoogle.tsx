import { useContext } from 'react';
import {
  AuthGoogleContext,
  AuthGoogleContextProps
} from '../contexts/authGoogle';

export function useAuthGoogle(): AuthGoogleContextProps {
  const context = useContext(AuthGoogleContext);

  return context;
}
