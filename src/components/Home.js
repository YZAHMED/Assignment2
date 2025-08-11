import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BookHaven</h1>
          <h2>Discover Your Next Great Read</h2>
          <p className="tagline">
            Explore our curated collection of books from talented authors around the world. 
            From fiction to non-fiction, we have something for every reader.
          </p>
          <div className="cta-buttons">
            <Link to="/books" className="btn btn-primary">Browse Books</Link>
            <Link to="/authors" className="btn btn-secondary">Meet Authors</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose BookHaven?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Curated Collection</h3>
            <p>Carefully selected books across all genres and interests</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">✍️</div>
            <h3>Talented Authors</h3>
            <p>Discover new voices and established writers</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping to your doorstep</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Expert Support</h3>
            <p>Our team is here to help you find the perfect book</p>
          </div>
        </div>
      </section>

      <section className="featured-books">
        <h2>Featured Collections</h2>
        <div className="collections-grid">
          <div className="collection-card">
            <div className="collection-image">
              <div className="placeholder-image">📖</div>
            </div>
            <div className="collection-content">
              <h3>Fiction & Literature</h3>
              <p>Explore imaginative worlds and compelling stories that transport you to new realms.</p>
              <Link to="/books" className="collection-link">Explore Collection →</Link>
            </div>
          </div>
          
          <div className="collection-card">
            <div className="collection-image">
              <div className="placeholder-image">🔬</div>
            </div>
            <div className="collection-content">
              <h3>Science & Technology</h3>
              <p>Stay updated with the latest discoveries and technological advancements.</p>
              <Link to="/books" className="collection-link">Explore Collection →</Link>
            </div>
          </div>
          
          <div className="collection-card">
            <div className="collection-image">
              <div className="placeholder-image">🎨</div>
            </div>
            <div className="collection-content">
              <h3>Arts & Culture</h3>
              <p>Immerse yourself in the world of creativity and cultural expression.</p>
              <Link to="/books" className="collection-link">Explore Collection →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for new releases, author events, and exclusive offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
