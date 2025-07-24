import { useState } from 'react';
import Navigation from '../components/Navigation';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const TextChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const currentInput = inputValue;
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: currentInput,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000000); // 30s timeout

    try {
      const response = await fetch('http://52.66.219.240:3001/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: data.response || 'Sorry, I couldn’t process your request.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      clearTimeout(timeout);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content:
          error.name === 'AbortError'
            ? 'The request timed out. Please try again.'
            : `I'm a demo response! Your message was: "${currentInput}". In a real app, this would connect to your AI backend.`,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Text Chat</h1>
          <p className="page-subtitle">
            Chat with AI to generate text responses. Send a message below to get started.
          </p>
        </div>

        <div className="chat-container">
          <div className="chat-messages">
            {messages.length === 0 ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>💬</div>
                  <p>No messages yet. Start a conversation!</p>
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div key={message.id} className={`message ${message.type}`}>
                  <div>
                    <div className="message-label">
                      {message.type === 'user' ? 'You' : 'Assistant'}
                    </div>
                    <div className="message-content">
                      {message.content}
                    </div>
                  </div>
                </div>
              ))
            )}

            {isLoading && (
              <div className="message assistant">
                <div>
                  <div className="message-label">Assistant</div>
                  <div className="message-content">
                    <div className="loading">
                      <div className="spinner"></div>
                      Thinking...
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="chat-input-container">
            <form onSubmit={handleSubmit} className="chat-input-form">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message here..."
                className="form-input"
                disabled={isLoading}
                style={{ flex: 1 }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!inputValue.trim() || isLoading}
              >
                {isLoading ? (
                  <div className="loading">
                    <div className="spinner"></div>
                    Sending
                  </div>
                ) : (
                  'Send'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextChatPage;
