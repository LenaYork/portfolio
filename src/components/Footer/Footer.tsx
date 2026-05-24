import { Github, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = async (e) => {
    e.preventDefault();
    const email = 'leenabarysheva@gmail.com';

    try {
      await navigator.clipboard.writeText(email);
      const notification = document.createElement('div');
      notification.textContent = '✅ Email copied to clipboard!';
      notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: fadeInOut 2s ease-in-out;
      `;
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Please copy manually: ' + email);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/LenaYork',
      label: 'GitHub',
      color: '#333',
      onClick: null
    },
    {
      icon: Send,
      href: 'https://t.me/happiness1000',
      label: 'Telegram',
      color: '#26A5E4',
      onClick: null
    },
    {
      icon: Mail,
      href: '#',
      label: 'Email',
      color: '#EA4335',
      onClick: handleEmailClick
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left column */}
        <div className="footer__info">
          <h3 className="footer__title">Let's Connect</h3>
          <p className="footer__description">
            Open for opportunities and collaborations
          </p>
          <button onClick={scrollToTop} className="footer__back-to-top">
            ↑ Back to top
          </button>
        </div>

        {/* Right column - Social links */}
        <div className="footer__social">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              aria-label={link.label}
              onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick(e); } : undefined}
            >
              <link.icon className="footer__social-icon" />
              <span className="footer__social-label">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <p className="footer__copyright">
            © {currentYear} Helen. Built with React, TypeScript & SCSS
          </p>
          <p className="footer__credits">
            Frontend Developer Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;