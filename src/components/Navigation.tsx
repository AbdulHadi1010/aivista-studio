import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-brand">
          DevAI Tools
        </Link>
        <div className="nav-links">
          <Link 
            to="/text" 
            className={`nav-link ${location.pathname === '/text' ? 'active' : ''}`}
          >
            Text Chat
          </Link>
          <Link 
            to="/image" 
            className={`nav-link ${location.pathname === '/image' ? 'active' : ''}`}
          >
            Image Gen
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;