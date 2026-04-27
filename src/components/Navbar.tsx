import React from 'react';
import { Leaf, LayoutDashboard, LineChart, Camera, FlaskConical, Mic, User as UserIcon, LogIn, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { isAuthenticated, user } = useAuth();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'analysis', label: 'Analysis', icon: <LineChart size={18} /> },
    { id: 'soil-ai', label: 'Soil AI', icon: <Camera size={18} /> },
    { id: 'prescriptions', label: 'Prescriptions', icon: <FlaskConical size={18} /> },
    { id: 'voice', label: 'Voice Assistant', icon: <Mic size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Phone size={18} /> },
  ];

  return (
    <nav className="glass-nav" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 4rem',
      zIndex: 1000,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          background: 'var(--accent-primary)',
          padding: '8px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Leaf color="white" size={20} />
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
          Agri<span style={{ color: 'var(--accent-primary)' }}>Precision</span>.ai
        </span>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.2rem',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === item.id ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
              color: activeTab === item.id ? 'var(--accent-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: activeTab === item.id ? 600 : 400,
              fontSize: '0.9rem'
            }}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={() => setActiveTab(isAuthenticated ? 'profile' : 'login')}
          style={{
            background: activeTab === 'profile' || activeTab === 'login' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '12px',
            color: activeTab === 'profile' || activeTab === 'login' ? 'var(--accent-primary)' : '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontWeight: 600,
            transition: 'all 0.3s ease'
          }}
        >
          {isAuthenticated ? <UserIcon size={18} /> : <LogIn size={18} />}
          <span style={{ fontSize: '0.9rem' }}>
            {isAuthenticated ? user?.name : 'Login'}
          </span>
        </button>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))'
        }}></div>
      </div>
    </nav>
  );
};

export default Navbar;
