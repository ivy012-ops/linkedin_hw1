import React from 'react';
import { useAppStore, t } from '../store';
import { Moon, Sun, Globe, Edit3, Briefcase } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const { darkMode, toggleDarkMode, language, setLanguage, profile } = useAppStore();

  const navItems = [
    { id: 'home', label: t('nav.home', language) },
    { id: 'experience', label: t('nav.experience', language) },
    { id: 'skills', label: t('nav.skills', language) },
    { id: 'admin', label: t('nav.admin', language), icon: <Edit3 size={14} className="inline mr-1" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="bg-primary-600 text-white p-1.5 rounded-lg mr-2">
                <Briefcase size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">{profile.name}</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Switch Language"
              >
                <span className="flex items-center text-xs font-bold">
                  <Globe size={16} className="mr-1" />
                  {language.toUpperCase()}
                </span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Toggle Theme"
              >
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Nav Bar */}
        <div className="md:hidden flex justify-around border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-xs font-medium py-1 px-2 rounded ${
                  activeTab === item.id ? 'text-primary-600' : 'text-slate-500'
                }`}
              >
                {item.label}
              </button>
            ))}
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-8 mt-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. {t('footer.rights', language)}
          </p>
          <div className="flex justify-center space-x-4 mt-4">
             {/* Social placeholders */}
             <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors">LinkedIn</a>
             <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-primary-600 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};