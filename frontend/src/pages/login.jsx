import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useAuthContext } from '../context/authContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup'); 
  };

  const handleLogin = async () => {
    try {
      console.log(username);
      console.log(password);
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/signin',
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = response.data;
      console.log(token);
      localStorage.setItem('jwtToken', token);
      

      const tkn = localStorage.getItem('jwtToken');
      console.log(tkn);
    

      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp9764009.jpg")' }}>
      <div className="w-full max-w-md border border-gray-300 border-solid bg-[#030712]  p-8 rounded shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mt-4">Login</h2>
          <p className="text-sm text-white mb-4">Login to your account in seconds</p>
        </div>

        <input
          type="text"
          placeholder="Email Address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-solid border-gray-300 bg-[#030712] rounded placeholder-gray-100 text-white font-sans focus:outline-none f focus:border-gray-100"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-solid border-gray-300 bg-[#030712] rounded placeholder-gray-100 text-white font-sans focus:outline-none f focus:border-gray-100"
        />

        <button
          className="w-full ml-2 border border-solid border-gray-300 bg-[#030712] text-white py-2 rounded hover:bg-gray-200 hover cursor-pointer transition"
          onClick={handleLogin}
        >
          Log in
        </button>

        <p className="mt-4 text-center text-white text-sm text-black">
          Don't have an account?{' '}
          <a
            onClick={handleSignupClick}
            className="text-gray-100 cursor-pointer hover:underline"
          >
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
