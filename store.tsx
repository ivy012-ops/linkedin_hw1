import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppState, ProfileData, Language } from './types';
import { initialProfileData } from './data';

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfileState] = useState<ProfileData>(initialProfileData);
  const [language, setLanguage] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Load from local storage on mount (simulate persistence)
  useEffect(() => {
    const savedData = localStorage.getItem('robin_portfolio_data');
    if (savedData) {
      try {
        setProfileState(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Effect for Dark Mode class on html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const setProfile = (data: ProfileData) => {
    setProfileState(data);
    localStorage.setItem('robin_portfolio_data', JSON.stringify(data));
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <AppContext.Provider value={{ profile, setProfile, language, setLanguage, darkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppStore must be used within an AppProvider');
  }
  return context;
};

// Simple translations helper
export const t = (key: string, lang: Language): string => {
  const dict: Record<string, Record<Language, string>> = {
    'nav.home': { en: 'Home', zh: '首頁' },
    'nav.about': { en: 'About', zh: '關於' },
    'nav.experience': { en: 'Experience', zh: '經歷' },
    'nav.skills': { en: 'Skills', zh: '技能' },
    'nav.admin': { en: 'Admin', zh: '後台' },
    'hero.contact': { en: 'Get in Touch', zh: '聯絡我' },
    'section.about': { en: 'About Me', zh: '關於我' },
    'section.experience': { en: 'Professional Experience', zh: '工作經歷' },
    'section.skills': { en: 'Skills & Certifications', zh: '技能與證照' },
    'section.education': { en: 'Education', zh: '學歷' },
    'admin.title': { en: 'Content Management', zh: '內容管理' },
    'admin.save': { en: 'Save Changes', zh: '儲存變更' },
    'admin.reset': { en: 'Reset to Default', zh: '重置預設' },
    'footer.rights': { en: 'All rights reserved.', zh: '版權所有' }
  };
  return dict[key]?.[lang] || key;
};