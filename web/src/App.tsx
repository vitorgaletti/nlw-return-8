import { AuthGoogleProvider } from './contexts/authGoogle';
import { AppRoutes } from './routes/routes';

export function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
}
