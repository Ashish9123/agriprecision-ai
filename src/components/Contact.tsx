import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, Send, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    { 
      icon: <Mail size={24} />, 
      label: 'Email Support', 
      value: 'ashishcb035@gmail.com',
      link: 'mailto:ashishcb035@gmail.com',
      color: '#10b981'
    },
    { 
      icon: <Phone size={24} />, 
      label: 'Direct Line', 
      value: '+91 9123469432',
      link: 'tel:+919123469432',
      color: '#3b82f6'
    },
    { 
      icon: <MessageSquare size={24} />, 
      label: 'Telegram', 
      value: '@AgriSupport',
      link: '#',
      color: '#8b5cf6'
    }
  ];

  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Connect with <span style={{ color: 'var(--accent-primary)' }}>AgriPrecision</span></h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Have questions about our precision farming solutions? Our team of experts is ready to assist you 24/7.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
        {/* Contact Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.link}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass glow-hover"
              style={{ 
                padding: '2rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid var(--glass-border)'
              }}
            >
              <div style={{ 
                padding: '1rem', 
                borderRadius: '16px', 
                background: `rgba(${info.color === '#10b981' ? '16, 185, 129' : info.color === '#3b82f6' ? '59, 130, 246' : '139, 92, 246'}, 0.1)`,
                color: info.color
              }}>
                {info.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{info.label}</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{info.value}</p>
              </div>
              <ExternalLink size={16} style={{ marginLeft: 'auto', opacity: 0.3 }} />
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass"
            style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <MapPin size={24} style={{ color: 'var(--accent-primary)' }} />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Corporate HQ: <span style={{ color: '#fff' }}>Central Innovation Hub, Silicon Valley, CA</span>
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass"
          style={{ padding: '3rem', border: '1px solid var(--glass-border)' }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send a Quick Inquiry</h3>
          <form style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: '#fff' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Subject</label>
                <input 
                  type="text" 
                  placeholder="Soil Analysis Inquiry"
                  style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: '#fff' }}
                />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Message</label>
              <textarea 
                placeholder="How can we help your farm today?"
                rows={5}
                style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '10px', color: '#fff', resize: 'none' }}
              />
            </div>
            <button
              type="button"
              className="glow-btn"
              style={{
                padding: '1rem',
                borderRadius: '12px',
                border: 'none',
                background: 'var(--accent-primary)',
                color: '#fff',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}
            >
              <Send size={18} />
              Dispatch Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
