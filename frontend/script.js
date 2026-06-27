const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginToggle = document.getElementById('login-toggle');
const signupToggle = document.getElementById('signup-toggle');
const API_URL = 'http://localhost:5000/api';

// Toggle between login and signup
loginToggle.addEventListener('click', () => {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
});

signupToggle.addEventListener('click', () => {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupToggle.classList.add('active');
    loginToggle.classList.remove('active');
});

// Login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const messageEl = loginForm.querySelector('.message');

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            messageEl.textContent = 'Login successful!';
            messageEl.classList.remove('error');
            messageEl.classList.add('success');
            localStorage.setItem('token', data.token);
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        } else {
            messageEl.textContent = data.message || 'Login failed';
            messageEl.classList.add('error');
        }
    } catch (error) {
        messageEl.textContent = 'Error connecting to server';
        messageEl.classList.add('error');
    }
});

// Signup form submission
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const messageEl = signupForm.querySelector('.message');

    if (password !== confirmPassword) {
        messageEl.textContent = 'Passwords do not match';
        messageEl.classList.add('error');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            messageEl.textContent = 'Signup successful! Please login.';
            messageEl.classList.remove('error');
            messageEl.classList.add('success');
            signupForm.reset();
            setTimeout(() => {
                loginToggle.click();
            }, 1500);
        } else {
            messageEl.textContent = data.message || 'Signup failed';
            messageEl.classList.add('error');
        }
    } catch (error) {
        messageEl.textContent = 'Error connecting to server';
        messageEl.classList.add('error');
    }
});