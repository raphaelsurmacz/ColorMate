import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <img src={logo} alt="Logo" className="colormate__logo" />
            </Link>

            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
                <button className="header__logout">Logout</button>
            </nav>
        </header>
    );
};

export default Header;
