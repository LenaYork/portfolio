import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="app">
      <div
        className="container"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <button
          onClick={toggleDarkMode}
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            border: 'none',
            cursor: 'pointer',
            background: darkMode ? '#334155' : '#e2e8f0',
            color: darkMode ? '#fff' : '#334155',
            fontWeight: 'bold',
            zIndex: 1000,
          }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
          Portfolio
        </h1>
        <p style={{ fontSize: '1.2rem', color: darkMode ? '#94a3b8' : '#64748b', textAlign: 'center' }}>
          Frontend Developer | React • TypeScript • React Native
        </p>
        <div style={{ marginTop: '2rem' }}>
          <div className="glass" style={{ padding: '1rem 2rem', borderRadius: '1rem' }}>
            ✨ SCSS + Container Queries Ready ✨
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;