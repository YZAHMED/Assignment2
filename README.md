# BookHaven Frontend

A React frontend for a bookstore website that connects to a Node.js backend API.

## Features

- View all books
- View all authors  
- Search books
- Shopping cart functionality
- Contact form

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open http://localhost:3000 in your browser

## Backend API

The frontend connects to: https://assignment1-tc7d.onrender.com

## API Endpoints

- `/api/authors` - Get all authors
- `/api/books` - Get all books

## Technologies Used

- React
- Axios for API calls
- CSS for styling

## Project Structure

```
src/
├── components/     # React components
├── config/        # API configuration
└── utils/         # API service functions
```

## Notes

- Make sure the backend has CORS enabled
- The backend should be running for the frontend to work
