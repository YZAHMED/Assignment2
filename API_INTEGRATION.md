# API Integration

## Backend URL
https://assignment1-tc7d.onrender.com

## API Endpoints
- GET /api/authors
- GET /api/books  
- GET /api/books/:id

## Files
- src/config/api.js - API configuration
- src/utils/apiService.js - API service functions
- src/components/Authors.js - Fetches authors
- src/components/Books.js - Fetches books

## Usage
```javascript
import apiService from '../utils/apiService';

const authors = await apiService.getAuthors();
const books = await apiService.getBooks();
```

## Testing
1. Start frontend: npm start
2. Check browser console for API logs
3. Verify data is displayed on pages
