import React from 'react';

const Job = ({ job }) => {

    const { companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrPartTime, location, salary } = job;

    return (
        <div className='border rounded-md p-10'>
            <img src={companyLogo} alt="" className="h-10 w-36" />
            <h1 className='mt-8'>{jobTitle}</h1>
            <p className='f-dark mt-2'>{companyName}</p>
            <div className='flex gap-2 mt-4'>
                <button className='border rounded-md px-5 py-2 border-purple-900 f-blue'>{remoteOrOnsite}</button>
                <button className='border rounded-md px-5 py-2 border-purple-900 f-blue'>{fulltimeOrPartTime}</button>
            </div>
            <div className='flex gap-6 f-dark mt-4'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className='mt-6 btn-details'>View Details</button>
        </div>
    );
};

export default Job;