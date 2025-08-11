import React, { useState, useEffect } from 'react';
import apiService from '../utils/apiService';
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const booksData = await apiService.getBooks();
        setBooks(booksData);
        setError(null);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('Failed to fetch books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const addToCart = (book) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === book._id);
      if (existingItem) {
        return prevCart.map(item =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(item => item._id !== bookId));
  };

  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(bookId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item._id === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (book.author && book.author.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const cartTotal = cart.reduce((total, item) => total + (item.quantity * 29.99), 0);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading our book collection...</p>
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
    <div className="books-page">
      <div className="books-header">
        <h1>Our Book Collection</h1>
        <p>Discover amazing stories from talented authors around the world</p>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search books or authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="books-layout">
        <div className="books-main">
          {filteredBooks.length === 0 ? (
            <div className="no-books">
              <h3>No books found</h3>
              <p>Try adjusting your search terms or check back later for new additions!</p>
            </div>
          ) : (
            <div className="books-grid">
              {filteredBooks.map((book) => (
                <div key={book._id} className="book-card">
                  <div className="book-image">
                    <div className="placeholder-image">📖</div>
                  </div>
                  <div className="book-content">
                    <h3 className="book-title">{book.title}</h3>
                    {book.author && (
                      <p className="book-author">By: {book.author.name}</p>
                    )}
                    {book.summary && (
                      <p className="book-summary">{book.summary}</p>
                    )}
                    {book.publishedYear && (
                      <p className="book-year">Published: {book.publishedYear}</p>
                    )}
                    <div className="book-price">$29.99</div>
                    <div className="book-actions">
                      <button 
                        onClick={() => addToCart(book)}
                        className="btn btn-primary add-to-cart-btn"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-sidebar">
          <div className="cart-header">
            <h3>Shopping Cart</h3>
            <span className="cart-count">{cart.length} items</span>
          </div>
          
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <p>Add some books to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item._id} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.title}</h4>
                      <p className="cart-item-author">
                        {item.author ? item.author.name : 'Unknown Author'}
                      </p>
                      <p className="cart-item-price">$29.99</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item._id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ${cartTotal.toFixed(2)}</strong>
                </div>
                <button className="btn btn-primary checkout-btn">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
