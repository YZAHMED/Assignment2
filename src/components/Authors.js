import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../utils/apiService';
import './Authors.css';

const Authors = () => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        setLoading(true);
        const authorsData = await apiService.getAuthors();
        setAuthors(authorsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching authors:', err);
        setError('Failed to fetch authors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading our talented authors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="btn btn-primary">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="authors">
      <div className="authors-header">
        <h1>Meet Our Authors</h1>
        <p>Discover the creative minds behind the stories you love</p>
      </div>

      {authors.length === 0 ? (
        <div className="no-authors">
          <h3>No authors available</h3>
          <p>Check back later to meet our amazing authors!</p>
        </div>
      ) : (
        <div className="authors-grid">
          {authors.map((author) => (
            <div key={author._id} className="author-card">
              <div className="author-avatar">
                <div className="placeholder-avatar">
                  {author.name ? author.name.charAt(0).toUpperCase() : '?'}
                </div>
              </div>
              <div className="author-content">
                <h3 className="author-name">{author.name}</h3>
                {author.bio && (
                  <p className="author-bio">{author.bio}</p>
                )}
                {author.birthdate && (
                  <p className="author-birthdate">
                    Writing since: {new Date(author.birthdate).getFullYear()}
                  </p>
                )}
                <div className="author-stats">
                  <div className="stat">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Books</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">4.8</span>
                    <span className="stat-label">Rating</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">1000+</span>
                    <span className="stat-label">Readers</span>
                  </div>
                  </div>
                <div className="author-actions">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => navigate('/books')}
                  >
                    View Books
                  </button>
                  <button className="btn btn-primary">Follow Author</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="authors-info">
        <h3>About Our Authors</h3>
        <p>
          Our authors represent diverse voices and perspectives, bringing unique stories 
          and insights to our collection. From debut authors to established writers, 
          each contributes to the rich tapestry of literature we offer to our readers.
        </p>
        
        <div className="author-features">
          <div className="feature">
            <h4>Diverse Perspectives</h4>
            <p>Authors from different backgrounds and cultures</p>
          </div>
          <div className="feature">
            <h4>Quality Writing</h4>
            <p>Carefully curated for exceptional storytelling</p>
          </div>
          <div className="feature">
            <h4>Reader Engagement</h4>
            <p>Authors who connect with their audience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
