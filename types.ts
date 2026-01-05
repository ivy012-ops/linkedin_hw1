export type Language = 'en' | 'zh';

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
}

export interface SkillItem {
  name: string;
  category: 'Tech' | 'Leadership' | 'Language' | 'Certification';
  level: number; // 0-100 for chart
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  summary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
}

export interface AppState {
  profile: ProfileData;
  setProfile: (data: ProfileData) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}