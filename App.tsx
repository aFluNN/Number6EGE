import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import IntroductionView from './views/IntroductionView';
import MethodsView from './views/MethodsView';
import ChooserView from './views/ChooserView';
import ResourcesView from './views/ResourcesView';

export type View = 'intro' | 'methods' | 'chooser' | 'resources';

const viewOrder: View[] = ['intro', 'methods', 'chooser', 'resources'];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('intro');
  const [animationClass, setAnimationClass] = useState('animate-fade-in');

  const handleSetCurrentView = useCallback((newView: View) => {
    const oldIndex = viewOrder.indexOf(currentView);
    const newIndex = viewOrder.indexOf(newView);

    if (oldIndex !== newIndex) {
      if (newIndex > oldIndex) {
        setAnimationClass('animate-slide-in-right');
      } else {
        setAnimationClass('animate-slide-in-left');
      }
    }
    setCurrentView(newView);
  }, [currentView]);

  const renderView = useCallback(() => {
    switch (currentView) {
      case 'intro':
        return <IntroductionView />;
      case 'methods':
        return <MethodsView />;
      case 'chooser':
        return <ChooserView />;
      case 'resources':
        return <ResourcesView />;
      default:
        return <IntroductionView />;
    }
  }, [currentView]);

  return (
    <div className="min-h-screen bg-transparent font-sans">
      <Header currentView={currentView} setCurrentView={handleSetCurrentView} />
      <main className="p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div key={currentView} className={animationClass}>
            {renderView()}
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>Лебедев Андрей (aFluNN)</p>
        <p>Демонстрационный вариант</p>
      </footer>
    </div>
  );
};

export default App;
