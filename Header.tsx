import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🧠</span>
          <span className="logo-text">AI/ML Developer</span>
        </div>
        
        <nav className="nav">
          <a href="#skills">Skills</a>
          <a href="#tech">Tech Stack</a>
          <a href="#ai-features">AI Features</a>
          <a href="#experience">Experience</a>
        </nav>

        <div className="header-actions">
          <button className="btn-primary">
            <span>💻</span>
            Portfolio
          </button>
          <button className="btn-secondary">
            <span>⚡</span>
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;