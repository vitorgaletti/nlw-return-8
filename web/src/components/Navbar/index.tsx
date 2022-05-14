import { NavLink } from 'react-router-dom';
import { useAuthGoogle } from '../../hooks/useAuthGoogle';

export function Navbar() {
  const { user, signOut } = useAuthGoogle();

  return (
    <nav className="flex items-center justify-between flex-wrap gap-2">
      <ul className="flex items-center justify-center gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'bg-brand-300 text-white' : ''
            }
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'bg-brand-300 text-white' : ''
              }
            >
              Entrar
            </NavLink>
          </li>
        )}

        {user && (
          <li>
            <button onClick={signOut}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
