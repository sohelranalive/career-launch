import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobReview from '../JobReview/JobReview';

const AppliedJobs = () => {

    const appliedJobsData = useLoaderData()


    const [appliedJobs, setAppliedJobs] = useState(appliedJobsData)


    const handleFilterRemoteJobs = () => {
        const remoteJobs = appliedJobsData.filter(aj => aj.remoteOrOnsite === 'Remote')
        setAppliedJobs(remoteJobs)
    }


    const handleFilterOnsiteJobs = () => {
        const onsiteJobs = appliedJobsData.filter(aj => aj.remoteOrOnsite === 'Onsite')
        setAppliedJobs(onsiteJobs)
    }


    return (
        <div>
            <h1 className='text-3xl text-center custom-bg p-10'>Applied Job</h1>
            <div className='custom-area mt-20 mb-20'>
                <div className='flex gap-2 justify-end items-center'>
                    <small>Filter By: </small>
                    <button onClick={handleFilterRemoteJobs} className='border rounded-md px-3 py-1 border-purple-900 hover:bg-indigo-200'>Remote</button>
                    <button onClick={handleFilterOnsiteJobs} className='border rounded-md px-3 py-1 border-purple-900 hover:bg-indigo-200'>Onsite</button>
                </div>

                <br />
                <br />
                {
                    appliedJobs.map(job => <JobReview key={job.id} job={job}></JobReview>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;