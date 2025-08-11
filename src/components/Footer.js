import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BookHaven</h3>
          <p>Your online literary paradise, bringing you the best books from talented authors around the world.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Fiction & Literature</li>
            <li>Science & Technology</li>
            <li>Arts & Culture</li>
            <li>Business & Finance</li>
            <li>Health & Wellness</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Customer Service</h4>
          <p>📧 hello@bookhaven.com</p>
          <p>📱 +1 (555) 123-4567</p>
          <p>📍 Toronto, Ontario, Canada</p>
          <p>🕒 Mon-Fri: 9AM-6PM</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} BookHaven. All rights reserved.</p>
        <p>Built with React and connected to a Node.js backend API</p>
      </div>
    </footer>
  );
};

export default Footer;
