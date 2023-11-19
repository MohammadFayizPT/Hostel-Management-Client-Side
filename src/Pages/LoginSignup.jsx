import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your authentication logic here
    // For simplicity, let's assume a valid email and password for demonstration
    const isValidUser = email === 'example@email.com' && password === 'password123';

    if (isValidUser) {
      // Redirect to the home page if the credentials are valid
      navigate('/home');
    } else {
      // Handle authentication failure (e.g., show an error message)
      if (email !== 'example@email.com') {
        alert('Invalid username');
      }
      else if (password !== 'password123'){
        alert('Invalid password');
      }
      
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-shadow'></div>
      <div className="loginsignup-child">
        <div className="loginsignup-title">
          <h1>Login Here</h1>
        </div>
        <div className="loginsignup-input">
          <input
            type="email"
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Submit
        </button>
        <p>Don't have an account?</p>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default LoginSignup;