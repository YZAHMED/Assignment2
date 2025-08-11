import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you! Have questions about our books or need assistance?</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>hello@bookhaven.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>123 Book Street, Literary District<br />Toronto, Ontario, Canada</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">🕒</div>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">💬</div>
            <div>
              <h3>Live Chat</h3>
              <p>Available during business hours</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="subject-select"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Status</option>
                <option value="returns">Returns & Refunds</option>
                <option value="suggestions">Book Suggestions</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              <p>✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours!</p>
            </div>
          )}
        </div>
      </div>

      <div className="contact-availability">
        <h2>Customer Support</h2>
        <p>
          Our dedicated customer support team is here to help you with any questions about our books, 
          orders, or general inquiries. We pride ourselves on providing excellent service to our readers.
        </p>
        <div className="support-features">
          <div className="support-feature">
            <span className="feature-icon">🚚</span>
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="support-feature">
            <span className="feature-icon">🔄</span>
            <span>30-day return policy</span>
          </div>
          <div className="support-feature">
            <span className="feature-icon">💳</span>
            <span>Secure payment processing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
