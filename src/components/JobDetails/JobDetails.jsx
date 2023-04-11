import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';

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



    return (
        <div>
            <h1 className='text-3xl text-center custom-bg p-12'>Job Details</h1>
            <div className='custom-area mt-32 flex'>
                <div className='border w-3/4'>
                    <p className='text-1xl'>Job Description: <span className='f-dark'>{jobDetails.jobDescription}</span></p>
                    <p className='text-1xl'>Job Responsibility: <span className='f-dark'>{jobDetails.jobResponsibility}</span></p>
                    <p className='text-1xl'>Educational Requirement: <br />
                        <span className='f-dark'>{jobDetails.educationalRequirements}</span></p>
                    <p className='text-1xl'>Experience: <br />
                        <span className='f-dark'>{jobDetails.experiences}</span></p>
                </div>
                <div className='border w-1/4'>
                    <div className='custom-bg'>
                        <p>Job Details</p>
                        <hr />
                        <p>Salary: {jobDetails.salary}</p>
                        <p>Job Title: {jobDetails.jobTitle}</p>
                        <hr />
                        <p>Contact Info</p>
                        <hr />
                        {/* <p>Phone:{jobDetails.contactInformation.phone}</p>
                        <p>Email: {jobDetails.contactInformation.email}</p> */}
                        <p>Address: {jobDetails.location}</p>
                    </div>
                    <button className=''>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;