import React, { useState } from 'react';
import { AppProvider } from './store';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { AdminPanel } from './components/AdminPanel';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'home' && (
        <>
          <Hero />
          <Experience />
          <Skills />
        </>
      )}
      {activeTab === 'experience' && <Experience />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'admin' && <AdminPanel />}
    </Layout>
  );
}

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;