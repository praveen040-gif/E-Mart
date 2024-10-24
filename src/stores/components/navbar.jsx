import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartcontext'

const Navbar = () => {

  const {cartitems}=useCart()
  return (
    <>
      {/* <div className="navsection">
        <Link to='/' class="link-section"><div className="title">
        <h1>E-Mart</h1>
        </div></Link>

        <div className="search">
            <input type='text' placeholder='"Search for products..."'/>
        </div>
        <Link to='/login' className='link-section'>
        <div className="user">
            <div className="user-detail">
                Login
            </div>
        </div>
        </Link>

            <div className="cart">
                <Link to="/cart" className='link-section'>cart <span className='length'>{cartitems.length}</span></Link>
            </div>
        </div> */}
            <nav class="navbar">
        <Link to='/' class="link-section"><div class="navbar-left">
            <h1>E-Mart</h1>
        </div></Link>
        <div class="navbar-center">
            <input type="text" placeholder="Search for products..."/>
        </div>
        <div class="navbar-right">
            <Link to='/login' className='link-section'><a href="#">Login</a></Link>
            <Link to="/cart" className='link-section'><a href="#" className='cart'>Cart <span className='length'>{cartitems.length}</span></a></Link>
        </div>
    </nav>
      <div className="submenu">
        <ul>
           <Link to='/mobile' className='link-section'><li>Mobiles</li></Link>
            <Link to='/computers' className='link-section'><li>Computers</li></Link>
            <Link to='/ac' className='link-section'><li>Ac</li></Link>
            {/* <Link to='/books' className='link-section'><li>Books</li></Link> */}
            <Link to='/fridge' className='link-section'><li>Fridge</li></Link>
            <Link to='/furniture' className='link-section'><li>Furniture</li></Link>
            <Link to='/kitchen' className='link-section'><li>Kitchen</li></Link>
            <Link to='/men' className='link-section'><li>Mens</li></Link>
            <Link to='/speaker' className='link-section'><li>Speakers</li></Link>
            <Link to='/tv' className='link-section'><li>Tv</li></Link>
            <Link to='/watch' className='link-section'><li>Watch</li></Link>
            <Link to='/women' className='link-section'><li>Women</li></Link>
        </ul>
      </div>
      </>
  )
}

export default Navbar
