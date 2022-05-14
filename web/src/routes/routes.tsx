import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { useAuthGoogle } from '../hooks/useAuthGoogle';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function AppRoutes() {
  const { user } = useAuthGoogle();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
