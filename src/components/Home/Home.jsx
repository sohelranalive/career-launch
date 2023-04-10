import React from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loaderData = useLoaderData();

    return (
        <div>
            <div className='custom-bg'>
                <Banner></Banner>
            </div>
            <div className='border custom-area'>
                <JobCategory></JobCategory>
                <FeaturedJobs loaderData={loaderData}></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;