import React, { useState } from 'react';

interface FeatureDemo {
  id: string;
  title: string;
  description: string;
  icon: string;
  inputPlaceholder: string;
  outputExample: string;
  demoText?: string;
}

const AIFeatures: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string>('text-summarization');
  const [inputText, setInputText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [output, setOutput] = useState<string>('');

  const features: FeatureDemo[] = [
    {
      id: 'text-summarization',
      title: 'Text Summarization',
      description: 'Advanced extractive and abstractive summarization using transformer models',
      icon: '📝',
      inputPlaceholder: 'Paste your text here for summarization...',
      outputExample: 'Generated summary will appear here...',
      demoText: 'Artificial Intelligence has revolutionized various industries by enabling machines to perform tasks that typically require human intelligence. Machine learning, a subset of AI, allows systems to automatically learn and improve from experience without being explicitly programmed. Deep learning, which uses neural networks with multiple layers, has been particularly successful in areas such as image recognition, natural language processing, and speech recognition. The applications of AI continue to expand across healthcare, finance, transportation, and many other sectors, promising to transform how we work and live.'
    },
    {
      id: 'document-generation',
      title: 'Path Document Generation',
      description: 'Intelligent workflow automation and document routing with AI optimization',
      icon: '🔄',
      inputPlaceholder: 'Describe your document workflow requirements...',
      outputExample: 'Generated workflow path will be visualized here...',
      demoText: 'Create an automated approval workflow for employee expense reports that includes manager review, finance verification, and final approval steps.'
    },
    {
      id: 'document-qa',
      title: 'Document Q&A',
      description: 'RAG-powered question answering with context-aware responses from documents',
      icon: '❓',
      inputPlaceholder: 'Ask a question about your documents...',
      outputExample: 'Context-aware answer will appear here...',
      demoText: 'What are the key benefits of implementing AI in business processes?'
    },
    {
      id: 'content-generation',
      title: 'Content Generation',
      description: 'AI-powered creation of documents, articles, and structured content',
      icon: '✨',
      inputPlaceholder: 'Describe what content you want to generate...',
      outputExample: 'Generated content will appear here...',
      demoText: 'Generate a technical blog post about the benefits of using RAG architecture in AI applications.'
    }
  ];

  const currentFeature = features.find(f => f.id === activeDemo) || features[0];

  const handleDemo = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate demo output based on feature type
    let demoOutput = '';
    switch (activeDemo) {
      case 'text-summarization':
        demoOutput = `**Extractive Summary:**\nAI has revolutionized industries by enabling machines to perform human-like tasks. Machine learning allows automatic learning from experience, while deep learning excels in image recognition and NLP.\n\n**Abstractive Summary:**\nArtificial Intelligence transforms industries through machine learning and deep learning technologies, with applications spanning healthcare, finance, and transportation sectors.`;
        break;
      case 'document-generation':
        demoOutput = `**Generated Workflow Path:**\n\n1. **Initial Submission** → Employee submits expense report\n2. **Manager Review** → Direct manager approves/rejects\n3. **Finance Verification** → Finance team validates expenses\n4. **Final Approval** → Finance director provides final approval\n5. **Processing** → Payment processing initiated\n6. **Notification** → Employee receives confirmation\n\n**Automation Rules:**\n- Auto-approve expenses under $100\n- Escalate to senior manager for expenses over $1000\n- Flag duplicate submissions`;
        break;
      case 'document-qa':
        demoOutput = `**Answer:** Based on the document analysis, the key benefits of implementing AI in business processes include:\n\n• **Automation**: Reduces manual work and human error\n• **Efficiency**: Processes tasks faster than human capabilities\n• **Scalability**: Handles increasing workloads without proportional resource increase\n• **Insights**: Discovers patterns and trends in data\n• **Cost Reduction**: Lowers operational costs over time\n• **24/7 Availability**: Operates continuously without breaks\n\n**Context Sources:** Found in sections 2.3, 4.1, and 5.2 of the analyzed documents.`;
        break;
      case 'content-generation':
        demoOutput = `# The Power of RAG Architecture in AI Applications\n\n## Introduction\nRetrieval-Augmented Generation (RAG) represents a breakthrough in AI architecture, combining the strengths of pre-trained language models with dynamic information retrieval.\n\n## Key Benefits\n\n### 1. Enhanced Accuracy\nRAG systems provide more accurate responses by grounding answers in relevant, up-to-date information from external knowledge bases.\n\n### 2. Reduced Hallucination\nBy retrieving factual information before generation, RAG significantly reduces AI hallucination and improves reliability.\n\n### 3. Dynamic Knowledge Updates\nUnlike static models, RAG can access and utilize the latest information without requiring model retraining.\n\n## Conclusion\nRAG architecture represents the future of AI applications, offering improved accuracy, reliability, and adaptability for enterprise use cases.`;
        break;
    }
    
    setOutput(demoOutput);
    setIsProcessing(false);
  };

  const loadDemoText = () => {
    setInputText(currentFeature.demoText || '');
  };

  return (
    <section id="ai-features" className="ai-features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Advanced AI Capabilities</h2>
          <p className="section-subtitle">
            Interactive demonstrations of cutting-edge AI features and implementations
          </p>
        </div>

        <div className="features-navigation">
          {features.map((feature) => (
            <button
              key={feature.id}
              className={`feature-nav-btn ${activeDemo === feature.id ? 'active' : ''}`}
              onClick={() => {
                setActiveDemo(feature.id);
                setInputText('');
                setOutput('');
              }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <span className="feature-title">{feature.title}</span>
            </button>
          ))}
        </div>

        <div className="feature-demo-container">
          <div className="feature-header">
            <div className="feature-title-section">
              <span className="feature-icon-large">{currentFeature.icon}</span>
              <div>
                <h3 className="feature-demo-title">{currentFeature.title}</h3>
                <p className="feature-demo-description">{currentFeature.description}</p>
              </div>
            </div>
            <button
              className="demo-text-btn"
              onClick={loadDemoText}
            >
              Load Demo Text
            </button>
          </div>

          <div className="demo-interface">
            <div className="input-section">
              <label className="input-label">Input</label>
              <textarea
                className="demo-input"
                placeholder={currentFeature.inputPlaceholder}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={6}
              />
              <button
                className="process-btn"
                onClick={handleDemo}
                disabled={!inputText.trim() || isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span className="processing-spinner">⏳</span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    Process with AI
                  </>
                )}
              </button>
            </div>

            <div className="output-section">
              <label className="output-label">Output</label>
              <div className="demo-output">
                {output ? (
                  <div className="output-content">
                    {output.split('\n').map((line, index) => (
                      <div key={index} className="output-line">
                        {line.startsWith('**') && line.endsWith('**') ? (
                          <strong>{line.slice(2, -2)}</strong>
                        ) : line.startsWith('#') ? (
                          <h4>{line.replace(/^#+\s/, '')}</h4>
                        ) : line.startsWith('•') ? (
                          <li>{line.slice(1).trim()}</li>
                        ) : (
                          line
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="output-placeholder">
                    {currentFeature.outputExample}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="feature-stats">
            <div className="stat-item">
              <span className="stat-number">99.2%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">&lt;2s</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Availability</span>
            </div>
          </div>
        </div>

        <div className="implementation-showcase">
          <h3>Technical Implementation</h3>
          <div className="tech-stack-grid">
            <div className="tech-item">
              <span className="tech-icon">🤖</span>
              <div>
                <div className="tech-name">Transformer Models</div>
                <div className="tech-desc">GPT, BERT, T5 for NLP tasks</div>
              </div>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🔍</span>
              <div>
                <div className="tech-name">Vector Search</div>
                <div className="tech-desc">Semantic similarity with embeddings</div>
              </div>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🗄️</span>
              <div>
                <div className="tech-name">Knowledge Base</div>
                <div className="tech-desc">Chroma, Pinecone, Weaviate</div>
              </div>
            </div>
            <div className="tech-item">
              <span className="tech-icon">⚡</span>
              <div>
                <div className="tech-name">Real-time Processing</div>
                <div className="tech-desc">FastAPI, WebSocket connections</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;