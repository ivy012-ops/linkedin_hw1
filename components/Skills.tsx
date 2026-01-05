import React from 'react';
import { useAppStore, t } from '../store';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const { profile, language, darkMode } = useAppStore();

  const categories = Array.from(new Set(profile.skills.map(s => s.category)));
  const colors = ['#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b'];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-slate-800 p-3 border border-slate-200 dark:border-slate-700 rounded shadow-lg">
          <p className="font-bold text-slate-900 dark:text-white">{label}</p>
          <p className="text-primary-600 dark:text-primary-400">Proficiency: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          {t('section.skills', language)}
        </h2>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="h-80 w-full">
              <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-slate-200 text-center">Top Competencies</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={profile.skills.filter(s => s.level > 80)}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke={darkMode ? '#334155' : '#e2e8f0'} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={150} 
                    tick={{ fill: darkMode ? '#cbd5e1' : '#475569', fontSize: 12 }} 
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                  <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                    {profile.skills.filter(s => s.level > 80).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Badges Layout */}
            <div>
                 <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-slate-200 text-center">All Skills</h3>
                 <div className="grid gap-6">
                    {categories.map((cat, idx) => (
                        <div key={cat} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                                {cat}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {profile.skills.filter(s => s.category === cat).map((skill) => (
                                    <span 
                                        key={skill.name} 
                                        className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium shadow-sm border border-slate-200 dark:border-slate-600"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};