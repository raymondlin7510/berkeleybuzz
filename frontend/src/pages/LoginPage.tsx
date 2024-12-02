import React, { useState, useEffect } from 'react';
import '../styles/LoginPage.css';
  
  const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      //do whatever to handle the submit WARNING
    }

    return (
      <div className="wrapper">
        <div className="inputWrapper">
          <h1 className="loginTitle">Login</h1>
          <form onSubmit={handleSubmit} className="loginForm">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

export default LoginPage;