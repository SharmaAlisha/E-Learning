import React, { useState } from 'react';
import './signup.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleCheckboxChange = () => {
      setKeepLoggedIn(!keepLoggedIn);
  };

  const handleLogin = () => {
    console.log('Logging in...');
  };
  const [href, setHref] = useState('#');

  const handleClick = () => {
    setHref('http://localhost:3000/login');
  };


  return (
    <div className="login-container">
      <div className="left-half">
        <img src="/Rectangle 1.png" alt="Login Image" />
      </div>

        <div className='login'>Signup</div>
        <div className='b'>Create your account in seconds</div>
        <input
          type="text"
          placeholder="First Name:"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className='inputfn'
        />
        <input
          type="text"
          placeholder="Last Name:"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className='inputln'
        />
        <input
          type="text"
          placeholder="Email Address:"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='inputas'
        />
        <input
          type="password"
          placeholder="Create Password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='inputbs'
        />
      <div className="checkbox-containers">
          <input
              type="checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={handleCheckboxChange}
          />
      </div>
       <div  className='kps'>I agree to the terms and privacy policy</div>
        <button className="login-buttons" onClick={handleLogin}>Create an Account</button>

        <div>
      <p className='donts'>Already a member <a className="sign" href={href} onClick={handleClick}>Login</a></p>
    </div>

      <div className="containers" style={{ position: 'absolute', width: '422px', height: '19px', left: '925px', top: '803px', display: 'flex', alignItems: 'center'  }}>
        <hr className="line" style={{ flex: '1', marginRight: '10px', borderTop: '1px solid black' }} />
        <span className="text">    Or continue with    </span>
        <hr className="line" style={{ flex: '1', marginLeft: '10px', borderTop: '1px solid black' }} />
      </div>

      <div class="social-login-container">
          <div class="social-login-option" >
              <img  className='gs' src="/Google.png"/>
             <img  className='fs'  src="/Facebook.png"/>
             <img  className='is'  src="/Instagram.png"  />
             <img  className='ts'  src="/Twitter.png"  />
             
              
             
          </div>
      </div>



      </div>
       
  
  );
};

export default SignupPage;
