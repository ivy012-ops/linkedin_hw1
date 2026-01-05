import React from 'react';
import { useAppStore, t } from '../store';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const { profile, language } = useAppStore();

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          {t('section.experience', language)}
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-700"></div>

          <div className="space-y-12">
            {profile.experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-4 border-primary-500 z-10 hidden md:flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 p-4">
                  <div className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
                       <span className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                         <Briefcase size={14} className="mr-1" /> {exp.company}
                       </span>
                       <span className="flex items-center">
                         <Calendar size={14} className="mr-1" /> {exp.period}
                       </span>
                       <span className="flex items-center">
                         <MapPin size={14} className="mr-1" /> {exp.location}
                       </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          <span className="mt-1.5 mr-2 min-w-[6px] h-[6px] rounded-full bg-slate-400 dark:bg-slate-500"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section embedded */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t('section.education', language)}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {profile.education.map((edu, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.degree}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{edu.field}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};