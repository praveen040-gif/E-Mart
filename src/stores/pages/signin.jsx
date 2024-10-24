import React from 'react'
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <>
    {/* <Navbar/> */}
    <body className='signinbody'>
        <div className="login-container">
        <h2 className='signintitle'>Welcome to E-Mart Login</h2>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required/>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required/>

            <button type="submit">Sign In</button>
        </form>

        <p className="register-text">Are you not registered? <Link to="/register"><a href="#">Click here to register</a></Link></p>
    </div>
    </body>


    </>

  )
}

export default Signin
