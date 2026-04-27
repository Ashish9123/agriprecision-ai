import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Shield, LogOut, MapPin, Calendar, Settings } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass"
          style={{ padding: '2.5rem', textAlign: 'center' }}
        >
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '60px', 
            background: 'linear-gradient(45deg, var(--accent-primary), #34d399)',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: '#fff',
            fontWeight: 700,
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)'
          }}>
            {user.name[0]}
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{user.name}</h2>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>{user.role}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Shield size={16} />
              <span>Admin Access Verified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <MapPin size={16} />
              <span>Central Valley Hub</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Calendar size={16} />
              <span>Joined March 2026</span>
            </div>
          </div>

          <button
            onClick={logout}
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '10px',
              border: '1px solid #f87171',
              background: 'transparent',
              color: '#f87171',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </motion.div>

        {/* Account Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass"
            style={{ padding: '2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem' }}>Account Configuration</h3>
              <Settings size={20} className="text-muted" />
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Email Address</p>
                <p style={{ fontWeight: 500 }}>{user.email}</p>
              </div>
              <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>User ID</p>
                <p style={{ fontWeight: 500 }}>AGRI-PR-00{user.id}</p>
              </div>
              <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Security Status</p>
                <p style={{ fontWeight: 500, color: '#34d399' }}>Multi-Factor Enabled</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass glow"
            style={{ padding: '2rem' }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Recent System Operations</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { op: 'Soil Analysis Completed', time: '2 hours ago', status: 'Success' },
                { op: 'Prescription Engine Run', time: '5 hours ago', status: 'Generated' },
                { op: 'Telemetry Sync', time: '12 hours ago', status: 'Stable' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px' }}>
                  <div>
                    <p style={{ fontWeight: 500, fontSize: '0.9rem' }}>{item.op}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.time}</p>
                  </div>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
