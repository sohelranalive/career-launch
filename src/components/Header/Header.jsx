import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='custom-bg'>
            <nav className='custom-area md:flex justify-between items-center py-8'>
                <div className=''>
                    <Link to='/' className='text-3xl'>CareerLaunch</Link>
                </div>
                <div className=''>
                    <NavLink to='/' className='ms-8 f-dark'>Home</NavLink>
                    <NavLink to='/statistics' className='ms-8 f-dark'>Statistics</NavLink>
                    <NavLink to='/appliedjobs' className='ms-8 f-dark'>Applied Jobs</NavLink>
                    <NavLink to='/blog' className='ms-8 f-dark'>Blog</NavLink>
                </div>
                <div className='text-white'>
                    <button className='btn-bg'>Start Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;