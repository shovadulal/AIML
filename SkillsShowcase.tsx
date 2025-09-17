import React from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
  color: string;
}

const SkillsShowcase: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Machine Learning',
      level: 95,
      icon: '🧠',
      description: 'Advanced ML algorithms, model training, and optimization',
      color: '#8b5cf6'
    },
    {
      name: 'Deep Learning',
      level: 90,
      icon: '⚡',
      description: 'Neural networks, CNNs, RNNs, and transformer architectures',
      color: '#3b82f6'
    },
    {
      name: 'AI Agent Development',
      level: 88,
      icon: '🤖',
      description: 'Building conversational AI and autonomous agents',
      color: '#06b6d4'
    },
    {
      name: 'Flowise & RAG',
      level: 85,
      icon: '📈',
      description: 'Retrieval-Augmented Generation and workflow automation',
      color: '#10b981'
    },
    {
      name: 'SSO Implementation',
      level: 82,
      icon: '🔒',
      description: 'OAuth, OpenID Connect, and secure authentication',
      color: '#f59e0b'
    },
    {
      name: 'API Integration',
      level: 92,
      icon: '💻',
      description: 'RESTful APIs, GraphQL, and microservices architecture',
      color: '#ef4444'
    },
    {
      name: 'Production Deployment',
      level: 87,
      icon: '🎯',
      description: 'Scalable AI systems in production environments',
      color: '#8b5cf6'
    },
    {
      name: 'Research & Innovation',
      level: 90,
      icon: '💡',
      description: 'Cutting-edge AI research and implementation',
      color: '#3b82f6'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Expertise</h2>
          <p className="section-subtitle">
            Comprehensive skills in AI/ML development and production implementation
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="skill-header">
                <div 
                  className="skill-icon"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>
              
              <div className="skill-progress">
                <div className="progress-info">
                  <span className="progress-label">Proficiency</span>
                  <span className="progress-value">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ 
                      backgroundColor: skill.color,
                      width: `${skill.level}%`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Ready for Production</h3>
            <p>
              Experienced in taking AI/ML projects from research to production, 
              with a focus on scalability, security, and performance optimization.
            </p>
            <div className="summary-highlights">
              <span className="highlight">Production-Ready Code</span>
              <span className="highlight">Scalable Architecture</span>
              <span className="highlight">Security Best Practices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;