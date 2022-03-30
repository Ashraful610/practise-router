import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className='bg-sky-300 text-3xl p-4'>
       <Link to='/' className='mr-9
        text-white font-semibold no-underline'>
           Home
        </Link>
       <Link to='/products' className='mr-9 text-white font-semibold no-underline'>
           Product
        </Link>
       <Link to='/contact' className='mr-9 text-white font-semibold no-underline'>
           Contact
        </Link>
       <Link to='/about' className='mr-9 text-white font-semibold no-underline'>
           About
        </Link>
            </nav>
        </div>
        
    );
};

export default Header;