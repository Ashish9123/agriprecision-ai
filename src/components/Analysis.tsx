import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', nitrogen: 40, phosphorus: 24, potassium: 140 },
  { name: 'Tue', nitrogen: 45, phosphorus: 28, potassium: 145 },
  { name: 'Wed', nitrogen: 42, phosphorus: 20, potassium: 156 },
  { name: 'Thu', nitrogen: 38, phosphorus: 22, potassium: 150 },
  { name: 'Fri', nitrogen: 48, phosphorus: 25, potassium: 160 },
  { name: 'Sat', nitrogen: 50, phosphorus: 30, potassium: 165 },
  { name: 'Sun', nitrogen: 42, phosphorus: 18, potassium: 156 },
];

const Analysis = () => {
  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '2rem' }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Predictive Analytics</h2>
        <p style={{ color: 'var(--text-muted)' }}>Historical nutrient stability and resource efficiency trends.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass"
          style={{ padding: '2rem', height: '400px' }}
        >
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Nutrient Concentration Stability</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorN" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ background: 'rgba(15,20,25,0.9)', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
                itemStyle={{ fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="nitrogen" stroke="#10b981" fillOpacity={1} fill="url(#colorN)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass"
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h3 style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Resource Efficiency</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Water Conservation</span>
                <span style={{ color: 'var(--accent-secondary)' }}>+14.2%</span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                <div style={{ width: '85%', height: '100%', background: 'var(--accent-secondary)', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fertilizer Optimization</span>
                <span style={{ color: 'var(--accent-primary)' }}>+22.8%</span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                <div style={{ width: '92%', height: '100%', background: 'var(--accent-primary)', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                AI Model Confidence: <span style={{ color: '#fff' }}>99.1%</span> based on 4.2TB of regional soil data.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analysis;
