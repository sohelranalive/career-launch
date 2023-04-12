import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobReview from '../JobReview/JobReview';

const AppliedJobs = () => {

    const appliedJobs = useLoaderData()

    return (
        <div>
            <h1 className='text-3xl text-center custom-bg p-10'>Applied Job</h1>
            <div className='custom-area mt-20 mb-20'>
                <button>Filter</button>
                <br />
                <br />
                {
                    appliedJobs.map(job => <JobReview job={job}></JobReview>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;