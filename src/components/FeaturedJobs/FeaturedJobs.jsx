import React, { useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = ({ loaderData }) => {

    const [jobs, setJobs] = useState(loaderData.slice(0, 4))

    const handleAllJobs = () => {
        setJobs(loaderData);
    }

    return (
        <div className='mt-32 mb-32'>
            <h1 className='text-5xl text-center'>Featured Jobs</h1>
            <p className='text-center mt-4 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-8 grid grid-cols-2 gap-6'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className='text-center'>
                <button onClick={handleAllJobs} className='btn-bg mt-10'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;