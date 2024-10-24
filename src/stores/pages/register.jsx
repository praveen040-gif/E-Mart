import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <body className='registerbody'>
    <div className="register-container">
        <h2 className='registertitle'>Welcome to E-Mart</h2>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required/>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required/>

            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required/>

            <button type="submit">Register</button>
        </form>

        <p className="signin-text">Already registered? <Link to='/login'><a href="#">Click here to sign in</a></Link></p>
    </div>
</body>
    </>
  )
}

export default Register
