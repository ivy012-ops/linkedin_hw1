import React, { useState } from 'react';
import { useAppStore, t } from '../store';
import { initialProfileData } from '../data';
import { Save, RotateCcw, AlertTriangle } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { profile, setProfile, language } = useAppStore();
  // We use a JSON string approach for simplicity in this generated code, 
  // as building a full form for nested arrays (experience/education) is too verbose for this constraint.
  const [jsonInput, setJsonInput] = useState<string>(JSON.stringify(profile, null, 2));
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setProfile(parsed);
      setError(null);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (e) {
      setError("Invalid JSON format. Please check syntax.");
    }
  };

  const handleReset = () => {
    if (confirm("Are you sure? This will reset all data to the original Resume.")) {
      setProfile(initialProfileData);
      setJsonInput(JSON.stringify(initialProfileData, null, 2));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="py-12 bg-slate-100 dark:bg-slate-900 min-h-[80vh] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t('admin.title', language)}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                    Edit the JSON below to update the portfolio content instantly.
                </p>
            </div>
            <div className="flex gap-3">
                <button 
                    onClick={handleReset}
                    className="flex items-center px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 rounded-md transition-colors"
                >
                    <RotateCcw size={16} className="mr-2" />
                    {t('admin.reset', language)}
                </button>
                <button 
                    onClick={handleSave}
                    className="flex items-center px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 rounded-md shadow transition-colors"
                >
                    <Save size={16} className="mr-2" />
                    {t('admin.save', language)}
                </button>
            </div>
          </div>
          
          <div className="p-6">
            {error && (
                <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-md flex items-center">
                    <AlertTriangle size={20} className="mr-2" />
                    {error}
                </div>
            )}
            {success && (
                <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md flex items-center">
                    <Save size={20} className="mr-2" />
                    Changes saved successfully!
                </div>
            )}
            
            <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="w-full h-[600px] font-mono text-sm p-4 bg-slate-900 text-slate-100 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none resize-y"
                spellCheck={false}
            />
          </div>
          
          <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 text-center">
            Changes are saved to your browser's Local Storage.
          </div>
        </div>
      </div>
    </div>
  );
};