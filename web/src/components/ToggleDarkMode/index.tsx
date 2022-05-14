import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../../hooks/useTheme';

export function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="absolute top-2 md:top-5 right-4 md:right-8">
      {theme === 'light' ? (
        <MdDarkMode
          size={30}
          className="cursor-pointer"
          onClick={() => setTheme('dark')}
        ></MdDarkMode>
      ) : (
        <MdLightMode
          size={30}
          className="cursor-pointer text-white"
          onClick={() => setTheme('light')}
        ></MdLightMode>
      )}
    </div>
  );
}
