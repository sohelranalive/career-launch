import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='custom-bg'>
            <nav className='custom-area md:grid md:grid-cols-4 md:py-8 items-center'>
                {/* <nav className='border custom-area md:flex justify-between items-center py-8'> */}
                <div className='col-span-1 mb-5 md:mb-0 text-center md:text-start'>
                    <Link to='/' className='text-3xl'>CareerLaunch</Link>
                </div>
                <div className='col-span-2 flex md:justify-around justify-between mb-5 md:mb-0'>
                    {/* <NavLink to='/' className='ms-8 f-dark'>Home</NavLink>
                    <NavLink to='/statistics' className='ms-8 f-dark'>Statistics</NavLink>
                    <NavLink to='/appliedjobs' className='ms-8 f-dark'>Applied Jobs</NavLink>
                    <NavLink to='/blog' className='ms-8 f-dark'>Blog</NavLink> */}
                    <NavLink to='/' className='f-dark'>Home</NavLink>
                    <NavLink to='/statistics' className='f-dark'>Statistics</NavLink>
                    <NavLink to='/appliedjobs' className='f-dark'>Applied Jobs</NavLink>
                    <NavLink to='/blog' className='f-dark'>Blog</NavLink>
                </div>
                <div className='text-white col-span-1 text-center md:text-right'>
                    <a href="#feature-jobs-area"><button href="#feature-jobs-area" className='btn-bg'>Start Applying</button></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;