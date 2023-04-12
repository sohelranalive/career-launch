import React from 'react';
import bannerImage from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        // <div className='custom-area md:flex items-center md:h-[calc(100vh-129px)] w-full'>
        //     <div className='h-5/6 w-3/5'>
        //         <h1 className='text-6xl'>CareerLaunch:<br />Linking You to Your<br /><span className='f-blue'>Dream Job</span></h1>
        //         <p className='w-10/12 mt-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        //         <a href="#feature-jobs-area"><button className='btn-bg mt-8'>Get Started</button></a>
        //     </div>
        //     <div className='h-full w-2/5'>
        //         <img src={bannerImage} alt="" className='w-full h-full' />
        //     </div>
        // </div>
        <div className='custom-area md:grid grid-cols-3 text-center md:text-start'>
            <div className='col-span-2 py-14'>
                {/* <h1 className='text-6xl'>CareerLaunch:<br />Linking You to Your<br /><span className='f-blue'>Dream Job</span></h1> */}
                <h1 className='text-6xl'>Linking You to Your <span className='f-blue'>Dream Job</span></h1>
                <p className='mt-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <a href="#feature-jobs-area"><button className='btn-bg mt-8'>Get Started</button></a>
            </div>
            <div className='col-span-1'>
                <img src={bannerImage} alt="" className='w-full h-full' />
            </div>
        </div>
    );
};

export default Banner;