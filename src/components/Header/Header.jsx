import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-300 flex justify-around py-4 text-lg '>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/grandpa">Grandpa</Link>
            <Link to="/">Home</Link>
        </nav>
    );
};

export default Header;