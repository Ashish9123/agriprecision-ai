import { motion } from 'framer-motion';
import { Thermometer, Droplets, Sun, Activity } from 'lucide-react';

const StatCard = ({ icon, label, value, unit, color, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="glass"
    style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}
  >
    <div style={{
      position: 'absolute',
      top: '-20px',
      right: '-20px',
      width: '100px',
      height: '100px',
      background: color,
      filter: 'blur(60px)',
      opacity: 0.15
    }}></div>
    
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
      <div style={{
        padding: '10px',
        borderRadius: '12px',
        background: `${color}15`,
        color: color,
        display: 'flex'
      }}>
        {icon}
      </div>
      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>{label}</span>
    </div>
    
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
      <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff' }}>{value}</span>
      <span style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{unit}</span>
    </div>

    <div style={{ marginTop: '1rem', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '70%' }}
        transition={{ duration: 1, delay: delay + 0.5 }}
        style={{ height: '100%', background: color }}
      />
    </div>
  </motion.div>
);

const Dashboard = () => {
  const stats = [
    { icon: <Activity size={20} />, label: 'Nitrogen (N)', value: '42', unit: 'mg/kg', color: '#10b981', delay: 0.1 },
    { icon: <Activity size={20} />, label: 'Phosphorus (P)', value: '18', unit: 'mg/kg', color: '#3b82f6', delay: 0.2 },
    { icon: <Activity size={20} />, label: 'Potassium (K)', value: '156', unit: 'mg/kg', color: '#8b5cf6', delay: 0.3 },
    { icon: <Thermometer size={20} />, label: 'Soil pH', value: '6.8', unit: 'pH', color: '#f59e0b', delay: 0.4 },
    { icon: <Droplets size={20} />, label: 'Moisture', value: '24', unit: '%', color: '#06b6d4', delay: 0.5 },
    { icon: <Sun size={20} />, label: 'UV Index', value: '4.2', unit: 'index', color: '#f97316', delay: 0.6 },
  ];

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="hero glass" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-title"
          >
            Field Overview
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}
          >
            Real-time telemetry from IoT sensor array 0x42-Alpha. Monitoring current nutrient levels and environmental stability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="glass"
            style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}
          >
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={18} /> Precision Status: Optimal
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              The current nutrient levels are ideal for the vegetative growth phase of your Maize crop. No intervention required for the next 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        <div className="grid-dashboard">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
