import React from 'react';
import { useAppStore, t } from '../store';
import { Mail, MapPin, Linkedin, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile, language } = useAppStore();

  return (
    <div className="relative bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hi, I'm {profile.name}</span>
            </h1>
            <h2 className="mt-3 text-xl text-primary-600 dark:text-primary-400 font-semibold sm:mt-5 sm:text-2xl lg:text-3xl">
              {profile.title}
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 justify-center lg:justify-start">
              <span className="flex items-center"><MapPin size={18} className="mr-1" /> {profile.location}</span>
              <span className="flex items-center"><Mail size={18} className="mr-1" /> {profile.email}</span>
            </div>
            
            <p className="mt-6 text-base text-slate-600 dark:text-slate-300 sm:text-lg md:mt-8 md:text-xl leading-relaxed max-w-3xl">
              {profile.summary}
            </p>

            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all"
              >
                <Linkedin className="mr-2" size={20} /> LinkedIn
              </a>
              <button
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 md:py-4 md:text-lg md:px-10 transition-all"
              >
                <Mail className="mr-2" size={20} /> {t('hero.contact', language)}
              </button>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-4 flex justify-center lg:justify-end relative">
             <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                {/* Placeholder image using picsum as requested */}
                <img 
                  src="https://picsum.photos/400/400?grayscale" 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg max-w-[150px]">
                <p className="text-2xl font-bold text-primary-600">20+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Years Experience</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};