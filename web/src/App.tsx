import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Widget } from './components/Widget';
import { useTheme } from './hooks/useTheme';

export function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
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
      <Widget />
    </>
  );
}
