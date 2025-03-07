import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <img src={logo} alt="Logo" className="colormate__logo" />
            </Link>

            <nav className='header__nav'>
                <Link to='/'>
                    Home
                </Link>

                <Link to='/'>
                    About
                </Link>
                
                <button>Logout</button>
            </nav>

            
            {/* 
            <Link to='/' className='header__link'>
                <h1>Color Mate</h1>
            </Link> */}
        </div>
    )
};

export default Header;