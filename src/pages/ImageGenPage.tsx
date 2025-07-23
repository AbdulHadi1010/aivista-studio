import { useState } from 'react';
import Navigation from '../components/Navigation';

const ImageGenPage = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      // Simulate API call to /api/image
      const response = await fetch('/api/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      
      if (data.image_url) {
        setGeneratedImage(data.image_url);
      } else {
        throw new Error('No image URL received');
      }
    } catch (error) {
      // Fallback for demo purposes - use a placeholder image
      console.log('API call failed, using placeholder');
      setError('API connection failed. Showing placeholder image for demo.');
      // Using a placeholder image service for demo
      setGeneratedImage(`https://picsum.photos/512/512?random=${Date.now()}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPrompt('');
    setGeneratedImage(null);
    setError(null);
  };

  return (
    <>
      <Navigation />
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Image Generation</h1>
          <p className="page-subtitle">
            Generate AI images from text prompts. Describe what you want to see and let AI create it.
          </p>
        </div>

        <div className="image-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="prompt" className="form-label">
                Image Prompt
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to generate... (e.g., 'A futuristic cityscape at sunset with flying cars')"
                className="form-textarea"
                disabled={isLoading}
                rows={4}
              />
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={!prompt.trim() || isLoading}
                style={{ flex: 1 }}
              >
                {isLoading ? (
                  <div className="loading">
                    <div className="spinner"></div>
                    Generating Image...
                  </div>
                ) : (
                  'Generate Image'
                )}
              </button>
              
              {(generatedImage || error) && (
                <button 
                  type="button" 
                  onClick={handleReset}
                  className="btn btn-secondary"
                  disabled={isLoading}
                >
                  Reset
                </button>
              )}
            </div>
          </form>

          {error && (
            <div style={{
              padding: 'var(--spacing-md)',
              background: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: 'var(--radius-md)',
              color: '#dc2626',
              marginBottom: 'var(--spacing-lg)',
              fontSize: '0.9rem'
            }}>
              {error}
            </div>
          )}

          {isLoading && (
            <div className="image-placeholder">
              <div style={{ textAlign: 'center' }}>
                <div className="spinner" style={{ width: '32px', height: '32px', marginBottom: 'var(--spacing-md)' }}></div>
                <div>Generating your image...</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: 'var(--spacing-sm)' }}>
                  This may take a few moments
                </div>
              </div>
            </div>
          )}

          {generatedImage && !isLoading && (
            <div>
              <img 
                src={generatedImage} 
                alt={`Generated image: ${prompt}`}
                className="generated-image"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/512x512/f3f4f6/6b7280?text=Image+Not+Found`;
                }}
              />
              <div style={{ 
                marginTop: 'var(--spacing-md)', 
                padding: 'var(--spacing-md)',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
              }}>
                <strong>Prompt:</strong> {prompt}
              </div>
            </div>
          )}

          {!generatedImage && !isLoading && !error && (
            <div className="image-placeholder">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>🎨</div>
                <div>Your generated image will appear here</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageGenPage;