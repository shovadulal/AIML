import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = [
    'AI Agent Developer',
    'Machine Learning Engineer', 
    'Deep Learning Specialist',
    'Flowise Expert'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let index = 0;
    const timer = setInterval(() => {
      if (index <= currentRole.length) {
        setDisplayText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRoleIndex]);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Building the Future with
            <span className="gradient-text"> Intelligent Systems</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="hero-description">
            Specialized in developing AI agents, implementing machine learning solutions, 
            and integrating intelligent features into production applications using cutting-edge 
            frameworks like Flowise, TensorFlow, and PyTorch.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-icon">💻</span>
              <div>
                <div className="stat-number">50+</div>
                <div className="stat-label">AI Models</div>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🌐</span>
              <div>
                <div className="stat-number">25+</div>
                <div className="stat-label">Integrations</div>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">✨</span>
              <div>
                <div className="stat-number">15+</div>
                <div className="stat-label">AI Agents</div>
              </div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-hero-primary">
              Explore My Work
            </button>
            <button className="btn-hero-secondary">
              Download Resume
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="ai-visualization">
            <div className="neural-network">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="neural-node"
                  style={{
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </section>
  );
};

export default Hero;