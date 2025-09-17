import React from 'react';

interface Technology {
  name: string;
  category: string;
  icon: string;
  description: string;
  color: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
}

const TechnologyStack: React.FC = () => {
  const technologies: Technology[] = [
    // AI/ML Frameworks
    {
      name: 'TensorFlow',
      category: 'ML Framework',
      icon: '🔥',
      description: 'Deep learning and neural network development',
      color: '#ff6f00',
      proficiency: 'Expert'
    },
    {
      name: 'PyTorch',
      category: 'ML Framework',
      icon: '⚡',
      description: 'Research-focused deep learning framework',
      color: '#ee4c2c',
      proficiency: 'Expert'
    },
    {
      name: 'LangChain',
      category: 'AI Framework',
      icon: '🔗',
      description: 'Building applications with large language models',
      color: '#1c3a5b',
      proficiency: 'Advanced'
    },
    {
      name: 'Flowise',
      category: 'AI Platform',
      icon: '🌊',
      description: 'Visual AI workflow builder and automation',
      color: '#4f46e5',
      proficiency: 'Expert'
    },
    
    // Programming Languages
    {
      name: 'Python',
      category: 'Language',
      icon: '🐍',
      description: 'Primary language for AI/ML development',
      color: '#3776ab',
      proficiency: 'Expert'
    },
    {
      name: 'TypeScript',
      category: 'Language',
      icon: '📘',
      description: 'Type-safe JavaScript for robust applications',
      color: '#3178c6',
      proficiency: 'Advanced'
    },
    {
      name: 'JavaScript',
      category: 'Language',
      icon: '💛',
      description: 'Frontend and backend development',
      color: '#f7df1e',
      proficiency: 'Expert'
    },
    
    // Databases & Storage
    {
      name: 'Vector DBs',
      category: 'Database',
      icon: '🗃️',
      description: 'Chroma, Pinecone, Weaviate for embeddings',
      color: '#059669',
      proficiency: 'Advanced'
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      icon: '🐘',
      description: 'Relational database with AI extensions',
      color: '#336791',
      proficiency: 'Advanced'
    },
    
    // Cloud & DevOps
    {
      name: 'AWS',
      category: 'Cloud',
      icon: '☁️',
      description: 'SageMaker, Lambda, EC2 for AI workloads',
      color: '#ff9900',
      proficiency: 'Advanced'
    },
    {
      name: 'Docker',
      category: 'DevOps',
      icon: '🐳',
      description: 'Containerization for ML applications',
      color: '#2496ed',
      proficiency: 'Advanced'
    },
    {
      name: 'Kubernetes',
      category: 'DevOps',
      icon: '⛵',
      description: 'Orchestration for scalable AI systems',
      color: '#326ce5',
      proficiency: 'Intermediate'
    },
    
    // Authentication & Security
    {
      name: 'OAuth 2.0',
      category: 'Security',
      icon: '🔐',
      description: 'Secure authentication and authorization',
      color: '#4285f4',
      proficiency: 'Expert'
    },
    {
      name: 'OpenID',
      category: 'Security',
      icon: '🆔',
      description: 'Identity layer for authentication',
      color: '#f4b942',
      proficiency: 'Advanced'
    },
    
    // Frontend Technologies
    {
      name: 'React',
      category: 'Frontend',
      icon: '⚛️',
      description: 'Modern UI development for AI applications',
      color: '#61dafb',
      proficiency: 'Expert'
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      icon: '▲',
      description: 'Full-stack React framework',
      color: '#000000',
      proficiency: 'Advanced'
    }
  ];

  const categories = [
    { name: 'ML Framework', color: '#8b5cf6' },
    { name: 'AI Framework', color: '#3b82f6' },
    { name: 'AI Platform', color: '#06b6d4' },
    { name: 'Language', color: '#10b981' },
    { name: 'Database', color: '#f59e0b' },
    { name: 'Cloud', color: '#ef4444' },
    { name: 'DevOps', color: '#8b5cf6' },
    { name: 'Security', color: '#3b82f6' },
    { name: 'Frontend', color: '#06b6d4' }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return '#10b981';
      case 'Advanced': return '#3b82f6';
      case 'Intermediate': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <section id="tech" className="tech-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle">
            Cutting-edge tools and frameworks for AI/ML development
          </p>
        </div>

        <div className="tech-categories">
          {categories.map((category) => (
            <div
              key={category.name}
              className="category-tag"
              style={{ borderColor: category.color, color: category.color }}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-card"
              style={{
                animationDelay: `${index * 0.05}s`
              }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-content">
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-category" style={{ color: tech.color }}>
                  {tech.category}
                </p>
                <p className="tech-description">{tech.description}</p>
                <div 
                  className="tech-proficiency"
                  style={{ color: getProficiencyColor(tech.proficiency) }}
                >
                  {tech.proficiency}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-integration">
          <div className="integration-card">
            <h3>Full-Stack AI Integration</h3>
            <p>
              Experienced in seamlessly integrating AI/ML capabilities across the entire technology stack, 
              from data preprocessing and model training to production deployment and monitoring.
            </p>
            <div className="integration-flow">
              <div className="flow-step">Data</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">Models</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">APIs</div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">Production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;