import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Analysis from './components/Analysis';
import SoilAI from './components/SoilAI';
import PrescriptionEngine from './components/PrescriptionEngine';
import VoiceAssistant from './components/VoiceAssistant';
import Login from './components/Login';
import Profile from './components/Profile';
import Contact from './components/Contact';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'analysis':
        return <Analysis />;
      case 'soil-ai':
        return <SoilAI />;
      case 'prescriptions':
        return <PrescriptionEngine />;
      case 'voice':
        return <VoiceAssistant />;
      case 'login':
        return <Login onSuccess={() => setActiveTab('dashboard')} />;
      case 'profile':
        return <Profile />;
      case 'contact':
        return <Contact />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AuthProvider>
      <div className="app">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main>
          {renderContent()}
        </main>
        
        <footer style={{
          marginTop: '100px',
          padding: '4rem',
          borderTop: '1px solid var(--glass-border)',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <a href="mailto:ashishcb035@gmail.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} /> ashishcb035@gmail.com
            </a>
            <a href="tel:+919123469432" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} /> +91 9123469432
            </a>
          </div>
          <p>© 2026 AgriPrecision.ai - Advanced Decision Support System for Sustainable Agriculture</p>
          <div style={{ opacity: 0.5 }}>
            Engineered for global food security & resource efficiency.
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
