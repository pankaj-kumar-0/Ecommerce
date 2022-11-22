import React from 'react';
import './Register.css';
import Button from '../../../Components/Button/Button'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='register' >
      <form >
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <div className="btn_box">
        <Button to_="/" btn_name="Login" />
        </div>
        <p><Link to='/register' className='pass_link' >Create Account</Link></p>
            
      </form>
    </div>
  )
}

export default Login;
