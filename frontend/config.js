// API Configuration
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api'  // Development
    : 'https://your-backend-url.herokuapp.com/api';  // Production - Update with your Heroku URL