import { NavLink } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { ChatTeardropDots } from 'phosphor-react';
import { ToggleDarkMode } from '../ToggleDarkMode';

export function Header() {
  return (
    <div className="w-full h-[4.5rem] bg-zinc-200 dark:bg-zinc-800 px-10 md:px-40 flex items-center justify-around md:justify-between flex-wrap">
      <NavLink to="/">
        <div className="w-40 h-10 flex gap-3 items-center justify-center  bg-brand-300 rounded-2xl">
          <ChatTeardropDots width={24} height={24} color="white" />
          <span className="text-base text-center text-white ">Feedback</span>
        </div>
      </NavLink>
      <div>
        <Navbar />
        <ToggleDarkMode />
      </div>
    </div>
  );
}
