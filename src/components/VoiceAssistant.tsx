import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, Volume2, Globe, Sparkles } from 'lucide-react';

const VoiceAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am your AgriPrecision assistant. How can I help you with your field operations today?', lang: 'English' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue) return;
    const newMessages = [...messages, { role: 'user', content: inputValue, lang: 'English' }];
    setMessages(newMessages);
    setInputValue('');
    
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: 'Based on recent telemetry, your field 0x42-Alpha has optimal nitrogen levels. I recommend scheduling the next irrigation cycle for tomorrow morning at 5:00 AM.',
        lang: 'English'
      }]);
    }, 1500);
  };

  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '2rem' }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Voice Assistant</h2>
        <p style={{ color: 'var(--text-muted)' }}>Multilingual NLP interface for hands-free field management.</p>
      </motion.div>

      <div className="glass" style={{ height: '600px', display: 'flex', flexDirection: 'column', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-primary)' }}>
              <Sparkles size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem' }}>NLP Interface v2.4</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active & Listening</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', border: '1px solid var(--glass-border)' }}>
              <Globe size={14} /> English
            </button>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '70%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div className="glass" style={{
                  padding: '1rem 1.5rem',
                  background: msg.role === 'user' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.03)',
                  border: msg.role === 'user' ? 'none' : '1px solid var(--glass-border)',
                  color: msg.role === 'user' ? '#fff' : 'var(--text-main)',
                  borderRadius: msg.role === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0'
                }}>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{msg.content}</p>
                </div>
                {msg.role === 'assistant' && (
                  <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', cursor: 'pointer', paddingLeft: '0.5rem' }}>
                    <Volume2 size={12} /> Play Audio Instruction
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)', background: 'rgba(5, 7, 10, 0.5)' }}>
          <div style={{ position: 'relative', display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <input
                type="text"
                placeholder="Ask about nutrient levels, irrigation, or harvest readiness..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                style={{
                  width: '100%',
                  padding: '1rem 1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
              <button style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer' }}>
                <Mic size={20} />
              </button>
            </div>
            <button 
              onClick={handleSend}
              style={{
                padding: '0 1.5rem',
                borderRadius: '12px',
                border: 'none',
                background: 'var(--accent-primary)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
