import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'

const JobDetails = () => {

    const { id } = useParams();


    const [jobDetails, setJobDetails] = useState([])

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => {
                const singleData = data.find(d => d.id === id)
                setJobDetails(singleData)
            })
    }, [])

    const handleApplyJob = (jobId) => {
        addToDb(jobId);
    }

    const { jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, location, email, phone } = jobDetails;

    return (
        <div className=''>
            <h1 className='text-3xl text-center custom-bg p-10'>Job Details</h1>
            <div className='custom-area mt-20 flex mb-20'>
                <div className='w-3/4 pr-4'>
                    <p className='mt-4'>Job Description: <span className='f-dark'>{jobDescription}</span></p>
                    <p className='mt-4'>Job Responsibility: <span className='f-dark'>{jobResponsibility}</span></p>
                    <p className='mt-4'>Educational Requirement: <br /><br />
                        <span className='f-dark'>{educationalRequirements}</span></p>
                    <p className='mt-4'>Experience: <br /><br />
                        <span className='f-dark'>{experiences}</span></p>
                </div>
                <div className='w-1/4'>
                    <div className='custom-bg px-4 py-4 rounded-md'>

                        <p>Job Details</p>
                        <br />
                        <hr />
                        <div className='flex items-center'>
                            <CurrencyDollarIcon className="h-6 w-6 text-indigo-400" />
                            <p className='py-2 ps-2'> Salary: {salary}</p>
                        </div>
                        <div className='flex items-center'>
                            <BriefcaseIcon className="h-6 w-6 text-indigo-400" />
                            <p className='ps-2'>Job Title: {jobTitle}</p>
                        </div>
                        <br />
                        <p>Contact Info</p>
                        <br />
                        <hr />
                        <div className='flex items-center'>
                            <PhoneIcon className="h-6 w-6 text-indigo-400" />
                            <p className='py-2 ps-2'>Phone: {phone}</p>
                        </div>
                        <div className='flex items-center'>
                            <EnvelopeIcon className="h-6 w-6 text-indigo-400" />
                            <p className='ps-2 py-2'>Email: {email}</p>
                        </div>
                        <div className='flex items-center'>
                            <MapPinIcon className="h-6 w-6 text-indigo-400" />
                            <p className='ps-2'>Address: {location}</p>
                        </div>
                    </div>
                    <button onClick={() => handleApplyJob(jobDetails.id)} className='bg-green-300 border mt-8 mx-auto w-full btn-bg-color text-white py-3 rounded-md'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;