import { Leaf, ArrowRight, Sun, Moon } from 'lucide-react';

type Page = 'home' | 'activity1' | 'activity2' | 'activity3';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function HomePage({ onNavigate, isDarkMode, onToggleTheme }: HomePageProps) {
  const activities = [
    {
      id: 'activity1' as Page,
      title: 'Biogas System',
      subtitle: '100-Cattle Dairy Farm',
      description: 'Converting dairy manure into clean energy through mesophilic anaerobic digestion',
      color: 'from-emerald-500 to-teal-600',
      delay: 'delay-100',
    },
    {
      id: 'activity2' as Page,
      title: 'Hybrid Solar + Wind',
      subtitle: 'Rural Health Clinic',
      description: 'Blending solar PV and wind power with battery storage for reliable 24/7 energy',
      color: 'from-amber-500 to-orange-600',
      delay: 'delay-200',
    },
    {
      id: 'activity3' as Page,
      title: 'Geothermal Power',
      subtitle: 'Hot-Water Wells',
      description: 'Converting geothermal energy through flash steam and binary ORC systems',
      color: 'from-red-500 to-rose-600',
      delay: 'delay-300',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse dark:bg-primary-500/5" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000 dark:bg-secondary-500/5" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-500 dark:bg-accent-500/5" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <header className="text-center mb-20 animate-fade-in-down">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full animate-pulse" />
                <Leaf className="w-16 h-16 text-primary-600 relative animate-float" strokeWidth={1.5} />
              </div>
            </div>
            <button
              onClick={onToggleTheme}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200/50 hover:border-primary-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/20 dark:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              ) : (
                <Moon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              )}
            </button>
          </div>
          <h1 className="text-6xl font-bold text-primary-900 dark:text-primary-100 mb-4 tracking-tight">
            Clean & Green Energy
          </h1>
          <p className="text-2xl text-neutral-700 dark:text-neutral-300 font-light">Portfolio By Shivam Mittal (RA2311003011700)
            <br/> C. Tech.</p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto" />
        </header>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">Explore Sustainable Solutions</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Discover innovative renewable energy systems designed for real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`group animate-fade-in-up ${activity.delay}`}
              >
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-200/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-500/20 dark:bg-gray-800/80 dark:border-gray-600/50 dark:hover:border-gray-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative p-8 h-full flex flex-col">
                    <div className="flex-1">
                      <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${activity.color} bg-opacity-20 text-sm font-semibold text-white mb-4`}>
                        Activity {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
                        {activity.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
                        {activity.subtitle}
                      </p>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate(activity.id)}
                      className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/30"
                    >
                      <span className="font-semibold">Explore</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="text-center py-8 animate-fade-in-up delay-500">
          <div className="inline-block px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200/50 dark:bg-gray-800/80 dark:border-gray-600/50">
            <p className="text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold text-primary-600 dark:text-primary-400">Shivam Mittal</span> — Clean and Green Energy Portfolio © 2025
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
