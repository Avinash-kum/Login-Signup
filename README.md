# Login & Signup Application

A full-stack web application with Login and Signup functionality.

## Project Structure

```
Login-Signup/
├── frontend/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Styling
│   └── script.js       # Frontend logic
├── backend/
│   ├── app.py          # Flask application
│   ├── requirements.txt # Python dependencies
│   └── .env.example    # Environment variables example
├── .gitignore
└── README.md
```

## Features

- User registration (Signup)
- User login
- JWT-based authentication
- SQLite database
- Beautiful responsive UI
- CORS enabled

## Installation

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Create virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

5. Run the Flask app:
   ```bash
   python app.py
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Open `frontend/index.html` in your browser or serve it using a local server:
   ```bash
   cd frontend
   python -m http.server 8000  # Or any other simple server
   ```

The frontend will be available at `http://localhost:8000`

## API Endpoints

- `POST /api/signup` - Register a new user
- `POST /api/login` - Login user
- `GET /api/user` - Get user profile (requires JWT token)
- `GET /api/health` - Health check

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask, SQLite
- **Authentication**: JWT (JSON Web Tokens)
- **CORS**: Enabled for cross-origin requests

## License

MIT License