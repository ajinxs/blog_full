import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type="username" placeholder='username' required />
        <input type="email" placeholder='email' required />
        <input type="password" placeholder='password' required />
        <button>REGISTER</button>
        <p>This is an error!</p>
        <span>Do you have an account already? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register