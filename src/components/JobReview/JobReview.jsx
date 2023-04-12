import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';


const JobReview = ({ job }) => {

    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrPartTime, salary, location } = job


    const navigate = useNavigate();

    const handleJobDetails = (id) => {
        navigate(`/jobdetails/${id}`);
    }

    return (
        <div className='border rounded-md flex justify-between items-center p-4 mb-4'>
            <div className='flex items-center'>
                <div className='bg-gray-200 rounded-md h-60 w-60 flex justify-center items-center p-2'>
                    <img src={companyLogo} alt="" />
                </div>
                <div className='ms-4'>

                    <h1>{jobTitle}</h1>
                    <p className='f-dark mt-2'>{companyName}</p>
                    <div className='flex gap-2 mt-4'>
                        <button className='border rounded-md px-5 py-2 border-purple-900 f-blue'>{remoteOrOnsite}</button>
                        <button className='border rounded-md px-5 py-2 border-purple-900 f-blue'>{fulltimeOrPartTime}</button>
                    </div>
                    <div className='flex gap-6 f-dark mt-4'>
                        <div className='flex gap-2'>
                            <MapPinIcon className="h-6 w-6" />
                            <p>{location}</p>
                        </div>
                        <div className='flex gap-2'>
                            <CurrencyDollarIcon className="h-6 w-6" />
                            <p>{salary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleJobDetails(id)} className='bg-green-300 border w-full btn-bg-color text-white px-3 py-3 rounded-md'>View Details</button>
            </div>
        </div>
    );
};

export default JobReview;