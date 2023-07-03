import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/posts">posts</Link>
            </nav>
            <p>Common header</p>
        </div>
    );
};

export default Header;