import React from 'react';
import accountImage from '../../assets/Icons/accounts 1.png';
import developerImage from '../../assets/Icons/business 1.png'
import engineering from '../../assets/Icons/chip 1.png'
import designer from '../../assets/Icons/social-media 1.png'

const JobCategory = () => {
    return (
        <div className='border mt-32'>
            <h1 className='text-5xl text-center'>Job Category List</h1>
            <p className='text-center mt-4 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex pt-8 justify-between gap-6'>
                <div className='custom-bg rounded-md w-full p-10'>
                    <img src={developerImage} alt="" className='bg-gray-200 p-2 rounded-md mb-8' />
                    <h1>Developer</h1>
                    <small><p>300 Jobs Available</p></small>
                </div>
                <div className='custom-bg rounded-md w-full p-10'>
                    <img src={accountImage} alt="" className='bg-gray-200 p-2 rounded-md mb-8' />
                    <h1>Finance and Accounts</h1>
                    <small><p>100+ Jobs Available</p></small>
                </div>
                <div className='custom-bg rounded-md w-full p-10'>
                    <img src={designer} alt="" className='bg-gray-200 p-2 rounded-md mb-8' />
                    <h1>UI/UX Designer</h1>
                    <small><p>200 Jobs Available</p></small>
                </div>
                <div className='custom-bg rounded-md w-full p-10'>
                    <img src={engineering} alt="" className='bg-gray-200 p-2 rounded-md mb-8' />
                    <h1>Engineering Jobs</h1>
                    <small><p>150+ Jobs Available</p></small>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;