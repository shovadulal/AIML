import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: '#github' },
    { name: 'LinkedIn', icon: '💼', url: '#linkedin' },
    { name: 'Twitter', icon: '🐦', url: '#twitter' },
    { name: 'Medium', icon: '📝', url: '#medium' },
    { name: 'YouTube', icon: '📺', url: '#youtube' },
  ];

  const quickLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'AI Features', href: '#ai-features' },
    { name: 'Experience', href: '#experience' },
  ];

  const aiServices = [
    { name: 'Custom AI Models', icon: '🤖' },
    { name: 'RAG Implementation', icon: '🔍' },
    { name: 'ML Consulting', icon: '📊' },
    { name: 'AI Integration', icon: '⚡' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="gradient-orb footer-orb-1"></div>
        <div className="gradient-orb footer-orb-2"></div>
      </div>

      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🧠</span>
              <span className="logo-text">AI/ML Developer</span>
            </div>
            <p className="footer-description">
              Building intelligent systems that transform businesses and enhance human capabilities. 
              Specializing in AI agents, machine learning, and production-ready AI solutions.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  title={social.name}
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div className="footer-section">
            <h3 className="footer-title">AI Services</h3>
            <ul className="footer-links">
              {aiServices.map((service) => (
                <li key={service.name} className="service-item">
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-name">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Stay Updated</h3>
            <p className="newsletter-description">
              Get the latest insights on AI/ML trends and cutting-edge implementations.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="newsletter-btn"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? '✅' : '🚀'}
                </button>
              </div>
              {isSubscribed && (
                <div className="subscription-success">
                  <span>🎉 Successfully subscribed!</span>
                </div>
              )}
            </form>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>ai.developer@example.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Available for Remote Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="footer-stats">
          <div className="stat-card">
            <span className="stat-icon">🎯</span>
            <div className="stat-content">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏆</span>
            <div className="stat-content">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">⚡</span>
            <div className="stat-content">
              <div className="stat-number">24/7</div>
              <div className="stat-label">AI System Uptime</div>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🌍</span>
            <div className="stat-content">
              <div className="stat-number">15+</div>
              <div className="stat-label">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span>© {currentYear} AI/ML Developer. All rights reserved.</span>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy" className="bottom-link">Privacy Policy</a>
              <a href="#terms" className="bottom-link">Terms of Service</a>
              <a href="#cookies" className="bottom-link">Cookie Policy</a>
            </div>
            <div className="build-info">
              <span className="build-badge">
                🚀 Built with React + TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;