import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Upload, CheckCircle, RefreshCw, AlertCircle, Image as ImageIcon } from 'lucide-react';

const SoilAI = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
      setError(null);
    }
  };

  const startAnalysis = async () => {
    if (!selectedImage && fileInputRef.current) {
      fileInputRef.current.click();
      return;
    }

    setIsAnalyzing(true);
    setResult(null);
    setError(null);

    try {
      // Create form data for the backend
      const formData = new FormData();
      if (fileInputRef.current?.files?.[0]) {
        formData.append('image', fileInputRef.current.files[0]);
      }

      const response = await fetch('http://localhost:5001/api/analyze', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult(data);
      } else {
        setError('Analysis failed. Please try again.');
      }
    } catch (err) {
      setError('Could not connect to analysis engine.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: '2rem' }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Real-Time Soil Analyzer</h2>
        <p style={{ color: 'var(--text-muted)' }}>Computer vision engine powered by Deep Learning for surface nutrient mapping.</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <motion.div
          className="glass"
          style={{
            height: '450px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            border: '2px dashed var(--glass-border)',
            background: selectedImage ? `url(${selectedImage})` : 'rgba(255,255,255,0.02)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px'
          }}
        >
          {selectedImage && <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />}
          
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            style={{ display: 'none' }} 
            accept="image/*"
          />

          <AnimatePresence>
            {!isAnalyzing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{
                  padding: '2rem',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'var(--accent-primary)',
                  marginBottom: '1rem',
                  backdropFilter: 'blur(5px)'
                }}>
                  {selectedImage ? <ImageIcon size={48} /> : <Camera size={48} />}
                </div>
                <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>
                  {selectedImage ? 'Image Loaded' : 'Select Crop/Soil Image'}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  {selectedImage ? 'Click analyze to process' : 'Upload JPG/PNG for instant diagnosis'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {isAnalyzing && (
            <motion.div 
              initial={{ top: '-100%' }}
              animate={{ top: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: '4px',
                background: 'var(--accent-primary)',
                boxShadow: '0 0 20px var(--accent-primary)',
                zIndex: 2
              }}
            />
          )}

          <div style={{ position: 'absolute', bottom: '2rem', zIndex: 2 }}>
            <button 
              onClick={startAnalysis}
              disabled={isAnalyzing}
              className="glow-btn"
              style={{
                padding: '0.75rem 2.5rem',
                borderRadius: '12px',
                border: 'none',
                background: 'var(--accent-primary)',
                color: '#fff',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {isAnalyzing ? <RefreshCw className="spin" size={18} /> : (selectedImage ? <CheckCircle size={18} /> : <Upload size={18} />)}
              {isAnalyzing ? 'Scanning Neural Layers...' : (selectedImage ? 'Start Analysis' : 'Upload Sample')}
            </button>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <AnimatePresence mode="wait">
            {isAnalyzing ? (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass"
                style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Analyzing Spectral Data...</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)' }}>Neural Sync</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                    <motion.div 
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ height: '100%', background: 'var(--accent-primary)', borderRadius: '2px' }}
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                  {[...Array(12)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.8, delay: i * 0.05, repeat: Infinity }}
                      style={{ height: '30px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px' }}
                    />
                  ))}
                </div>
              </motion.div>
            ) : result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass glow"
                style={{ padding: '2rem', flex: 1, border: '1px solid var(--accent-primary)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                  <CheckCircle size={24} />
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Diagnosis Complete</h3>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Identified Type</span>
                    <span style={{ fontWeight: 600 }}>{result.type}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>AI Confidence</span>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{result.confidence}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Organic Content</span>
                    <span style={{ fontWeight: 600 }}>{result.organicMatter}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Micro-texture</span>
                    <span style={{ fontWeight: 600 }}>{result.texture}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => { setSelectedImage(null); setResult(null); }}
                  style={{ marginTop: '1.5rem', background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-muted)', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Clear & New Scan
                </button>
              </motion.div>
            ) : error ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass"
                style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#f87171' }}
              >
                <AlertCircle size={40} style={{ marginBottom: '1rem' }} />
                <p>{error}</p>
                <button 
                  onClick={() => setError(null)}
                  style={{ marginTop: '1rem', background: 'var(--accent-primary)', border: 'none', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '8px', cursor: 'pointer' }}
                >
                  Retry
                </button>
              </motion.div>
            ) : (
              <div className="glass" style={{ padding: '2rem', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', textAlign: 'center' }}>
                <p>Upload a high-resolution field image to begin real-time spectral analysis.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SoilAI;
