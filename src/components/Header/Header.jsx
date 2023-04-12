import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='custom-bg'>
            <nav className='custom-area md:grid md:grid-cols-4 md:py-8 items-center'>
                <div className='col-span-1 mb-5 md:mb-0 text-center md:text-start'>
                    <Link to='/' className='text-3xl'>CareerLaunch</Link>
                </div>
                <div className='col-span-2 flex md:justify-around justify-between mb-5 md:mb-0 f-dark'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/appliedjobs'>Applied Jobs</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>
                <div className='text-white col-span-1 text-center md:text-right'>
                    <a href="#feature-jobs-area"><button href="#feature-jobs-area" className='btn-bg'>Start Applying</button></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;