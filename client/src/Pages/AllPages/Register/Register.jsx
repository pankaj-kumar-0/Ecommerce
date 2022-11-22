import React from 'react';
import './Register.css';
import Button from '../../../Components/Button/Button'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <form >
        <input type="text" placeholder='Username' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <div className="btn_box">
        <Button to_="/" btn_name="Register" />
        </div>
        <p>I have account <Link to='/login' className='pass_link' >Login</Link></p>
            
      </form>
    </div>
  )
}

export default Register;
