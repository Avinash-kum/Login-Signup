# Deployment Guide

## Frontend Deployment (Netlify)

### Step 1: Push to GitHub
Your project is already on GitHub at: https://github.com/Avinash-kum/Login-Signup

### Step 2: Connect to Netlify
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Choose GitHub and authorize
4. Select `Avinash-kum/Login-Signup` repository
5. Set build settings:
   - **Base directory**: `frontend`
   - **Build command**: Leave empty (no build needed for static files)
   - **Publish directory**: `frontend`
6. Click "Deploy site"

### Step 3: Update API Configuration
After backend is deployed on Heroku:
1. Get your Heroku app URL (e.g., `https://your-app-name.herokuapp.com`)
2. Update `frontend/config.js`:
   ```javascript
   const API_URL = window.location.hostname === 'localhost' 
       ? 'http://localhost:5000/api'
       : 'https://your-app-name.herokuapp.com/api';  // Update this
   ```
3. Commit and push changes - Netlify will auto-deploy

---

## Backend Deployment (Heroku)

### Step 1: Install Heroku CLI
```bash
npm install -g heroku
# or brew install heroku (macOS)
```

### Step 2: Login to Heroku
```bash
heroku login
```

### Step 3: Create Heroku App
```bash
cd backend
heroku create your-app-name
```

### Step 4: Set Environment Variables
```bash
heroku config:set JWT_SECRET_KEY=your-secret-key-here
heroku config:set FLASK_ENV=production
```

### Step 5: Deploy
```bash
git push heroku main
```

### Step 6: Check Logs
```bash
heroku logs --tail
```

### Step 7: Verify Deployment
```bash
curl https://your-app-name.herokuapp.com/api/health
```

---

## Final Steps

1. Update `frontend/config.js` with your Heroku URL
2. Commit and push to GitHub
3. Netlify automatically deploys when you push
4. Test your application on Netlify with the backend on Heroku

---

## Useful Commands

### Heroku
```bash
heroku apps                    # List all apps
heroku logs --tail             # View logs
heroku config                  # View env variables
heroku restart                 # Restart app
heroku open                    # Open app in browser
```

### Netlify
- Automatic deployments when you push to GitHub
- Deployment history in Netlify Dashboard
- Custom domain configuration in Site Settings
