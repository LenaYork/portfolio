import { useState, useEffect } from 'react';
import { Code2, Sun, Moon, User, FolderGit2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.scss';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const getCurrentSection = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    getCurrentSection();
  }, []);

  const navItems = [
    { label: 'About', id: 'about', icon: User },
    { label: 'Projects', id: 'projects', icon: FolderGit2 },
    { label: 'Contact', id: 'contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
    >
      <div className="container header__container">
        {/* Logo */}
        <motion.a
          onClick={() => scrollToSection('home')}
          className="header__logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ cursor: 'pointer' }}
        >
          <Code2 className="header__logo-icon" />
          <span className="header__logo-text">Portfolio</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="header__nav-desktop">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
              >
                <Icon className="header__nav-icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <nav className="header__nav-mobile">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`header__mobile-link ${isActive ? 'header__mobile-link--active' : ''}`}
                aria-label={item.label}
              >
                <Icon className="header__mobile-icon" />
              </button>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          className="header__theme-toggle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun className="header__theme-icon" /> : <Moon className="header__theme-icon" />}
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;