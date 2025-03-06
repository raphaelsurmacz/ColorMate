import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg'

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <img src={logo} alt="Logo" className="colormate__logo" />
            </Link>

            <Link to='/' className='header__link'>
                <h1>Color Mate</h1>
            </Link>
        </div>
    )
};

export default Header;