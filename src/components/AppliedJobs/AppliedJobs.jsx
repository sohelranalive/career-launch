import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1>This is my applied jobs section</h1>
            {data.map(img => <div><img src={img.companyLogo} /></div>)}
        </div>
    );
};

export default AppliedJobs;