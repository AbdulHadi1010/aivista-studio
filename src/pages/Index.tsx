import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">DevAI Tools</h1>
          <p className="page-subtitle">
            A lightweight, developer-focused suite of AI tools. Choose your tool below to get started.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Text Chat Tool */}
          <Link 
            to="/text" 
            style={{ 
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              padding: 'var(--spacing-xl)',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.borderColor = 'var(--accent-blue)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.borderColor = 'var(--border-light)';
            }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: 'var(--spacing-md)',
                textAlign: 'center'
              }}>
                💬
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)'
              }}>
                Text Chat
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: 'var(--spacing-md)'
              }}>
                Interactive chat interface for AI-powered text generation. Ask questions, get insights, or have a conversation.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'var(--accent-blue)',
                fontWeight: '500',
                fontSize: '0.9rem'
              }}>
                Try Text Chat →
              </div>
            </div>
          </Link>

          {/* Image Generation Tool */}
          <Link 
            to="/image" 
            style={{ 
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              padding: 'var(--spacing-xl)',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.borderColor = 'var(--accent-blue)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.borderColor = 'var(--border-light)';
            }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: 'var(--spacing-md)',
                textAlign: 'center'
              }}>
                🎨
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--text-primary)'
              }}>
                Image Generation
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: 'var(--spacing-md)'
              }}>
                Create AI-generated images from text prompts. Describe your vision and watch it come to life.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'var(--accent-blue)',
                fontWeight: '500',
                fontSize: '0.9rem'
              }}>
                Try Image Gen →
              </div>
            </div>
          </Link>
        </div>

        {/* Footer info */}
        <div style={{
          marginTop: 'var(--spacing-2xl)',
          padding: 'var(--spacing-xl)',
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: 'var(--spacing-2xl) auto 0'
        }}>
          <h4 style={{ 
            fontSize: '1rem', 
            fontWeight: '600', 
            marginBottom: 'var(--spacing-sm)',
            color: 'var(--text-primary)'
          }}>
            Developer Ready
          </h4>
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            lineHeight: '1.6'
          }}>
            Built with React, TypeScript, and minimal dependencies. Ready for Docker deployment with backend endpoints at <code style={{ 
              background: 'var(--bg-accent)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem'
            }}>/api/text</code> and <code style={{ 
              background: 'var(--bg-accent)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem'
            }}>/api/image</code>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
