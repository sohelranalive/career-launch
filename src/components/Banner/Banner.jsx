import React from 'react';
import bannerImage from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='custom-area flex justify-between items-center'>
            <div className=''>
                <h1 className='text-7xl'>CareerLaunch:<br />Linking You to Your<br /><span className='f-blue'>Dream Job</span></h1>
                <p className='w-10/12 mt-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-bg mt-8'>Get Started</button>
            </div>
            <div className=''>
                <img src={bannerImage} alt="" className='' />
            </div>
        </div>
    );
};

export default Banner;