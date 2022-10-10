import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className=' h-12 flex md-flex items-center justify-around bg-blue-200'>
                <div>
                    <h1 className='text-3xl'>Quiz Mania</h1>
                </div>
                <div>
                    <Link className='px-4' to='/'>Home</Link>
                    <Link className='px-4' to='/statistics'>Statistics</Link>
                    <Link className='px-4' to='/blog'>Blog</Link>
                </div>
            </nav>
        </div >
    );
};

export default NavBar;