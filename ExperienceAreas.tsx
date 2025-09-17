import React, { useState } from 'react';

interface ExperienceArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
  technologies: string[];
  achievements: string[];
  color: string;
}

const ExperienceAreas: React.FC = () => {
  const [expandedArea, setExpandedArea] = useState<string | null>('ai-agents');

  const experienceAreas: ExperienceArea[] = [
    {
      id: 'ai-agents',
      title: 'AI Agent Development',
      icon: '🤖',
      description: 'Building intelligent, conversational AI agents and automation workflows',
      details: [
        'Developed autonomous AI agents using Flowise for workflow automation',
        'Implemented RAG (Retrieval-Augmented Generation) systems for contextual AI responses',
        'Created conversational AI chatbots with natural language understanding',
        'Built multi-agent systems for complex task orchestration'
      ],
      technologies: ['Flowise', 'LangChain', 'OpenAI', 'Anthropic', 'Vector Databases'],
      achievements: [
        '15+ AI agents deployed in production',
        '40% reduction in manual processes',
        '95% user satisfaction scores'
      ],
      color: '#8b5cf6'
    },
    {
      id: 'ml-dl',
      title: 'Machine Learning & Deep Learning',
      icon: '⚡',
      description: 'Advanced ML/DL model development and optimization',
      details: [
        'Designed and trained custom neural networks for specific business needs',
        'Implemented transfer learning for rapid model development',
        'Optimized model performance for production environments',
        'Developed computer vision and NLP solutions'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Hugging Face'],
      achievements: [
        '50+ ML models in production',
        '30% improvement in accuracy',
        '60% faster inference times'
      ],
      color: '#3b82f6'
    },
    {
      id: 'sso',
      title: 'Single Sign-On Implementation',
      icon: '🔐',
      description: 'Secure authentication and authorization systems',
      details: [
        'Implemented OAuth 2.0 and OpenID Connect protocols',
        'Integrated multiple identity providers (Google, Microsoft, Auth0)',
        'Designed secure API authentication for AI services',
        'Built role-based access control systems'
      ],
      technologies: ['OAuth 2.0', 'OpenID Connect', 'JWT', 'Auth0', 'Keycloak'],
      achievements: [
        '99.9% authentication success rate',
        'Zero security breaches',
        '50% faster user onboarding'
      ],
      color: '#06b6d4'
    },
    {
      id: 'api-integration',
      title: 'API Integration & Development',
      icon: '💻',
      description: 'Seamless integration of AI/ML capabilities through robust APIs',
      details: [
        'Developed RESTful APIs for ML model serving',
        'Integrated third-party AI services and platforms',
        'Built GraphQL endpoints for complex data queries',
        'Implemented real-time API monitoring and analytics'
      ],
      technologies: ['FastAPI', 'Express.js', 'GraphQL', 'REST', 'WebSockets'],
      achievements: [
        '25+ API integrations',
        '99.95% uptime',
        'Sub-100ms response times'
      ],
      color: '#10b981'
    },
    {
      id: 'production',
      title: 'Production AI Systems',
      icon: '🎯',
      description: 'Scalable deployment and monitoring of AI applications',
      details: [
        'Deployed ML models using containerization and orchestration',
        'Implemented CI/CD pipelines for ML workflows',
        'Set up monitoring and alerting for AI systems',
        'Optimized infrastructure for cost and performance'
      ],
      technologies: ['Docker', 'Kubernetes', 'AWS', 'MLflow', 'Prometheus'],
      achievements: [
        '100% deployment success rate',
        '75% cost reduction',
        '24/7 system availability'
      ],
      color: '#f59e0b'
    },
    {
      id: 'research',
      title: 'Research & Innovation',
      icon: '💡',
      description: 'Cutting-edge AI research and experimental implementations',
      details: [
        'Researched latest AI/ML trends and technologies',
        'Prototyped innovative AI solutions for business challenges',
        'Contributed to open-source AI projects',
        'Published technical documentation and best practices'
      ],
      technologies: ['Research Papers', 'GitHub', 'Jupyter', 'Colab', 'Papers with Code'],
      achievements: [
        '10+ research implementations',
        '5+ open-source contributions',
        '1000+ documentation views'
      ],
      color: '#ef4444'
    }
  ];

  const toggleArea = (areaId: string) => {
    setExpandedArea(expandedArea === areaId ? null : areaId);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience Areas</h2>
          <p className="section-subtitle">
            Comprehensive expertise across the AI/ML development lifecycle
          </p>
        </div>

        <div className="experience-grid">
          {experienceAreas.map((area, index) => (
            <div
              key={area.id}
              className={`experience-card ${expandedArea === area.id ? 'expanded' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div 
                className="card-header"
                onClick={() => toggleArea(area.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="header-content">
                  <div 
                    className="area-icon"
                    style={{ color: area.color }}
                  >
                    {area.icon}
                  </div>
                  <div className="area-info">
                    <h3 className="area-title">{area.title}</h3>
                    <p className="area-description">{area.description}</p>
                  </div>
                </div>
                <div className="expand-icon">
                  <span>{expandedArea === area.id ? '▲' : '▼'}</span>
                </div>
              </div>

              {expandedArea === area.id && (
                <div className="card-content">
                  <div className="content-section">
                    <h4>Key Responsibilities</h4>
                    <ul className="details-list">
                      {area.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="content-section">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {area.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tech-tag"
                          style={{ borderColor: area.color }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="content-section">
                    <h4>Key Achievements</h4>
                    <div className="achievements-grid">
                      {area.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="achievement-item"
                        >
                          <div 
                            className="achievement-icon"
                            style={{ backgroundColor: area.color }}
                          >
                            ✓
                          </div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-content">
            <h3>Ready to Build the Future</h3>
            <p>
              With comprehensive experience across all aspects of AI/ML development, 
              I'm equipped to tackle complex challenges and deliver innovative solutions 
              that drive business value and user satisfaction.
            </p>
            <button className="cta-button">
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAreas;