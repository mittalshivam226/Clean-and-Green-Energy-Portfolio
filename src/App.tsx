import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Activity1 from './pages/Activity1';
import Activity2 from './pages/Activity2';
import Activity3 from './pages/Activity3';

type Page = 'home' | 'activity1' | 'activity2' | 'activity3';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: Page) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = isTransitioning ? 'hidden' : 'auto';
  }, [isTransitioning]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'activity1' && <Activity1 onNavigate={navigateTo} />}
        {currentPage === 'activity2' && <Activity2 onNavigate={navigateTo} />}
        {currentPage === 'activity3' && <Activity3 onNavigate={navigateTo} />}
      </div>

      {isTransitioning && (
        <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

export default App;
