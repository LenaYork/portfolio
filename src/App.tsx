import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/index.scss';

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
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        {/* Home Section */}
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Frontend Developer
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--gray)' }}>
              React • TypeScript • React Native
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ minHeight: '50vh' }}>
          <div className="container">
            <h2>About</h2>
            <p>Coming soon...</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ minHeight: '50vh' }}>
          <div className="container">
            <h2>Projects</h2>
            <p>Coming soon...</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ minHeight: '50vh' }}>
          <div className="container">
            <h2>Contact</h2>
            <p>Coming soon...</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;