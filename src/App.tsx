import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Activity1 from './pages/Activity1';
import Activity2 from './pages/Activity2';
import Activity3 from './pages/Activity3';

type Page = 'home' | 'activity1' | 'activity2' | 'activity3';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-background-shift flex flex-col items-center justify-center z-50 overflow-hidden">
        {/* Floating Eco Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 text-4xl animate-eco-float delay-100">🌿</div>
          <div className="absolute top-32 right-32 text-3xl animate-eco-float delay-300">🌱</div>
          <div className="absolute bottom-40 left-40 text-5xl animate-eco-float delay-500">🌳</div>
          <div className="absolute bottom-20 right-20 text-2xl animate-eco-float delay-1000">🍃</div>
          <div className="absolute top-1/2 left-10 text-3xl animate-leaf-fall delay-200">🍂</div>
          <div className="absolute top-1/3 right-10 text-4xl animate-leaf-fall delay-700">🌸</div>
        </div>

        {/* Multi-layered Spinner */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse-glow" />
          <div className="w-24 h-24 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-multi-spin" />
          <div className="absolute inset-2 border-2 border-emerald-400/50 border-t-transparent rounded-full animate-multi-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute inset-4 border-2 border-emerald-300/70 border-t-transparent rounded-full animate-multi-spin" style={{ animationDuration: '1s' }} />
          <div className="absolute inset-6 bg-emerald-500/10 rounded-full animate-pulse" />
        </div>

        {/* Animated Text */}
        <h1 className="text-4xl font-bold text-emerald-400 mb-4 animate-fade-in-down animate-text-shimmer">
          Welcome to an Eco-friendly zone
        </h1>
        <p className="text-xl text-slate-300 animate-fade-in-up delay-300">
          Made by Shivam Mittal
        </p>

        {/* Enhanced Progress Dots */}
        <div className="mt-8 flex space-x-3">
          <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-4 h-4 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
          <div className="w-4 h-4 bg-emerald-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
          <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.45s' }} />
        </div>

        {/* Loading Percentage */}
        <div className="mt-6 text-sm text-slate-400 animate-fade-in delay-1000">
          Loading... 100%
        </div>
      </div>
    );
  }

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
