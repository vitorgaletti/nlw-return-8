import { Navigate, Outlet } from 'react-router-dom';
import { useAuthGoogle } from '../hooks/useAuthGoogle';

export function PrivateRoutes() {
  const { signed } = useAuthGoogle();

  return signed ? <Outlet /> : <Navigate to="/" />;
}
