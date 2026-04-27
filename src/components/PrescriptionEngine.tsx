import { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, ChevronRight, Zap, Target, ShieldCheck } from 'lucide-react';

const PrescriptionEngine = () => {
  const [crop, setCrop] = useState('Maize');
  const [phase, setPhase] = useState('Vegetative');

  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '2rem' }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Prescription Engine</h2>
        <p style={{ color: 'var(--text-muted)' }}>AI-driven fertilizer optimization based on crop variety and growth phase.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1.25rem', color: 'var(--text-muted)' }}>Input Parameters</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Crop Variety</label>
              <select 
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }}
              >
                <option value="Maize">Maize (Zea mays)</option>
                <option value="Wheat">Wheat (Triticum)</option>
                <option value="Rice">Rice (Oryza sativa)</option>
                <option value="Cotton">Cotton (Gossypium)</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Growth Phase</label>
              <select 
                value={phase}
                onChange={(e) => setPhase(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }}
              >
                <option value="Germination">Germination</option>
                <option value="Vegetative">Vegetative</option>
                <option value="Flowering">Flowering</option>
                <option value="Ripening">Ripening</option>
              </select>
            </div>

            <button style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '10px',
              border: 'none',
              background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              Generate Plan <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="glass" style={{ padding: '1.5rem', background: 'rgba(59, 130, 246, 0.05)' }}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
              <ShieldCheck size={20} color="var(--accent-secondary)" />
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Environmental Safety</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
              Calculations include run-off prevention and soil microbiome protection based on current weather forecasts.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FlaskConical size={20} color="var(--accent-primary)" />
              Recommended Nutrient Dosage (Phase: {phase})
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {[
                { label: 'Nitrogen (N)', amount: '120', unit: 'kg/ha', pct: 60, color: 'var(--accent-primary)' },
                { label: 'Phosphorus (P)', amount: '45', unit: 'kg/ha', pct: 40, color: 'var(--accent-secondary)' },
                { label: 'Potassium (K)', amount: '80', unit: 'kg/ha', pct: 75, color: '#8b5cf6' },
              ].map((item, idx) => (
                <div key={idx} style={{ textAlign: 'center', padding: '1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>{item.label}</span>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{item.amount}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '4px' }}>{item.unit}</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }}>
                    <div style={{ width: `${item.pct}%`, height: '100%', background: item.color, borderRadius: '3px' }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="glass" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-primary)', display: 'flex' }}>
                  <Zap size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Efficiency Gain</h4>
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-primary)' }}>+32.4%</p>
                </div>
              </div>
              <div className="glass" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-secondary)', display: 'flex' }}>
                  <Target size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Yield Projection</h4>
                  <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-secondary)' }}>12.4 t/ha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionEngine;
