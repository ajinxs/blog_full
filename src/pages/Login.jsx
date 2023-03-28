import React from 'react'
import { Link } from 'react-router-dom';
import '../../src/style.scss'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="username" placeholder='username' required />
            <input type="password" placeholder='password' required />
            <button>LOGIN</button>
            <p>This is an error!</p>
            <span>Dont't have an account? <Link to="/register">Register</Link></span>
        </form>
    </div>
  )
}

export default Login