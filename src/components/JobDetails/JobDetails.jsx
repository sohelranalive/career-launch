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
            <h1>{jobDetails.jobTitle}</h1>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;