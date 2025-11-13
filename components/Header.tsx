import React from 'react';
import type { View } from '../App';
import { GreenTurtleIcon } from './Icons';

interface HeaderProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const NavButton: React.FC<{
  label: string;
  view: View;
  currentView: View;
  onClick: (view: View) => void;
}> = ({ label, view, currentView, onClick }) => {
  const isActive = currentView === view;
  return (
    <button
      onClick={() => onClick(view)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'bg-brand-accent text-white shadow-lg'
          : 'text-gray-300 hover:bg-brand-light/70 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  return (
    <header className="bg-brand-light/70 backdrop-blur-lg shadow-md sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white flex items-center">
              <GreenTurtleIcon className="h-8 w-8 text-brand-accent" />
              <span className="ml-3 text-xl font-bold">Гайд по Задаче 6</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavButton label="Введение" view="intro" currentView={currentView} onClick={setCurrentView} />
              <NavButton label="Методы" view="methods" currentView={currentView} onClick={setCurrentView} />
              <NavButton label="Выбор метода" view="chooser" currentView={currentView} onClick={setCurrentView} />
              <NavButton label="Ресурсы" view="resources" currentView={currentView} onClick={setCurrentView} />
            </div>
          </div>
        </div>
      </nav>
       {/* Mobile nav links */}
       <div className="md:hidden p-2 flex justify-around space-x-1 bg-brand-light/50">
          <NavButton label="Интро" view="intro" currentView={currentView} onClick={setCurrentView} />
          <NavButton label="Методы" view="methods" currentView={currentView} onClick={setCurrentView} />
          <NavButton label="Выбор" view="chooser" currentView={currentView} onClick={setCurrentView} />
          <NavButton label="Код" view="resources" currentView={currentView} onClick={setCurrentView} />
       </div>
    </header>
  );
};

export default Header;