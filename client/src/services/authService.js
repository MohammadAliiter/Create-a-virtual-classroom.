const API_URL = 'http://localhost:5000/api/auth';

// Function to log in a user
export const login = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Login failed');
    const data = await response.json();
    localStorage.setItem('token', data.token);
};

// Function to register a new user
export const register = async (username, email, password, role) => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role }),
    });
    if (!response.ok) throw new Error('Registration failed');
    const data = await response.json();
    localStorage.setItem('token', data.token);
};

