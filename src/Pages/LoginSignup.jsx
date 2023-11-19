import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-shadow'></div>
      <div className="loginsignup-child">
        <div className="loginsignup-title">
         <h1>Login Here</h1>
        </div>
          <div className="loginsignup-input">
          <input type="email" placeholder='Your email'/>
          <input type="password" placeholder='Password' />
          </div>
          <button>Submit</button>      
          <p>Don't have an account?</p>
          <a href="/">Signup</a>
      </div>
    </div>
  )
}

export default LoginSignup
