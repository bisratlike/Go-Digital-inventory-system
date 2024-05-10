import React, { createContext, useState, useContext, useEffect } from 'react';
import login from '../pages/Login'; // The login function from step 1

// Create a context for user authentication
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider to manage user login and authentication state
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to handle login
  async function handleLogin(email, password) {
    const userData = await login(email, password); // Login function
    setUser(userData); // Set user in state
  }

  // Function to handle logout
  function Logout() {
    localStorage.removeItem('authToken');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
