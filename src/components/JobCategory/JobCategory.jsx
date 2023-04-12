import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const JobCategory = () => {

    const [jobCate, setJobCate] = useState([])

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setJobCate(data))
    }, [])

    return (
        <div className='mt-20'>
            <h1 className='text-5xl text-center'>Job Category List</h1>
            <p className='text-center mt-4 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:grid grid-cols-4 gap-6 pt-8'>
                {
                    jobCate.map(cate => <Category key={cate.id} cate={cate}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;